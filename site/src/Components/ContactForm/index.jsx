import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, MessageCircle, Loader2 } from "lucide-react";
import supabase from "../../config/supaconfig";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: { nombre: "", correo: "", telefono: "" },
  });

  const [loading, setLoading] = useState(false);
  const [capVal, setCapVal] = useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { error } = await supabase.from("Contactos").insert([
        {
          nombre: data.nombre.trim(),
          correo: data.correo.toLowerCase(),
          telefono: data.telefono.trim(),
        },
      ]);

      if (error) throw error;

      alert("Formulario enviado con éxito ✅");
      window.location.reload();
    } catch (err) {
      console.error(err.message);
      alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset({ nombre: "", correo: "", telefono: "" });
  }, [isSubmitSuccessful, reset]);

  const inputClass =
    "w-full bg-[#0a1628] border border-[#1a3560] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 rounded-lg text-[#f5f0e8] placeholder-[#94a3b8]/50 py-3 px-4 text-sm outline-none transition-all duration-200";

  const labelClass = "block text-xs font-semibold tracking-widest uppercase text-[#94a3b8] mb-2";

  return (
    <div className="p-8 rounded-2xl border border-[#1a3560]" style={{ background: "var(--navy)" }}>
      <h3 className="font-display text-2xl font-bold text-[#f5f0e8] mb-2">
        Envíanos un mensaje
      </h3>
      <p className="text-[#94a3b8] text-sm mb-6">
        Contáctanos y nos pondremos en contacto contigo a la brevedad.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Nombre */}
        <div>
          <label className={labelClass}>Nombre completo</label>
          <input
            type="text"
            placeholder="Tu nombre"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              maxLength: { value: 35, message: "Máximo 35 caracteres" },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo letras y espacios",
              },
            })}
            className={inputClass}
          />
          {errors.nombre && (
            <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label className={labelClass}>Correo electrónico</label>
          <input
            type="email"
            placeholder="tu@correo.com"
            {...register("correo", {
              required: "El correo es obligatorio",
              maxLength: { value: 100, message: "Correo no válido" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo inválido",
              },
            })}
            className={inputClass}
          />
          {errors.correo && (
            <p className="text-red-400 text-xs mt-1">{errors.correo.message}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className={labelClass}>Teléfono <span className="text-[#94a3b8]/50 normal-case tracking-normal">(opcional)</span></label>
          <input
            type="tel"
            placeholder="10 dígitos"
            {...register("telefono", {
              required: false,
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Debe tener exactamente 10 dígitos",
              },
            })}
            className={inputClass}
          />
          {errors.telefono && (
            <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>
          )}
        </div>

        {/* ReCAPTCHA */}
        <div className="pt-1">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_SITE_KEY}
            onChange={(val) => setCapVal(val)}
            theme="dark"
          />
        </div>

        {/* Botones */}
        <button
          type="submit"
          disabled={!capVal || loading}
          className="btn-gold w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {loading ? (
            <><Loader2 size={16} className="animate-spin" /> Enviando...</>
          ) : (
            <><Send size={16} /> Enviar mensaje</>
          )}
        </button>

        <a
          href="https://wa.me/7445362416"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost w-full flex items-center justify-center gap-2"
        >
          <MessageCircle size={16} />
          Escribir por WhatsApp
        </a>
      </form>

      <p className="text-[#94a3b8]/50 text-xs text-center mt-4">
        Si no recibes respuesta en 24 h, revisa tu carpeta de spam.
      </p>
    </div>
  );
}
