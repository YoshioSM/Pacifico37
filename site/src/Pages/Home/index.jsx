import { useState } from "react";
import { X, Bed, Bath, Maximize2, Shield, Dumbbell, Waves, TreePine, Star, ExternalLink, Phone, Mail, ChevronDown } from "lucide-react";
import Stack from "../../Components/Stack";
import AnimatedContent from "../../Components/AnimetedContent";
import ContactForm from "../../Components/ContactForm";
import { fotos } from "../../assets/Fotos";
import { icon, testimonials } from "../../assets/Icons";

/* ─── Galería masonry ─── */
const galleryImages = [
  { src: fotos.FrontView,    alt: "Vista frontal",           size: "tall" },
  { src: fotos.Pool1,        alt: "Alberca principal",       size: "normal" },
  { src: fotos.salabonita,   alt: "Sala",                    size: "normal" },
  { src: fotos.Pool5,        alt: "Área de albercas",        size: "wide" },
  { src: fotos.Room,         alt: "Habitación principal",    size: "normal" },
  { src: fotos.kitchen,      alt: "Cocina",                  size: "normal" },
  { src: fotos.entrada,      alt: "Entrada del complejo",    size: "tall" },
  { src: fotos.Gymv1,        alt: "Gimnasio",                size: "normal" },
  { src: fotos.tenis,        alt: "Cancha de tenis",         size: "normal" },
];

/* ─── Características ─── */
const features = [
  { icon: Bed,       label: "2 Habitaciones",         desc: "Espaciosas y bien iluminadas" },
  { icon: Bath,      label: "1 Baño completo",        desc: "Equipado con todo lo necesario" },
  { icon: Maximize2, label: "70 m² construidos",      desc: "Distribución inteligente" },
  { icon: Waves,     label: "2 Albercas",             desc: "Limpias y con área de descanso" },
  { icon: Dumbbell,  label: "Gimnasio completo",      desc: "Con instructor disponible" },
  { icon: Shield,    label: "Seguridad 24/7",         desc: "2 filtros de acceso controlado" },
  { icon: TreePine,  label: "Jardines",               desc: "Áreas verdes y convivencia" },
  { icon: Star,      label: "Cancha de Pádel",        desc: "Y cancha de tenis profesional" },
];

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main style={{ background: "var(--navy)" }}>

      {/* ══════════════════════════════════════
          HERO — Pantalla completa
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Foto de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${fotos.homeland})` }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 via-transparent to-[#0a1628]/40" />

        {/* Contenido */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Etiqueta */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase">
              Terrasol Diamante · Acapulco
            </span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
            Pacifico
            <span className="italic text-[#c9a84c]"> 37</span>
          </h1>

          <p className="text-[#f5f0e8]/80 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Una propiedad única en el corazón de la Riviera Diamante.
            Lujo, tranquilidad y el océano Pacífico a tu alcance.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 sm:gap-16 mb-14">
            {[
              { value: "2", label: "Habitaciones" },
              { value: "70m²", label: "Construcción" },
              { value: "5★", label: "Airbnb" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#c9a84c]">{s.value}</div>
                <div className="text-[#f5f0e8]/60 text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#detalles" className="btn-gold">
              Ver la propiedad
            </a>
            <a href="#contacto" className="btn-ghost">
              Agendar visita
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/60 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          TAGLINE STRIP
      ══════════════════════════════════════ */}
      <section className="py-12 px-4" style={{ background: "var(--navy-mid)" }}>
        <div className="ornament max-w-4xl mx-auto">
          <p className="font-display text-xl sm:text-2xl italic text-[#f5f0e8] text-center px-4">
            "Una inversión. Una experiencia. Tu hogar en la costa."
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOBRE LA PROPIEDAD
      ══════════════════════════════════════ */}
      <section id="detalles" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Texto */}
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase">La propiedad</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8] leading-tight mb-6">
                  Tu oportunidad en<br />
                  <span className="text-[#c9a84c]">Terrasol Diamante</span>
                </h2>
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
                  Pacífico 37 es un departamento completamente equipado ubicado en
                  el exclusivo complejo residencial Terrasol Diamante, en la Costa
                  Diamante de Acapulco — una de las zonas costeras más privilegiadas
                  de México.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                  Ideal tanto como casa de playa para disfrutar en familia, como
                  inversión de renta vacacional con excelente retorno gracias a su
                  ubicación y las amenidades del complejo.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Totalmente amueblado",
                    "Vista al jardín",
                    "Acceso a 2 albercas",
                    "Seguridad privada",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-xs font-medium tracking-wider border border-[#c9a84c]/40 text-[#c9a84c] rounded-full uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stack interactivo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 to-transparent rounded-3xl transform rotate-3 scale-110" />
                  <Stack
                    randomRotation={true}
                    sensitivity={140}
                    sendToBackOnClick={true}
                    cardDimensions={{ width: 300, height: 300 }}
                  />
                  <p className="text-center text-[#94a3b8] text-xs mt-6 tracking-wider">
                    ← Arrastra las fotos para explorar
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CARACTERÍSTICAS
      ══════════════════════════════════════ */}
      <section className="py-24 px-4" style={{ background: "var(--navy-mid)" }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase">El complejo</span>
                <div className="h-px w-10 bg-[#c9a84c]" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8]">
                Amenidades de Lujo
              </h2>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <AnimatedContent key={f.label} delay={i * 0.07}>
                <div className="group p-6 rounded-xl border border-[#1a3560] hover:border-[#c9a84c]/50 transition-all duration-300 hover:bg-[#c9a84c]/5 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors">
                    <f.icon size={22} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="font-semibold text-[#f5f0e8] text-sm mb-1">{f.label}</h3>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALERÍA MASONRY
      ══════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase">Galería</span>
                <div className="h-px w-10 bg-[#c9a84c]" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8]">
                Conoce cada rincón
              </h2>
              <a
                href="/Gallery"
                className="inline-flex items-center gap-2 mt-4 text-[#c9a84c] text-sm hover:text-[#e8c97a] transition-colors"
              >
                Ver galería completa <ExternalLink size={14} />
              </a>
            </div>
          </AnimatedContent>

          {/* Masonry grid 3 columnas */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <AnimatedContent key={i} delay={i * 0.05}>
                <div
                  className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group relative"
                  onClick={() => setSelectedImg(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      img.size === "tall" ? "h-80" : img.size === "wide" ? "h-56" : "h-64"
                    }`}
                  />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[#f5f0e8] text-sm font-medium">{img.alt}</span>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImg}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ══════════════════════════════════════
          PRECIO DE VENTA
      ══════════════════════════════════════ */}
      <section className="py-24 px-4" style={{ background: "var(--navy-mid)" }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase">Venta</span>
                <div className="h-px w-10 bg-[#c9a84c]" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8]">Precio de Venta</h2>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#c9a84c]/30" style={{ background: "var(--navy)" }}>
              {/* Header dorado */}
              <div className="bg-gradient-to-r from-[#a07c30] via-[#c9a84c] to-[#a07c30] p-10 text-center">
                <p className="text-[#0a1628] text-sm font-semibold tracking-widest uppercase mb-2">
                  Precio de lista
                </p>
                <div className="font-display text-5xl sm:text-6xl font-bold text-[#0a1628]">
                  $2,800,000
                </div>
                <p className="text-[#0a1628]/70 text-lg font-medium mt-1">MXN</p>
              </div>

              {/* Beneficios */}
              <div className="p-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  {[
                    { title: "Crédito hipotecario", desc: "Aceptamos INFONAVIT, FOVISSSTE y crédito bancario" },
                    { title: "Gran inversión", desc: "Genera ingresos por renta vacacional desde el día 1" },
                    { title: "Precio negociable", desc: "Estamos abiertos a propuestas serias de compradores" },
                  ].map((b) => (
                    <div key={b.title} className="flex gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[#f5f0e8] font-semibold text-sm mb-1">{b.title}</h4>
                        <p className="text-[#94a3b8] text-xs leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <a href="#contacto" className="btn-gold">
                    Solicitar información de venta
                  </a>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RENTA VACACIONAL
      ══════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase">Renta vacacional</span>
                <div className="h-px w-10 bg-[#c9a84c]" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8]">
                Hospédate en Pacifico 37
              </h2>
              <p className="text-[#94a3b8] text-lg mt-4 max-w-xl mx-auto">
                Disponible para renta por noche en Airbnb. Vive la experiencia antes de comprar.
              </p>
            </div>

            {/* Testimoniales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-[#1a3560] hover:border-[#c9a84c]/30 transition-colors"
                  style={{ background: "var(--navy-mid)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img src={icon.airbnb} alt="Airbnb" className="w-6 h-6" />
                    <div className="flex">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={14} className="fill-[#c9a84c] text-[#c9a84c]" />
                      ))}
                    </div>
                    <a
                      href="https://www.airbnb.mx/rooms/1314534438515488460"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#c9a84c] hover:underline ml-auto"
                    >
                      Ver en Airbnb
                    </a>
                  </div>
                  <p className="text-[#f5f0e8]/80 text-sm leading-relaxed italic mb-4">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-[#f5f0e8] font-semibold text-sm">{t.name}</p>
                    <p className="text-[#94a3b8] text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.airbnb.mx/rooms/1314534438515488460"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <img src={icon.airbnbBlanco} alt="" className="w-5 h-5" />
                Ver disponibilidad en Airbnb
              </a>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACTO + MAPA
      ══════════════════════════════════════ */}
      <section id="contacto" className="py-24 px-4" style={{ background: "var(--navy-mid)" }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase">Contacto</span>
                <div className="h-px w-10 bg-[#c9a84c]" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8]">
                ¿Listo para dar el paso?
              </h2>
              <p className="text-[#94a3b8] text-lg mt-4 max-w-xl mx-auto">
                Agenda una visita, solicita más información o simplemente escríbenos.
                Respondemos en menos de 24 horas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Mapa */}
              <div className="rounded-2xl overflow-hidden border border-[#1a3560] h-80 lg:h-full min-h-[400px] relative">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  title="Ubicación Pacifico37"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Oceano+Pac%C3%ADfico+37,+Villas+Terrasol,+Aeropuerto,+39893+Acapulco+de+Ju%C3%A1rez,+Gro.+(Mi%20Negocio)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
                />
              </div>

              {/* Info + Form */}
              <div>
                {/* Info de contacto rápido */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="https://api.whatsapp.com/send/?phone=7445362416&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-[#1a3560] hover:border-[#c9a84c]/40 transition-colors"
                    style={{ background: "var(--navy)" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-[#94a3b8] text-xs">Llamar ahora</p>
                      <p className="text-[#f5f0e8] text-sm font-medium">+52 744 536 2416</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@pacifico37.site"
                    className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-[#1a3560] hover:border-[#c9a84c]/40 transition-colors"
                    style={{ background: "var(--navy)" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-[#94a3b8] text-xs">Correo electrónico</p>
                      <p className="text-[#f5f0e8] text-sm font-medium">info@pacifico37.site</p>
                    </div>
                  </a>
                </div>

                {/* Formulario */}
                <ContactForm />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

    </main>
  );
}
