import ContactForm from "../../Components/ContactForm";

export default function ContactSection() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Mapa */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="Ubicación Pacifico37 en Google Maps"
            src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Oceano+Pac%C3%ADfico+37,+Villas+Terrasol,+Aeropuerto,+39893+Acapulco+de+Ju%C3%A1rez,+Gro.+(Mi%20Negocio)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
          />
          <div className="relative flex flex-wrap py-6 rounded h-100 w-100 px-6"></div>
        </div>

        {/* Formulario */}
        <ContactForm />
      </div>
    </section>
  );
}
