import React from "react";
import Stack from "../../Components/Stack";
import { fotos } from "../../assets/Fotos";
import AnimatedContent from "../../Components/AnimetedContent";
import { icon, testimonials } from "../../assets/Icons";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Gallery from "../../Components/Gallery";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      {/* Stack Section  */}
      <AnimatedContent>
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
                  experiencias únicas.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl transform rotate-6"></div>
                  <Stack
                    randomRotation={true}
                    sensitivity={140}
                    sendToBackOnClick={true}
                    cardDimensions={{ width: 290, height: 290 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Features Section */}

      <section id="Carac" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Características del complejo.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada detalle de esta propiedad ha sido cuidadosamente diseñado
              para ofrecerte la mejor experiencia de vida costera.
            </p>
          </div>

          {/* cards 1  */}
          <AnimatedContent>
            <div className=" bg-gray-100 p-4 flex items-center justify-center">
              <div className=" max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                <div className="flex-1 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Totalmente equipado
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Pacífico 37 se encuentra totalmente equipado para que lo
                    puedas disfrutar desde el día uno.
                  </p>
                </div>
                <div className="lg:w-1/2 h-64 lg:h-auto">
                  <img
                    src={fotos.salabonita}
                    alt="Imagen decorativa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* card 2 */}

          <AnimatedContent>
            <div className=" mt-15 bg-gray-100 px-4 lg:px-8 xl:px-12 flex items-center justify-center">
              <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse">
                <div className="flex-1 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Zonas recreativas
                  </h2>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Terrasol cuenta con múltiples zonas recreativas para que tú
                    y tu familia puedan disfrutar de una increíble estancia.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-8">
                    <li>2 albercas.</li>
                    <li>1 cancha de tenis.</li>
                    <li>1 cancha de pádel.</li>
                    <li>Gimnasio completo con instructor.</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 h-64 lg:h-auto">
                  <img
                    src={fotos.Pool5}
                    alt="Imagen decorativa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* card 3 */}
          <AnimatedContent>
            <div className=" bg-gray-100 p-4 flex items-center justify-center">
              <div className=" max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                <div className="flex-1 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Seguridad 24/7
                  </h2>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Terrasol cuenta con un equipo de seguridad muy atento para
                    que te sientas seguro.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>2 filtros de seguridad.</li>
                    <li>Guardias a tu disposición.</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 h-64 lg:h-auto">
                  <img
                    src={fotos.entrada}
                    alt="Imagen decorativa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Testimonials Section*/}
      <AnimatedContent>
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
                        <a
                          href="https://www.airbnb.mx/rooms/1314534438515488460"
                          target="_blank"
                        >
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
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Amenidades Section */}
      <AnimatedContent>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Amenidades de Lujo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Disfruta de servicios y comodidades diseñados para elevar tu
                calidad de vida en este exclusivo complejo residencial.
              </p>
            </div>
            <Gallery />
          </div>
        </section>
      </AnimatedContent>

      {/* Precio */}

      <AnimatedContent>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Precio de venta
            </h2>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    $2,800,000 MXN
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img className="w-15 " src={icon.checkmark} />
                      </div>
                      <div>
                        <h4 className="font-semibold  text-gray-900 mb-1">
                          Aceptamos todo crédito hipotecario
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100  rounded-lg flex items-center justify-center flex-shrink-0">
                        <img className="w-15 " src={icon.checkmark} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Gran Inversión
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100  rounded-lg flex items-center justify-center flex-shrink-0">
                        <img className="w-15 " src={icon.checkmark} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Precio negociable
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

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
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
