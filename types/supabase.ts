export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          cabinId: number | null
          cabinPrice: number | null
          created_at: string | null
          endDate: string | null
          extrasPrice: number | null
          guestId: number | null
          hasBreakfast: boolean | null
          id: number
          isPaid: boolean | null
          numGuest: number | null
          numNights: number | null
          observation: string | null
          startDate: string | null
          status: string | null
          totalPrice: number | null
        }
        Insert: {
          cabinId?: number | null
          cabinPrice?: number | null
          created_at?: string | null
          endDate?: string | null
          extrasPrice?: number | null
          guestId?: number | null
          hasBreakfast?: boolean | null
          id?: number
          isPaid?: boolean | null
          numGuest?: number | null
          numNights?: number | null
          observation?: string | null
          startDate?: string | null
          status?: string | null
          totalPrice?: number | null
        }
        Update: {
          cabinId?: number | null
          cabinPrice?: number | null
          created_at?: string | null
          endDate?: string | null
          extrasPrice?: number | null
          guestId?: number | null
          hasBreakfast?: boolean | null
          id?: number
          isPaid?: boolean | null
          numGuest?: number | null
          numNights?: number | null
          observation?: string | null
          startDate?: string | null
          status?: string | null
          totalPrice?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_cabinId_fkey"
            columns: ["cabinId"]
            referencedRelation: "cabins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_guestId_fkey"
            columns: ["guestId"]
            referencedRelation: "guests"
            referencedColumns: ["id"]
          }
        ]
      }
      cabins: {
        Row: {
          created_at: string | null
          description: string | null
          discount: number | null
          id: number
          image: string | null
          maxCapacity: number | null
          name: string | null
          regularPrice: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          maxCapacity?: number | null
          name?: string | null
          regularPrice?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          maxCapacity?: number | null
          name?: string | null
          regularPrice?: number | null
        }
        Relationships: []
      }
      guests: {
        Row: {
          CountryFlag: string | null
          created_at: string | null
          Email: string | null
          FullName: string | null
          id: number
          NationalId: string | null
          nationality: string | null
        }
        Insert: {
          CountryFlag?: string | null
          created_at?: string | null
          Email?: string | null
          FullName?: string | null
          id?: number
          NationalId?: string | null
          nationality?: string | null
        }
        Update: {
          CountryFlag?: string | null
          created_at?: string | null
          Email?: string | null
          FullName?: string | null
          id?: number
          NationalId?: string | null
          nationality?: string | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          breakFastPrice: number | null
          created_at: string | null
          id: number
          maxBookingLength: number | null
          maxGuestPerBooking: number | null
          minBookingLength: number | null
        }
        Insert: {
          breakFastPrice?: number | null
          created_at?: string | null
          id?: number
          maxBookingLength?: number | null
          maxGuestPerBooking?: number | null
          minBookingLength?: number | null
        }
        Update: {
          breakFastPrice?: number | null
          created_at?: string | null
          id?: number
          maxBookingLength?: number | null
          maxGuestPerBooking?: number | null
          minBookingLength?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
