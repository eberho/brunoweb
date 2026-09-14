import { supabase, BUCKET } from "./supabaseClient";

// ── PRODUCTOS ────────────────────────────────────────────────────

export async function fetchProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) throw error;
  // Normaliza al formato que usa la app
  return (data || []).map((row) => ({
    id: row.id,
    name: row.name || "",
    price: row.price || "",
    desc: row.description || "",
    category: row.category || "Ropa",
    photos: Array.isArray(row.photos) ? row.photos : [],
  }));
}

export async function createProduct(item) {
  const { data, error } = await supabase
    .from("products")
    .insert({
      name: item.name,
      price: item.price,
      description: item.desc,
      category: item.category,
      photos: item.photos,
    })
    .select()
    .single();
  if (error) throw error;
  return data.id;
}

export async function updateProduct(item) {
  const { error } = await supabase
    .from("products")
    .update({
      name: item.name,
      price: item.price,
      description: item.desc,
      category: item.category,
      photos: item.photos,
    })
    .eq("id", item.id);
  if (error) throw error;
}

export async function deleteProduct(id) {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw error;
}

// ── FOTOS (Storage) ──────────────────────────────────────────────

// Sube un File y devuelve la URL pública de la imagen.
export async function uploadPhoto(file) {
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

// ── AJUSTES (número de WhatsApp) ─────────────────────────────────

export async function fetchPhone() {
  const { data, error } = await supabase
    .from("settings")
    .select("value")
    .eq("key", "phone")
    .maybeSingle();
  if (error) throw error;
  return data ? data.value : "";
}

export async function savePhone(value) {
  const { error } = await supabase
    .from("settings")
    .upsert({ key: "phone", value }, { onConflict: "key" });
  if (error) throw error;
}
