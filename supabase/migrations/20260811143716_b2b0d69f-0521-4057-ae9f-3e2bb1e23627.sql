-- roles / admin
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- crew roles
CREATE TABLE public.roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  responsibilities text,
  is_leadership boolean NOT NULL DEFAULT false,
  rank integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.roles TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.roles TO authenticated;
GRANT ALL ON public.roles TO service_role;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Roles are public" ON public.roles FOR SELECT USING (true);
CREATE POLICY "Admins manage crew roles" ON public.roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- members (public-safe columns only)
CREATE TABLE public.members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  member_id text NOT NULL UNIQUE,
  full_name text NOT NULL,
  role_id uuid REFERENCES public.roles(id) ON DELETE SET NULL,
  photo_url text,
  bio text,
  join_date date,
  birth_day integer,
  birth_month integer,
  show_birthday boolean NOT NULL DEFAULT false,
  skills text[] NOT NULL DEFAULT '{}',
  interests text[] NOT NULL DEFAULT '{}',
  scout_level text,
  responsibilities text,
  previous_section text,
  current_section text,
  years_in_scouting integer,
  status text NOT NULL DEFAULT 'active',
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.members TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.members TO authenticated;
GRANT ALL ON public.members TO service_role;
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published members are public" ON public.members FOR SELECT USING (is_published = true);
CREATE POLICY "Admins manage members" ON public.members FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER members_updated_at BEFORE UPDATE ON public.members FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- private member data: admins only, no anon grant
CREATE TABLE public.member_private (
  member_uuid uuid PRIMARY KEY REFERENCES public.members(id) ON DELETE CASCADE,
  date_of_birth date,
  phone text,
  email text,
  address text,
  id_number text,
  emergency_contact_name text,
  emergency_contact_phone text,
  guardian_name text,
  guardian_phone text,
  notes text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.member_private TO authenticated;
GRANT ALL ON public.member_private TO service_role;
ALTER TABLE public.member_private ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage private member data" ON public.member_private FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- member id generation
CREATE TABLE public.member_id_counters (
  year integer PRIMARY KEY,
  last_seq integer NOT NULL DEFAULT 0
);
GRANT ALL ON public.member_id_counters TO service_role;
GRANT SELECT, INSERT, UPDATE ON public.member_id_counters TO authenticated;
ALTER TABLE public.member_id_counters ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage counters" ON public.member_id_counters FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.next_member_id()
RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE y integer := EXTRACT(YEAR FROM now())::int; s integer;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'Not authorized'; END IF;
  INSERT INTO public.member_id_counters(year, last_seq) VALUES (y, 1)
    ON CONFLICT (year) DO UPDATE SET last_seq = public.member_id_counters.last_seq + 1
    RETURNING last_seq INTO s;
  RETURN 'BR-' || y::text || '-' || lpad(s::text, 3, '0');
END; $$;

-- content tables
CREATE TABLE public.activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text,
  event_date date,
  location text,
  description text,
  photo_url text,
  participants text[] NOT NULL DEFAULT '{}',
  member_ids uuid[] NOT NULL DEFAULT '{}',
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text,
  event_date date,
  year_label text,
  description text,
  photo_url text,
  member_ids uuid[] NOT NULL DEFAULT '{}',
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.community_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text,
  event_date date,
  location text,
  description text,
  impact text,
  photo_url text,
  member_ids uuid[] NOT NULL DEFAULT '{}',
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  caption text,
  category text NOT NULL DEFAULT 'Adventures',
  image_url text NOT NULL,
  member_id uuid REFERENCES public.members(id) ON DELETE SET NULL,
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.crew_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date_label text,
  description text,
  location text,
  participants text[] NOT NULL DEFAULT '{}',
  photo_url text,
  video_url text,
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.crew_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  value text NOT NULL,
  sort_order integer NOT NULL DEFAULT 100
);
CREATE TABLE public.site_settings (
  key text PRIMARY KEY,
  value text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.activities, public.achievements, public.community_projects, public.gallery, public.crew_history, public.crew_stats, public.site_settings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.activities, public.achievements, public.community_projects, public.gallery, public.crew_history, public.crew_stats, public.site_settings TO authenticated;
GRANT ALL ON public.activities, public.achievements, public.community_projects, public.gallery, public.crew_history, public.crew_stats, public.site_settings TO service_role;

ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crew_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crew_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published activities are public" ON public.activities FOR SELECT USING (is_published = true);
CREATE POLICY "Admins manage activities" ON public.activities FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Published achievements are public" ON public.achievements FOR SELECT USING (is_published = true);
CREATE POLICY "Admins manage achievements" ON public.achievements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Published projects are public" ON public.community_projects FOR SELECT USING (is_published = true);
CREATE POLICY "Admins manage projects" ON public.community_projects FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Published gallery is public" ON public.gallery FOR SELECT USING (is_published = true);
CREATE POLICY "Admins manage gallery" ON public.gallery FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Published history is public" ON public.crew_history FOR SELECT USING (is_published = true);
CREATE POLICY "Admins manage history" ON public.crew_history FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Stats are public" ON public.crew_stats FOR SELECT USING (true);
CREATE POLICY "Admins manage stats" ON public.crew_stats FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Settings are public" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Admins manage settings" ON public.site_settings FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- QR scan analytics (no personal data)
CREATE TABLE public.qr_scans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  member_uuid uuid REFERENCES public.members(id) ON DELETE CASCADE,
  source text NOT NULL DEFAULT 'profile',
  device_type text,
  country text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.qr_scans TO anon;
GRANT SELECT, INSERT ON public.qr_scans TO authenticated;
GRANT ALL ON public.qr_scans TO service_role;
ALTER TABLE public.qr_scans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can record a scan" ON public.qr_scans FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins read scans" ON public.qr_scans FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT, DELETE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send a message" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins read messages" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete messages" ON public.contact_messages FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- seed crew roles
INSERT INTO public.roles (name, description, responsibilities, is_leadership, rank) VALUES
  ('Crew Leader', 'Leads the crew, represents Bush Rovers and drives the crew programme.', 'Chairs crew meetings, plans the programme, represents the crew externally and mentors members.', true, 10),
  ('Assistant Crew Leader', 'Supports the Crew Leader and deputises when required.', 'Supports programme delivery, leads in the absence of the Crew Leader, coordinates teams.', true, 20),
  ('Scribe', 'Keeps the written record and communication of the crew.', 'Records minutes, maintains the member register, handles correspondence and documents crew activities.', true, 30),
  ('Quartermaster', 'Custodian of crew equipment and camp stores.', 'Maintains, issues and accounts for all crew equipment before and after every activity.', true, 40),
  ('Treasurer', 'Manages crew finances.', 'Collects dues, keeps financial records and reports on crew finances.', true, 50),
  ('Team Leader', 'Leads a patrol or team within the crew.', 'Leads a small team during activities, mentors members and reports to the Crew Leader.', false, 60),
  ('Member', 'An active Rover of the crew.', 'Participates fully in crew activities, service projects and training.', false, 100);

-- seed timeline placeholders
INSERT INTO public.crew_history (title, date_label, description, location, sort_order) VALUES
  ('The Beginning', '[FOUNDING DATE]', '[Describe how the idea of Bush Rovers began.]', '[CREW LOCATION]', 10),
  ('Formation', '[FORMATION DATE]', '[Describe when the crew was officially established.]', '[CREW LOCATION]', 20),
  ('First Adventure', '[EVENT DATE]', '[Describe the first major activity of the crew.]', '[LOCATION]', 30),
  ('Our First Service Project', '[PROJECT DATE]', '[Describe the first major community service initiative.]', '[LOCATION]', 40),
  ('Today', 'Present', '[Describe where Bush Rovers currently stands.]', '[CREW LOCATION]', 50);

INSERT INTO public.activities (title, category, location, description, sort_order) VALUES
  ('Hiking & Trails', 'Adventure', '[LOCATION]', '[Describe the crew''s hiking programme.]', 10),
  ('Camping', 'Adventure', '[LOCATION]', '[Describe the crew''s camping programme.]', 20),
  ('Expeditions', 'Adventure', '[LOCATION]', '[Describe crew expeditions.]', 30),
  ('First Aid Training', 'Training', '[LOCATION]', '[Describe first aid training.]', 40),
  ('Community Service', 'Service', '[LOCATION]', '[Describe community service activities.]', 50),
  ('Environmental Conservation', 'Conservation', '[LOCATION]', '[Describe conservation work.]', 60),
  ('Leadership Training', 'Training', '[LOCATION]', '[Describe leadership training.]', 70),
  ('Scout Competitions', 'Competition', '[LOCATION]', '[Describe competitions the crew takes part in.]', 80),
  ('Navigation & Survival Skills', 'Skills', '[LOCATION]', '[Describe outdoor skills training.]', 90);

INSERT INTO public.crew_stats (label, value, sort_order) VALUES
  ('Community Activities', '[0]', 10),
  ('People Reached', '[0]', 20),
  ('Trees Planted', '[0]', 30),
  ('Volunteer Hours', '[0]', 40);

INSERT INTO public.site_settings (key, value) VALUES
  ('contact_email', '[EMAIL ADDRESS]'),
  ('contact_phone', '[PHONE NUMBER]'),
  ('location', '[CREW LOCATION]'),
  ('instagram', ''),
  ('facebook', ''),
  ('twitter', ''),
  ('whatsapp', '');

-- sample member
INSERT INTO public.member_id_counters (year, last_seq) VALUES (2026, 1);
INSERT INTO public.members (slug, member_id, full_name, role_id, bio, join_date, birth_day, birth_month, show_birthday, skills, interests, scout_level, responsibilities, previous_section, current_section, years_in_scouting, status, sort_order)
SELECT 'victor-mane', 'BR-2026-001', 'Victor Mane', r.id,
  '[Add Victor''s biography here through the admin dashboard.]',
  '2026-01-01', 28, 10, true,
  ARRAY['Leadership','First Aid','Navigation','ICT','Public Speaking','Camping','Communication'],
  ARRAY['Hiking','Photography','Community Service'],
  'Rover / Jasiri Scout',
  'Records crew minutes, maintains the member register and documents crew activities.',
  '[PREVIOUS SECTION]', 'Rover / Jasiri', NULL, 'active', 10
FROM public.roles r WHERE r.name = 'Scribe';

INSERT INTO public.member_private (member_uuid, date_of_birth)
SELECT id, '2007-10-28' FROM public.members WHERE slug = 'victor-mane';