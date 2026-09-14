# Piñon — Tienda de ropa

Tienda de ropa tipo landing page con catálogo de productos, hasta 3 fotos por
producto, categorías, filtros y botón de compra por WhatsApp. Incluye un modo
administrador protegido con contraseña para agregar, editar y eliminar productos.

Construida con **React + Vite**.

---

## 1. Probar en tu computadora (opcional)

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal (normalmente http://localhost:5173).

---

## 2. Subir a Vercel

Tienes dos caminos. El más sencillo es el A.

### Opción A — Desde la web de Vercel (recomendado)

1. Sube esta carpeta a un repositorio de **GitHub** (o GitLab / Bitbucket).
2. Entra a https://vercel.com e inicia sesión.
3. Haz clic en **Add New… → Project** e importa tu repositorio.
4. Vercel detecta Vite automáticamente. Deja la configuración por defecto:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Haz clic en **Deploy**. En un minuto tendrás tu tienda en línea.

### Opción B — Desde la terminal

```bash
npm install -g vercel
vercel
```

Sigue las preguntas (acepta los valores por defecto) y al final te dará la URL.

---

## 3. Cómo usar la tienda

### Como cliente
Solo ve la colección y puede pedir cualquier prenda con el botón verde de
**WhatsApp**.

### Como administrador
1. Haz clic en el candado 🔒 arriba a la derecha.
2. Ingresa la contraseña (ver abajo).
3. Ahora puedes **Agregar producto**, editar (✏️) o eliminar (🗑️) cada prenda,
   y configurar el número de WhatsApp con el engranaje ⚙.

---

## 4. Configuración importante

Abre el archivo **`src/App.jsx`** y busca cerca del inicio:

```js
const ADMIN_PASSWORD = "admin123";   // ← cámbiala por tu contraseña
```

- **Cambia la contraseña** antes de publicar.
- El **número de WhatsApp** se configura desde la propia app (engranaje ⚙),
  con código de país y solo dígitos, por ejemplo `521234567890`.

---

## 5. Nota sobre el guardado de datos (importante)

Esta versión guarda los productos y las fotos en el **navegador de cada
visitante** (localStorage). Esto significa que:

- Los productos que cargues como administrador se guardan **en tu dispositivo**.
- Otros visitantes **no verán automáticamente** los mismos productos, y las fotos
  no se sincronizan entre dispositivos.

Es perfecto para probar, hacer demos o una tienda de un solo dispositivo. Para
una tienda real donde **todos los clientes vean el mismo catálogo**, necesitas
una base de datos en la nube. Opciones sencillas y gratuitas que encajan muy
bien con Vercel:

- **Supabase** (base de datos + almacenamiento de imágenes)
- **Vercel KV / Postgres**
- **Firebase**

Si quieres, puedo adaptar el proyecto para usar una de estas y que el catálogo
sea compartido y permanente.
