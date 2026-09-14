import { createClient } from "@supabase/supabase-js";

// Estas dos variables se configuran en Vercel (y en el archivo .env para probar
// localmente). Nunca escribas las claves directamente aquí.
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const hasSupabase = Boolean(url && key);

export const supabase = hasSupabase ? createClient(url, key) : null;

// Nombre del "bucket" (carpeta de imágenes) que crearás en Supabase.
export const BUCKET = "product-photos";
