// Almacenamiento local (localStorage) con la misma forma que la API usada en el editor.
// Nota: los datos se guardan en el navegador de cada visitante. Para un catálogo
// que TODOS los clientes vean igual, más adelante conviene un backend (ver README).

const PREFIX = "pinon:";

export const storage = {
  async get(key) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      if (raw === null) return null;
      return { key, value: raw };
    } catch (e) {
      return null;
    }
  },
  async set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, value);
      return { key, value };
    } catch (e) {
      console.error("No se pudo guardar en localStorage", e);
      return null;
    }
  },
  async delete(key) {
    try {
      localStorage.removeItem(PREFIX + key);
      return { key, deleted: true };
    } catch (e) {
      return null;
    }
  },
};
