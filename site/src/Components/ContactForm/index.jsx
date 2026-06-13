import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../config/supaconfig";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
    },
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
      alert("Hubo un error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ nombre: "", correo: "", telefono: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Contáctanos
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Contáctanos para agendar una visita, recibir informes de la propiedad o
        agendar tus futuras vacaciones en Pacifico37.
      </p>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              maxLength: { value: 35, message: "Máximo 35 caracteres" },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "El nombre solo puede contener letras y espacios",
              },
            })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
          )}
        </div>

        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">Correo</label>
          <input
            type="email"
            {...register("correo", {
              required: "El correo es obligatorio",
              maxLength: { value: 100, message: "Correo no válido" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo inválido",
              },
            })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.correo && (
            <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>
          )}
        </div>

        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            {...register("telefono", {
              required: false,
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Debe tener exactamente 10 dígitos",
              },
            })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.telefono && (
            <p className="text-red-500 text-sm mt-1">
              {errors.telefono.message}
            </p>
          )}
        </div>

        {/* captcha */}
        <div className="m-5">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_SITE_KEY}
            onChange={(val) => setCapVal(val)}
          />
        </div>

        <button
          disabled={!capVal || loading}
          type="submit"
          className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed rounded text-lg transition-colors duration-200"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <div className="mt-3">
        <a
          href="https://wa.me/7442584848"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition-colors duration-200 flex items-center justify-center"
        >
          Whatsapp
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        Si no te llega un correo en 24 horas revisa tu bandeja de spam.
      </p>
    </div>
  );
}
