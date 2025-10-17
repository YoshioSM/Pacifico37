import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [ 
    {
      title: "Slide 1",
      content: "Este es el contenido del primer slide",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop"
    },
    {
      title: "Slide 2",
      content: "Este es el contenido del segundo slide",
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop"
    },
    {
      title: "Slide 3",
      content: "Este es el contenido del tercer slide",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop"
    },
    {
      title: "Slide 4",
      content: "Este es el contenido del cuarto slide",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=600&fit=crop"
    },
     {
      title: "Slide 5",
      content: "Este es el contenido del cuarto slide",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=600&fit=crop"
    },
     {
      title: "Slide 6",
      content: "Este es el contenido del cuarto slide",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=600&fit=crop"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <div className="relative overflow-hidden border border-gray-300 shadow-lg">
          {/* Slides container */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="min-w-full flex flex-col items-center justify-center p-16 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h2 className="text-4xl font-bold mb-4 text-white relative z-10">{slide.title}</h2>
                <p className="text-xl text-white relative z-10">{slide.content}</p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 border border-gray-300 bg-white hover:bg-gray-100 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 border border-gray-300 bg-white hover:bg-gray-100 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 border border-gray-400 transition-all ${
                index === currentIndex 
                  ? 'bg-gray-800 scale-110' 
                  : 'bg-white hover:bg-gray-200'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}