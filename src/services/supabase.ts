import { createClient } from '@supabase/supabase-js'
import {Database} from "../../types/supabase.ts";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// console.log(supabaseUrl)

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)