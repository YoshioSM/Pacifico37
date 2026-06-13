import ContactForm from "../../Components/ContactForm";
import { fotos } from "../../assets/Fotos";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 744 536 2416",
    href: "https://api.whatsapp.com/send/?phone=7445362416&text&type=phone_number&app_absent=0",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "info@pacifico37.site",
    href: "mailto:info@pacifico37.site",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Océano Pacífico 37, Villas Terrasol, Acapulco, Gro.",
    href: "#mapa",
  },
  {
    icon: Clock,
    label: "Atención",
    value: "Lunes a Domingo · 9:00 – 20:00",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <main style={{ background: "var(--navy)" }} className="min-h-screen">

      {/* Hero pequeño */}
      <section className="relative h-72 flex items-end pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fotos.Pool1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 to-[#0a1628]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase">
              Pacifico37
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8]">
            Contáctanos
          </h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Col izq: info + mapa */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#f5f0e8] mb-2">
                  Hablemos
                </h2>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  Ya sea que quieras comprar, visitar o rentar para tus vacaciones,
                  estamos aquí para ayudarte. Respondemos en menos de 24 horas.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.label}
                      href={item.href || undefined}
                      target={item.href && item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href && item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl border border-[#1a3560] hover:border-[#c9a84c]/40 transition-colors group"
                      style={{ background: "var(--navy-mid)" }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                        <item.icon size={16} className="text-[#c9a84c]" />
                      </div>
                      <div>
                        <p className="text-[#94a3b8] text-xs tracking-wider uppercase">{item.label}</p>
                        <p className="text-[#f5f0e8] text-sm font-medium">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Mapa */}
              <div id="mapa" className="rounded-2xl overflow-hidden border border-[#1a3560] h-64">
                <iframe
                  width="100%"
                  height="100%"
                  title="Ubicación Pacifico37"
                  src="https://maps.google.com/maps?width=100%&height=400&hl=es&q=Oceano+Pac%C3%ADfico+37,+Villas+Terrasol,+Aeropuerto,+39893+Acapulco+de+Ju%C3%A1rez,+Gro.+(Mi%20Negocio)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
                />
              </div>
            </div>

            {/* Col der: formulario */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
