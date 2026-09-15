export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          event_date: string | null
          id: string
          is_published: boolean
          member_ids: string[]
          photo_url: string | null
          sort_order: number
          title: string
          year_label: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          is_published?: boolean
          member_ids?: string[]
          photo_url?: string | null
          sort_order?: number
          title: string
          year_label?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          is_published?: boolean
          member_ids?: string[]
          photo_url?: string | null
          sort_order?: number
          title?: string
          year_label?: string | null
        }
        Relationships: []
      }
      activities: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          event_date: string | null
          id: string
          is_published: boolean
          location: string | null
          member_ids: string[]
          participants: string[]
          photo_url: string | null
          sort_order: number
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          is_published?: boolean
          location?: string | null
          member_ids?: string[]
          participants?: string[]
          photo_url?: string | null
          sort_order?: number
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          is_published?: boolean
          location?: string | null
          member_ids?: string[]
          participants?: string[]
          photo_url?: string | null
          sort_order?: number
          title?: string
        }
        Relationships: []
      }
      community_projects: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          event_date: string | null
          id: string
          impact: string | null
          is_published: boolean
          location: string | null
          member_ids: string[]
          photo_url: string | null
          sort_order: number
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          impact?: string | null
          is_published?: boolean
          location?: string | null
          member_ids?: string[]
          photo_url?: string | null
          sort_order?: number
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          impact?: string | null
          is_published?: boolean
          location?: string | null
          member_ids?: string[]
          photo_url?: string | null
          sort_order?: number
          title?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          subject?: string | null
        }
        Relationships: []
      }
      crew_history: {
        Row: {
          created_at: string
          date_label: string | null
          description: string | null
          id: string
          is_published: boolean
          location: string | null
          participants: string[]
          photo_url: string | null
          sort_order: number
          title: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          date_label?: string | null
          description?: string | null
          id?: string
          is_published?: boolean
          location?: string | null
          participants?: string[]
          photo_url?: string | null
          sort_order?: number
          title: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          date_label?: string | null
          description?: string | null
          id?: string
          is_published?: boolean
          location?: string | null
          participants?: string[]
          photo_url?: string | null
          sort_order?: number
          title?: string
          video_url?: string | null
        }
        Relationships: []
      }
      crew_stats: {
        Row: {
          id: string
          label: string
          sort_order: number
          value: string
        }
        Insert: {
          id?: string
          label: string
          sort_order?: number
          value: string
        }
        Update: {
          id?: string
          label?: string
          sort_order?: number
          value?: string
        }
        Relationships: []
      }
      gallery: {
        Row: {
          caption: string | null
          category: string
          created_at: string
          id: string
          image_url: string
          is_published: boolean
          member_id: string | null
          sort_order: number
          title: string | null
        }
        Insert: {
          caption?: string | null
          category?: string
          created_at?: string
          id?: string
          image_url: string
          is_published?: boolean
          member_id?: string | null
          sort_order?: number
          title?: string | null
        }
        Update: {
          caption?: string | null
          category?: string
          created_at?: string
          id?: string
          image_url?: string
          is_published?: boolean
          member_id?: string | null
          sort_order?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gallery_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      member_id_counters: {
        Row: {
          last_seq: number
          year: number
        }
        Insert: {
          last_seq?: number
          year: number
        }
        Update: {
          last_seq?: number
          year?: number
        }
        Relationships: []
      }
      member_private: {
        Row: {
          address: string | null
          date_of_birth: string | null
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          guardian_name: string | null
          guardian_phone: string | null
          id_number: string | null
          member_uuid: string
          notes: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          id_number?: string | null
          member_uuid: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          id_number?: string | null
          member_uuid?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "member_private_member_uuid_fkey"
            columns: ["member_uuid"]
            isOneToOne: true
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      members: {
        Row: {
          bio: string | null
          birth_day: number | null
          birth_month: number | null
          created_at: string
          current_section: string | null
          full_name: string
          id: string
          interests: string[]
          is_published: boolean
          join_date: string | null
          member_id: string
          photo_url: string | null
          previous_section: string | null
          responsibilities: string | null
          role_id: string | null
          scout_level: string | null
          show_birthday: boolean
          skills: string[]
          slug: string
          sort_order: number
          status: string
          updated_at: string
          years_in_scouting: number | null
        }
        Insert: {
          bio?: string | null
          birth_day?: number | null
          birth_month?: number | null
          created_at?: string
          current_section?: string | null
          full_name: string
          id?: string
          interests?: string[]
          is_published?: boolean
          join_date?: string | null
          member_id: string
          photo_url?: string | null
          previous_section?: string | null
          responsibilities?: string | null
          role_id?: string | null
          scout_level?: string | null
          show_birthday?: boolean
          skills?: string[]
          slug: string
          sort_order?: number
          status?: string
          updated_at?: string
          years_in_scouting?: number | null
        }
        Update: {
          bio?: string | null
          birth_day?: number | null
          birth_month?: number | null
          created_at?: string
          current_section?: string | null
          full_name?: string
          id?: string
          interests?: string[]
          is_published?: boolean
          join_date?: string | null
          member_id?: string
          photo_url?: string | null
          previous_section?: string | null
          responsibilities?: string | null
          role_id?: string | null
          scout_level?: string | null
          show_birthday?: boolean
          skills?: string[]
          slug?: string
          sort_order?: number
          status?: string
          updated_at?: string
          years_in_scouting?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "members_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      qr_scans: {
        Row: {
          country: string | null
          created_at: string
          device_type: string | null
          id: string
          member_uuid: string | null
          source: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          device_type?: string | null
          id?: string
          member_uuid?: string | null
          source?: string
        }
        Update: {
          country?: string | null
          created_at?: string
          device_type?: string | null
          id?: string
          member_uuid?: string | null
          source?: string
        }
        Relationships: [
          {
            foreignKeyName: "qr_scans_member_uuid_fkey"
            columns: ["member_uuid"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_leadership: boolean
          name: string
          rank: number
          responsibilities: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_leadership?: boolean
          name: string
          rank?: number
          responsibilities?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_leadership?: boolean
          name?: string
          rank?: number
          responsibilities?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          key: string
          updated_at: string
          value: string | null
        }
        Insert: {
          key: string
          updated_at?: string
          value?: string | null
        }
        Update: {
          key?: string
          updated_at?: string
          value?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      next_member_id: { Args: never; Returns: string }
    }
    Enums: {
      app_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
    },
  },
} as const
