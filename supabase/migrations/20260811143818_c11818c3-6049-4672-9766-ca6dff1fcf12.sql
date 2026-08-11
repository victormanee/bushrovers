CREATE POLICY "Bush Rovers media is readable" ON storage.objects FOR SELECT USING (bucket_id = 'bushrovers');
CREATE POLICY "Admins upload media" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'bushrovers' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update media" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'bushrovers' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete media" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'bushrovers' AND public.has_role(auth.uid(), 'admin'));