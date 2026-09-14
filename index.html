import React, { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, X, ImageIcon, Check, MessageCircle, Settings, Lock, LogOut } from "lucide-react";

// ── Design tokens ────────────────────────────────────────────────
// Base:      #FBFAF7 warm paper
// Ink:       #1C1917 near-black text
// Thread:    #3B4A3F deep sage (brand)
// Accent:    #C8553D burnt sienna (price / CTA)
// Muted:     #8A857C stone

const CURRENCY = "$";
const STORE_KEY = "catalog:v1";
const PHONE_KEY = "shopPhone:v1";
// Contraseña del administrador. Cámbiala por la que quieras.
const ADMIN_PASSWORD = "admin123";

const MAX_PHOTOS = 3;
const CATEGORIES = ["Ropa", "Calzado", "Accesorios", "Ofertas"];
const empty = { id: null, name: "", price: "", desc: "", photos: [], category: "Ropa" };

// Compat: normaliza productos viejos que tenían una sola "photo"
const getPhotos = (it) => {
  if (Array.isArray(it.photos)) return it.photos.filter(Boolean);
  if (it.photo) return [it.photo];
  return [];
};

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // product object or null
  const [phone, setPhone] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeCat, setActiveCat] = useState("Todo");
  const fileRef = useRef(null);

  // Load catalog + phone (shared = true so every visitor sees the same catalog)
  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get(STORE_KEY, true);
        if (res && res.value) setItems(JSON.parse(res.value));
      } catch (e) {
        // no catalog yet — that's fine
      }
      try {
        const p = await window.storage.get(PHONE_KEY, true);
        if (p && p.value) setPhone(p.value);
      } catch (e) {
        // no phone set yet
      }
      setLoading(false);
    })();
  }, []);

  const persist = async (next) => {
    setItems(next);
    try {
      await window.storage.set(STORE_KEY, JSON.stringify(next), true);
    } catch (e) {
      console.error("No se pudo guardar", e);
    }
  };

  const savePhone = async (value) => {
    const clean = value.replace(/[^\d]/g, "");
    setPhone(clean);
    try {
      await window.storage.set(PHONE_KEY, clean, true);
    } catch (e) {
      console.error("No se pudo guardar el teléfono", e);
    }
    setShowSettings(false);
  };

  const waLink = (it) => {
    if (!phone) return null;
    const price = it.price ? ` (${CURRENCY}${it.price})` : "";
    const msg = `Hola, me interesa este producto: ${it.name}${price}. ¿Está disponible?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  const saveItem = async (data) => {
    let next;
    if (data.id) {
      next = items.map((it) => (it.id === data.id ? data : it));
    } else {
      next = [...items, { ...data, id: Date.now().toString() }];
    }
    await persist(next);
    setEditing(null);
  };

  const removeItem = async (id) => {
    await persist(items.filter((it) => it.id !== id));
  };

  return (
    <div style={styles.page}>
      <style>{css}</style>

      <nav style={styles.nav}>
        <div style={styles.brand}>
          <span style={styles.logoMark}>◆</span>
          <span style={styles.brandName}>Piñon</span>
        </div>
        <div style={styles.navLinks} className="nav-links">
          <a href="#coleccion" className="nav-link">Colección</a>
          <a href="#categorias" className="nav-link">Categorías</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {isAdmin ? (
            <>
              <button
                className="ghost icon-only"
                title="Configurar WhatsApp"
                onClick={() => setShowSettings(true)}
              >
                <Settings size={17} />
              </button>
              <button
                className="ghost icon-only"
                title="Salir del modo administrador"
                onClick={() => setIsAdmin(false)}
              >
                <LogOut size={17} />
              </button>
              <button className="cta" onClick={() => setEditing({ ...empty })}>
                <Plus size={17} strokeWidth={2.5} /> Producto
              </button>
            </>
          ) : (
            <button
              className="ghost icon-only"
              title="Acceso administrador"
              onClick={() => setShowLogin(true)}
            >
              <Lock size={16} />
            </button>
          )}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroBlob1} />
        <div style={styles.heroBlob2} />
        <div style={styles.heroInner}>
          <span style={styles.heroTag}>Nueva temporada 2026</span>
          <h1 style={styles.heroTitle}>
            Tu estilo,<br />sin filtros.
          </h1>
          <p style={styles.heroSub}>
            Prendas que hablan por ti. Descubre la colección, elige tu favorita y
            pídela directo por WhatsApp.
          </p>
          <div style={styles.heroBtns}>
            <a href="#coleccion" className="cta big">Ver colección</a>
            <a href="#categorias" className="ghost big">Explorar categorías</a>
          </div>
        </div>
      </section>

      {/* ── CATEGORÍAS ── */}
      <section id="categorias" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>Categorías destacadas</h2>
          <p style={styles.sectionSub}>Encuentra justo lo que buscas.</p>
        </div>
        <div style={styles.catGrid}>
          {CATEGORIES.map((cat, idx) => {
            const count = items.filter((it) => (it.category || "Ropa") === cat).length;
            return (
              <button
                key={cat}
                className="cat-card"
                style={{ background: CAT_COLORS[idx % CAT_COLORS.length] }}
                onClick={() => {
                  setActiveCat(cat);
                  document.getElementById("coleccion")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span style={styles.catName}>{cat}</span>
                <span style={styles.catCount}>
                  {count} {count === 1 ? "artículo" : "artículos"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── COLECCIÓN ── */}
      <section id="coleccion" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>Colección</h2>
          <p style={styles.sectionSub}>
            {items.length === 0
              ? "Muy pronto, nuevas prendas."
              : `${items.length} ${items.length === 1 ? "prenda disponible" : "prendas disponibles"}`}
          </p>
        </div>

        {/* Filtros */}
        {items.length > 0 && (
          <div style={styles.filterRow}>
            {["Todo", ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                className={activeCat === cat ? "chip active" : "chip"}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <p style={styles.state}>Cargando catálogo…</p>
        ) : items.length === 0 ? (
          <div style={styles.emptyBox}>
            <ImageIcon size={40} strokeWidth={1.4} color="#C9C4DE" />
            <p style={{ margin: "14px 0 18px", color: "#8A857C" }}>
              {isAdmin ? "Tu vitrina está vacía." : "Pronto habrá novedades en la colección."}
            </p>
            {isAdmin && (
              <button className="cta" onClick={() => setEditing({ ...empty })}>
                <Plus size={17} strokeWidth={2.5} /> Agregar producto
              </button>
            )}
          </div>
        ) : (
          (() => {
            const shown = items.filter(
              (it) => activeCat === "Todo" || (it.category || "Ropa") === activeCat
            );
            if (shown.length === 0)
              return (
                <p style={styles.state}>
                  No hay prendas en "{activeCat}" por ahora.
                </p>
              );
            return (
              <div style={styles.grid}>
                {shown.map((it) => (
                  <article key={it.id} className="card">
                    <div style={styles.photoWrap}>
                      <Carousel photos={getPhotos(it)} name={it.name} />
                      <span style={styles.catBadge}>{it.category || "Ropa"}</span>
                      {isAdmin && (
                        <div className="hover-actions">
                          <button
                            className="icon-btn"
                            title="Editar"
                            onClick={() => setEditing(it)}
                          >
                            <Pencil size={15} />
                          </button>
                          <button
                            className="icon-btn danger"
                            title="Eliminar"
                            onClick={() => removeItem(it.id)}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      )}
                    </div>
                    <div style={styles.cardBody}>
                      <h3 style={styles.itemName}>{it.name || "Sin nombre"}</h3>
                      {it.desc && <p style={styles.itemDesc}>{it.desc}</p>}
                      <p style={styles.price}>
                        {it.price ? `${CURRENCY}${it.price}` : "—"}
                      </p>
                      {phone ? (
                        <a
                          className="wa-btn"
                          href={waLink(it)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle size={16} strokeWidth={2.2} /> Comprar por WhatsApp
                        </a>
                      ) : (
                        <button
                          className="wa-btn disabled"
                          onClick={() => isAdmin && setShowSettings(true)}
                          title={isAdmin ? "Configura tu WhatsApp" : "WhatsApp no disponible"}
                        >
                          <MessageCircle size={16} strokeWidth={2.2} />{" "}
                          {isAdmin ? "Configura WhatsApp" : "WhatsApp no disponible"}
                        </button>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            );
          })()
        )}
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" style={styles.contact}>
        <div style={styles.contactInner}>
          <h2 style={{ ...styles.h2, color: "#fff" }}>¿Lista para tu próxima prenda?</h2>
          <p style={styles.contactSub}>
            Escríbenos por WhatsApp y te atendemos al instante. También nos
            encuentras en redes.
          </p>
          {phone ? (
            <a
              className="wa-btn big"
              href={`https://wa.me/${phone}?text=${encodeURIComponent("¡Hola! Quiero más información sobre sus productos.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: 300, margin: "0 auto" }}
            >
              <MessageCircle size={18} strokeWidth={2.2} /> Escríbenos por WhatsApp
            </a>
          ) : (
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
              {isAdmin ? "Configura tu WhatsApp desde ⚙ para activar este botón." : ""}
            </p>
          )}
          <div style={styles.social}>
            <span className="social-link">Instagram</span>
            <span className="social-link">TikTok</span>
            <span className="social-link">Facebook</span>
          </div>
          <p style={styles.footNote}>© 2026 Piñon · Hecho con cariño</p>
        </div>
      </section>

      {editing && (
        <Editor
          initial={editing}
          onCancel={() => setEditing(null)}
          onSave={saveItem}
          fileRef={fileRef}
        />
      )}

      {showSettings && (
        <PhoneSettings
          initial={phone}
          onCancel={() => setShowSettings(false)}
          onSave={savePhone}
        />
      )}

      {showLogin && (
        <AdminLogin
          onCancel={() => setShowLogin(false)}
          onSuccess={() => {
            setIsAdmin(true);
            setShowLogin(false);
          }}
        />
      )}
    </div>
  );
}

// ── Admin login modal ────────────────────────────────────────────
function AdminLogin({ onCancel, onSuccess }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (pw === ADMIN_PASSWORD) onSuccess();
    else setError(true);
  };

  return (
    <div style={styles.overlay} onClick={onCancel}>
      <div style={{ ...styles.modal, maxWidth: 380 }} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHead}>
          <h2 style={styles.modalTitle}>Acceso administrador</h2>
          <button className="close" onClick={onCancel}>
            <X size={18} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <p style={{ fontSize: 14, color: "#8A857C", margin: "0 0 4px", lineHeight: 1.5 }}>
            Ingresa la contraseña para gestionar productos y la configuración.
          </p>
          <label style={styles.label}>Contraseña</label>
          <input
            style={{ ...styles.input, borderColor: error ? "#FF3B6B" : "#E7DEF3" }}
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="••••••••"
            autoFocus
          />
          {error && (
            <p style={{ fontSize: 13, color: "#FF3B6B", marginTop: 8 }}>
              Contraseña incorrecta.
            </p>
          )}
        </div>
        <div style={styles.modalFoot}>
          <button className="ghost" onClick={onCancel}>
            Cancelar
          </button>
          <button className="cta" onClick={submit}>
            <Lock size={15} strokeWidth={2.5} /> Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

// ── WhatsApp settings modal ──────────────────────────────────────
function PhoneSettings({ initial, onCancel, onSave }) {
  const [value, setValue] = useState(initial);
  const digits = value.replace(/[^\d]/g, "");

  return (
    <div style={styles.overlay} onClick={onCancel}>
      <div style={{ ...styles.modal, maxWidth: 400 }} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHead}>
          <h2 style={styles.modalTitle}>WhatsApp de la tienda</h2>
          <button className="close" onClick={onCancel}>
            <X size={18} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <p style={{ fontSize: 14, color: "#8A857C", margin: "0 0 4px", lineHeight: 1.5 }}>
            Escribe tu número con código de país, sin espacios ni signos. Ej:
            <strong style={{ color: "#5B7BFF" }}> 521234567890</strong> (México),
            <strong style={{ color: "#5B7BFF" }}> 34612345678</strong> (España).
          </p>
          <label style={styles.label}>Número</label>
          <input
            style={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="521234567890"
            inputMode="tel"
          />
          {digits && (
            <p style={{ fontSize: 13, color: "#5B7BFF", marginTop: 8 }}>
              Se enviará a: wa.me/{digits}
            </p>
          )}
        </div>
        <div style={styles.modalFoot}>
          <button className="ghost" onClick={onCancel}>
            Cancelar
          </button>
          <button className="cta" disabled={digits.length < 8} onClick={() => onSave(value)}>
            <Check size={16} strokeWidth={2.5} /> Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Product carousel (card view) ─────────────────────────────────
function Carousel({ photos, name }) {
  const [i, setI] = useState(0);
  const list = photos && photos.length ? photos : [];

  if (list.length === 0) {
    return (
      <div style={styles.noPhoto}>
        <ImageIcon size={30} strokeWidth={1.3} color="#C4BEB4" />
      </div>
    );
  }

  const go = (e, dir) => {
    e.preventDefault();
    e.stopPropagation();
    setI((prev) => (prev + dir + list.length) % list.length);
  };

  return (
    <>
      <img src={list[i]} alt={name} style={styles.photo} />
      {list.length > 1 && (
        <>
          <button className="car-arrow left" onClick={(e) => go(e, -1)} aria-label="Anterior">
            ‹
          </button>
          <button className="car-arrow right" onClick={(e) => go(e, 1)} aria-label="Siguiente">
            ›
          </button>
          <div className="car-dots">
            {list.map((_, d) => (
              <span key={d} className={d === i ? "dot on" : "dot"} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

// ── Editor modal ─────────────────────────────────────────────────
function Editor({ initial, onCancel, onSave }) {
  const [form, setForm] = useState({ ...initial, photos: getPhotos(initial) });
  const inputRef = useRef(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onAddPhotos = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const room = MAX_PHOTOS - form.photos.length;
    const toRead = files.slice(0, room);
    Promise.all(
      toRead.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
          })
      )
    ).then((imgs) => {
      setForm((f) => ({ ...f, photos: [...f.photos, ...imgs].slice(0, MAX_PHOTOS) }));
    });
    e.target.value = ""; // permitir volver a elegir el mismo archivo
  };

  const removePhoto = (idx) => {
    setForm((f) => ({ ...f, photos: f.photos.filter((_, k) => k !== idx) }));
  };

  const canSave = form.name.trim().length > 0;

  return (
    <div style={styles.overlay} onClick={onCancel}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHead}>
          <h2 style={styles.modalTitle}>
            {form.id ? "Editar prenda" : "Nueva prenda"}
          </h2>
          <button className="close" onClick={onCancel}>
            <X size={18} />
          </button>
        </div>

        <div style={styles.modalBody}>
          <label style={styles.label}>
            Fotos ({form.photos.length}/{MAX_PHOTOS})
          </label>
          <div style={styles.thumbRow}>
            {form.photos.map((src, idx) => (
              <div key={idx} style={styles.thumb}>
                <img src={src} alt={`foto ${idx + 1}`} style={styles.thumbImg} />
                <button
                  className="thumb-remove"
                  onClick={() => removePhoto(idx)}
                  title="Quitar foto"
                >
                  <X size={13} strokeWidth={2.5} />
                </button>
              </div>
            ))}
            {form.photos.length < MAX_PHOTOS && (
              <button
                style={styles.addThumb}
                className="add-thumb"
                onClick={() => inputRef.current?.click()}
              >
                <Plus size={22} strokeWidth={2} color="#8A857C" />
                <span style={{ fontSize: 11, color: "#8A857C" }}>Agregar</span>
              </button>
            )}
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={onAddPhotos}
            style={{ display: "none" }}
          />

          <label style={styles.label}>Nombre</label>
          <input
            style={styles.input}
            value={form.name}
            onChange={set("name")}
            placeholder="Abrigo de lana"
          />

          <label style={styles.label}>Precio</label>
          <div style={styles.priceRow}>
            <span style={styles.currencyTag}>{CURRENCY}</span>
            <input
              style={{ ...styles.input, borderRadius: "0 8px 8px 0", borderLeft: "none" }}
              value={form.price}
              onChange={set("price")}
              placeholder="89.00"
              inputMode="decimal"
            />
          </div>

          <label style={styles.label}>Categoría</label>
          <div style={styles.catPickRow}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={form.category === cat ? "chip active" : "chip"}
                onClick={() => setForm((f) => ({ ...f, category: cat }))}
              >
                {cat}
              </button>
            ))}
          </div>

          <label style={styles.label}>Descripción</label>
          <textarea
            style={{ ...styles.input, minHeight: 70, resize: "vertical" }}
            value={form.desc}
            onChange={set("desc")}
            placeholder="Talla, material, color…"
          />
        </div>

        <div style={styles.modalFoot}>
          <button className="ghost" onClick={onCancel}>
            Cancelar
          </button>
          <button
            className="cta"
            disabled={!canSave}
            onClick={() => onSave({ ...form, name: form.name.trim(), photo: undefined })}
          >
            <Check size={16} strokeWidth={2.5} /> Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Styles ───────────────────────────────────────────────────────
// Paleta viva
const CAT_COLORS = ["#FF5D8F", "#5B7BFF", "#FFB627", "#28C7A0"];

const styles = {
  page: {
    minHeight: "100vh",
    background: "#FFFDF9",
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    color: "#20123A",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px clamp(16px, 4vw, 48px)",
    position: "sticky",
    top: 0,
    background: "rgba(255,253,249,0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #F0EAF7",
    zIndex: 15,
  },
  brand: { display: "flex", alignItems: "center", gap: 9 },
  logoMark: { color: "#FF5D8F", fontSize: 20, transform: "rotate(0deg)" },
  brandName: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: "-0.03em",
  },
  navLinks: { display: "flex", gap: 28 },
  // hero
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(60px, 12vw, 130px) clamp(16px, 4vw, 48px)",
    background: "linear-gradient(135deg, #FFF0F5 0%, #F0F1FF 50%, #EAFBF5 100%)",
  },
  heroBlob1: {
    position: "absolute",
    top: "-80px",
    right: "-60px",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,93,143,0.35), transparent 70%)",
    filter: "blur(10px)",
  },
  heroBlob2: {
    position: "absolute",
    bottom: "-100px",
    left: "-70px",
    width: 340,
    height: 340,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(91,123,255,0.28), transparent 70%)",
    filter: "blur(10px)",
  },
  heroInner: { position: "relative", maxWidth: 720, zIndex: 2 },
  heroTag: {
    display: "inline-block",
    background: "#20123A",
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    padding: "7px 14px",
    borderRadius: 30,
    marginBottom: 22,
  },
  heroTitle: {
    fontSize: "clamp(42px, 9vw, 84px)",
    fontWeight: 800,
    lineHeight: 0.98,
    letterSpacing: "-0.04em",
    margin: 0,
  },
  heroSub: {
    fontSize: "clamp(16px, 2.2vw, 20px)",
    color: "#5A4E6E",
    lineHeight: 1.55,
    maxWidth: 480,
    margin: "22px 0 32px",
  },
  heroBtns: { display: "flex", gap: 14, flexWrap: "wrap" },
  // sections
  section: { padding: "clamp(48px, 8vw, 90px) clamp(16px, 4vw, 48px)", maxWidth: 1200, margin: "0 auto" },
  sectionHead: { marginBottom: 32 },
  h2: {
    fontSize: "clamp(28px, 5vw, 44px)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    margin: 0,
  },
  sectionSub: { color: "#8A7FA0", fontSize: 16, margin: "8px 0 0" },
  state: { color: "#8A7FA0", padding: "40px 0" },
  // categories
  catGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 16,
  },
  catName: { fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" },
  catCount: { fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" },
  // filters
  filterRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 },
  // grid
  emptyBox: {
    border: "2px dashed #E7DEF3",
    borderRadius: 20,
    padding: "60px 20px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 24,
  },
  photoWrap: {
    position: "relative",
    aspectRatio: "3 / 4",
    background: "#F4EFFA",
    overflow: "hidden",
  },
  photo: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  noPhoto: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  catBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    background: "rgba(32,18,58,0.82)",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    padding: "5px 11px",
    borderRadius: 20,
  },
  cardBody: { padding: "16px 18px 20px" },
  itemName: {
    fontSize: 17,
    fontWeight: 700,
    margin: 0,
    letterSpacing: "-0.01em",
  },
  itemDesc: {
    fontSize: 13.5,
    color: "#8A7FA0",
    margin: "5px 0 0",
    lineHeight: 1.45,
  },
  price: {
    fontSize: 20,
    fontWeight: 800,
    color: "#FF5D8F",
    margin: "10px 0 0",
  },
  // contact
  contact: {
    background: "linear-gradient(135deg, #20123A 0%, #3A1D6E 100%)",
    padding: "clamp(56px, 9vw, 100px) clamp(16px, 4vw, 48px)",
    textAlign: "center",
  },
  contactInner: { maxWidth: 620, margin: "0 auto" },
  contactSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 17,
    lineHeight: 1.55,
    margin: "16px 0 30px",
  },
  social: { display: "flex", gap: 26, justifyContent: "center", marginTop: 34 },
  footNote: { color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 36 },
  // modal
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(32,18,58,0.5)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    zIndex: 30,
  },
  modal: {
    background: "#FFFDF9",
    borderRadius: 22,
    width: "100%",
    maxWidth: 460,
    maxHeight: "92vh",
    overflow: "auto",
    boxShadow: "0 24px 70px rgba(32,18,58,0.3)",
  },
  modalHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 24px",
    borderBottom: "1px solid #F0EAF7",
  },
  modalTitle: { fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" },
  modalBody: { padding: "20px 24px" },
  label: {
    display: "block",
    fontSize: 13,
    fontWeight: 700,
    margin: "18px 0 8px",
    color: "#20123A",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px 13px",
    fontSize: 15,
    border: "1.5px solid #E7DEF3",
    borderRadius: 10,
    background: "#fff",
    fontFamily: "inherit",
    color: "#20123A",
    outline: "none",
  },
  priceRow: { display: "flex", alignItems: "stretch" },
  currencyTag: {
    display: "flex",
    alignItems: "center",
    padding: "0 13px",
    background: "#F4EFFA",
    border: "1.5px solid #E7DEF3",
    borderRight: "none",
    borderRadius: "10px 0 0 10px",
    fontWeight: 700,
    color: "#8A7FA0",
  },
  catPickRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  previewImg: { width: "100%", height: "100%", objectFit: "cover" },
  thumbRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 4 },
  thumb: {
    position: "relative",
    width: 88,
    height: 110,
    borderRadius: 12,
    overflow: "hidden",
    border: "1.5px solid #E7DEF3",
  },
  thumbImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  addThumb: {
    width: 88,
    height: 110,
    borderRadius: 12,
    border: "2px dashed #E7DEF3",
    background: "#F4EFFA",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  modalFoot: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    padding: "16px 24px 24px",
    borderTop: "1px solid #F0EAF7",
  },
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

* { -webkit-tap-highlight-color: transparent; }
html { scroll-behavior: smooth; }

.nav-link {
  color: #5A4E6E; text-decoration: none; font-weight: 600; font-size: 15px;
  transition: color .15s ease;
}
.nav-link:hover { color: #FF5D8F; }
@media (max-width: 640px) { .nav-links { display: none !important; } }

.card {
  background: #fff;
  border: 1px solid #F0EAF7;
  border-radius: 20px;
  overflow: hidden;
  transition: box-shadow .22s ease, transform .22s ease;
}
.card:hover { box-shadow: 0 14px 40px rgba(91,123,255,0.14); transform: translateY(-4px); }

.hover-actions {
  position: absolute; top: 12px; right: 12px;
  display: flex; gap: 6px; opacity: 0; transition: opacity .18s ease;
}
.card:hover .hover-actions { opacity: 1; }
@media (hover: none) { .hover-actions { opacity: 1; } }

.icon-btn {
  width: 34px; height: 34px; border: none; border-radius: 10px;
  background: rgba(255,255,255,0.95); color: #20123A;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; box-shadow: 0 3px 10px rgba(32,18,58,0.18);
  transition: background .15s ease, color .15s ease;
}
.icon-btn:hover { background: #fff; }
.icon-btn.danger:hover { background: #FF3B6B; color: #fff; }

.cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  background: #FF5D8F; color: #fff;
  border: none; border-radius: 30px;
  padding: 11px 22px; font-size: 15px; font-weight: 700;
  font-family: inherit; cursor: pointer; text-decoration: none;
  box-shadow: 0 6px 18px rgba(255,93,143,0.35);
  transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
}
.cta:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255,93,143,0.45); }
.cta:disabled { opacity: .4; cursor: not-allowed; box-shadow: none; transform: none; }
.cta.big { padding: 15px 32px; font-size: 16px; }

.ghost {
  background: #fff; border: 1.5px solid #E7DEF3; color: #20123A;
  border-radius: 30px; padding: 11px 22px; font-size: 15px;
  font-weight: 700; font-family: inherit; cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  transition: border-color .15s ease, background .15s ease;
}
.ghost:hover { border-color: #5B7BFF; background: #F7F8FF; }
.ghost.icon-only { padding: 11px; }
.ghost.big { padding: 15px 30px; font-size: 16px; }

/* categoría cards */
.cat-card {
  border: none; border-radius: 22px; cursor: pointer;
  padding: 26px 22px; min-height: 130px;
  display: flex; flex-direction: column; justify-content: flex-end; gap: 4px;
  text-align: left; font-family: inherit;
  box-shadow: 0 8px 22px rgba(32,18,58,0.12);
  transition: transform .18s ease, box-shadow .18s ease;
}
.cat-card:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 16px 36px rgba(32,18,58,0.2); }

/* chips filtro */
.chip {
  background: #fff; border: 1.5px solid #E7DEF3; color: #5A4E6E;
  border-radius: 30px; padding: 8px 18px; font-size: 14px; font-weight: 700;
  font-family: inherit; cursor: pointer; transition: all .15s ease;
}
.chip:hover { border-color: #5B7BFF; color: #5B7BFF; }
.chip.active { background: #20123A; border-color: #20123A; color: #fff; }

.wa-btn {
  width: 100%; margin-top: 14px; box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  background: #25D366; color: #fff;
  border: none; border-radius: 30px;
  padding: 12px 16px; font-size: 14.5px; font-weight: 700;
  font-family: inherit; cursor: pointer; text-decoration: none;
  transition: background .15s ease, transform .15s ease;
}
.wa-btn:hover { background: #1EBE5A; transform: translateY(-1px); }
.wa-btn.big { padding: 15px 22px; font-size: 16px; }
.wa-btn.disabled { background: #EDE7F5; color: #A99DBF; cursor: default; }
.wa-btn.disabled:hover { background: #EDE7F5; transform: none; }

.social-link {
  color: rgba(255,255,255,0.8); font-weight: 700; font-size: 15px; cursor: pointer;
  transition: color .15s ease;
}
.social-link:hover { color: #FF5D8F; }

.close {
  background: transparent; border: none; cursor: pointer;
  color: #8A7FA0; display: flex; padding: 4px; border-radius: 8px;
}
.close:hover { color: #20123A; background: #F4EFFA; }

input:focus, textarea:focus { border-color: #5B7BFF !important; }

.car-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 32px; height: 32px; border: none; border-radius: 50%;
  background: rgba(255,255,255,0.95); color: #20123A;
  font-size: 20px; line-height: 1; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 3px 10px rgba(32,18,58,0.2);
  opacity: 0; transition: opacity .18s ease;
}
.car-arrow.left { left: 8px; }
.car-arrow.right { right: 8px; }
.card:hover .car-arrow { opacity: 1; }
@media (hover: none) { .car-arrow { opacity: 1; } }

.car-dots {
  position: absolute; bottom: 12px; left: 0; right: 0;
  display: flex; gap: 6px; justify-content: center;
}
.car-dots .dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,0.6);
  box-shadow: 0 0 4px rgba(32,18,58,0.5);
}
.car-dots .dot.on { background: #fff; width: 18px; border-radius: 4px; }

.thumb-remove {
  position: absolute; top: 5px; right: 5px;
  width: 22px; height: 22px; border: none; border-radius: 50%;
  background: rgba(32,18,58,0.8); color: #fff;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background .15s ease;
}
.thumb-remove:hover { background: #FF3B6B; }
.add-thumb:hover { border-color: #5B7BFF; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; }
}
`;
