# Piñon — Tienda de ropa (versión con catálogo compartido)

Esta versión guarda los productos y las fotos en la **nube (Supabase)**, así que
**todos los clientes ven el mismo catálogo** desde cualquier dispositivo. Ese era
el problema de la versión anterior, que guardaba todo solo en tu navegador.

Construida con **React + Vite + Supabase**, lista para **Vercel**.

Sigue los pasos en orden. Es más largo que antes, pero solo se hace una vez.

---

## PASO 1 — Crear el proyecto en Supabase (gratis)

1. Entra a https://supabase.com y crea una cuenta.
2. Haz clic en **New project**. Ponle un nombre (ej. `pinon`) y una contraseña
   para la base de datos (guárdala). Elige la región más cercana y crea.
3. Espera 1–2 minutos a que el proyecto quede listo.

## PASO 2 — Crear las tablas

1. En el menú lateral de Supabase entra a **SQL Editor**.
2. Abre el archivo `supabase-setup.sql` de este proyecto, copia todo su contenido,
   pégalo en el editor y haz clic en **Run**.
3. Deberías ver "Success". Esto crea las tablas de productos y ajustes.

## PASO 3 — Crear el bucket de fotos

1. En el menú lateral entra a **Storage**.
2. Haz clic en **New bucket**.
3. Nombre exacto: **`product-photos`** (así, con guion).
4. Marca la opción **Public bucket** (para que las fotos se puedan mostrar).
5. Crea el bucket.

## PASO 4 — Copiar tus claves

1. En el menú lateral entra a **Project Settings → API**.
2. Copia dos valores:
   - **Project URL** (algo como `https://xxxx.supabase.co`)
   - **anon public** key (una clave larga)

Los usarás en el siguiente paso.

---

## PASO 5 — Subir a Vercel

1. Sube esta carpeta a un repositorio de **GitHub**.
2. En https://vercel.com haz **Add New… → Project** e importa el repo.
3. **Antes de desplegar**, abre la sección **Environment Variables** y agrega
   estas dos (con los valores del PASO 4):

   | Name                     | Value                          |
   |--------------------------|--------------------------------|
   | `VITE_SUPABASE_URL`      | tu Project URL                 |
   | `VITE_SUPABASE_ANON_KEY` | tu clave anon public           |

4. Haz clic en **Deploy**. ¡Listo!

> Si ya habías desplegado antes de agregar las variables, ve a
> **Settings → Environment Variables**, agrégalas y luego en **Deployments**
> haz **Redeploy**.

---

## PASO 6 — Cargar tu tienda

1. Abre tu web de Vercel.
2. Haz clic en el candado 🔒 e ingresa la contraseña de administrador.
3. Configura tu número de WhatsApp con el engranaje ⚙.
4. Agrega productos con sus fotos. Ahora **cualquier persona, en cualquier
   dispositivo, verá el mismo catálogo**.

---

## Configuración

En `src/App.jsx`, cerca del inicio:

```js
const ADMIN_PASSWORD = "admin123";   // ← CÁMBIALA antes de publicar
```

También puedes cambiar ahí el nombre de la tienda, textos, categorías y colores
(ver más abajo).

---

## Probar en tu computadora (opcional)

```bash
npm install
cp .env.example .env      # y pon tus claves de Supabase dentro
npm run dev
```

---

## ¿Qué archivo modifico para cambiar la página?

Casi todo está en **`src/App.jsx`**:
- Nombre de la tienda: busca `Piñon`.
- Textos del hero: busca `Tu estilo, sin filtros`.
- Categorías: `const CATEGORIES = [...]`.
- Colores: el objeto `styles` y el bloque `css` al final.
- Contraseña: `const ADMIN_PASSWORD`.

No necesitas tocar: `supabaseClient.js`, `db.js`, `main.jsx`, `vite.config.js`,
`vercel.json`.

Cada vez que edites y subas el cambio a GitHub, Vercel actualiza la web sola.

---

## Nota sobre seguridad

El catálogo se puede leer y escribir públicamente (la contraseña de admin está en
la app, del lado del navegador). Es adecuado para una tienda pequeña. Si en el
futuro quieres seguridad estricta (que solo tú puedas escribir aunque alguien vea
el código), se puede añadir un login real de Supabase — pídemelo y lo agregamos.
