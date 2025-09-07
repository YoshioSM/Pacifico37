import {} from "react";
import Stack from "../../Components/Stack";
import { fotos } from "../../assets/Fotos";
import {
  features,
  icon,
  propertyFeatures,
  testimonials,
} from "../../assets/Icons";

export default function Home() {




  return (
    <main className="pt-16">
      {/* Hero Section - Mejorado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background con overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-gray-900/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${fotos.main})`,
          }}
        ></div>

        {/* Contenido */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tu nuevo hogar en
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                Terrasol
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Descubre esta extraordinaria propiedad en Acapulco, ubicada cerca
              de increíbles atractivos, espectaculares albercas y un ambiente de
              paz incomparable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">2</div>
                <div className="text-sm text-gray-300">Habitaciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">1</div>
                <div className="text-sm text-gray-300">Baño</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">70m²</div>
                <div className="text-sm text-gray-300">Construcción</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#Carac">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  Ver Detalles Completos
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section - Rediseñado */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Tu oportunidad para negocio o tu casa de playa ideal.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Pacífico 37 se encuentra en Terrasol Diamante, un exclusivo
                complejo de villas de lujo diseñado para que tú y tu familia
                disfruten momentos inolvidables. Nuestros huéspedes destacan a
                Pacífico 37 como un lugar excepcional para descansar y vivir
                experiencias únicas
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl transform rotate-6"></div>
                <Stack
                  randomRotation={true}
                  sensitivity={80}
                  sendToBackOnClick={true}
                  cardDimensions={{ width: 290, height: 290 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Completamente renovado */}
      <section id="Carac" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Características de la propiedad
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada detalle de esta propiedad ha sido cuidadosamente diseñado
              para ofrecerte la mejor experiencia de vida costera.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                src={fotos.FrontView}
                alt="Vista interior de la propiedad"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              {propertyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mejorado */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experiencias Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre lo que dicen quienes han vivido la experiencia de esta
              ubicación privilegiada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  {/* icono */}
                  <div className="w-8 h-8 mr-1">
                    <img src={icon.airbnb} alt="My Happy SVG" />
                  </div>

                  <div className="flex text-blue-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <div className="ml-3">
                      <a href="https://www.airbnb.mx/rooms/1314534438515488460" target="_blank">
                        <p>ver en Airbnb</p>
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenidades Section - Renovado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Amenidades de Lujo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disfruta de servicios y comodidades diseñados para elevar tu
              calidad de vida en este exclusivo complejo residencial frente al
              mar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <img src={item.icon} className="w-8 h-8" alt={item.title} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Hacer Realidad tu Sueño?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              No dejes pasar esta oportunidad única. Contacta con nosotros hoy
              mismo y da el primer paso hacia tu nueva vida frente al mar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

           <a href="/Contact">
               <button className="px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                Contactar Ahora
              </button>
           </a>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
