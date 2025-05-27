import { useState } from 'react'
import slide1 from '../../assets/slider1.jpg';
import slide2 from '../../assets/slider2.jpg';

export const Slider = () => {

    const [current, setCurrent] = useState(0);

    const slides = [
        {
            title: "Best Shipping",
            highlight: "Partner",
            description:
            "Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida nequi.",
            image: slide1,
        },
        {
            title: "Fast & Secure",
            highlight: "Delivery",
            description:
            "Quick and safe logistics to your destination. Trusted by thousands globally for timely delivery.",
            image: slide2,
        },
    ];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[current];

  return (
    <div className="flex flex-col md:flex-row items-stretch w-full h-[500px] overflow-hidden relative">
      {/* Left Side - Text */}
      <div className="md:w-1/2 p-8 bg-white flex flex-col justify-center">
        <p className="uppercase tracking-widest text-sm font-semibold text-yellow-500">
          Logistic
        </p>
        <h1 className="text-7xl font-bold leading-snug mt-2">
          {slide.title}{" "}
          <span className="text-yellow-500">{slide.highlight}</span>
        </h1>
        <p className="text-gray-600 mt-4">{slide.description}</p>
        <button className="mt-6 bg-yellow-500 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 w-fit">
          Discover More
        </button>
      </div>

        {/* Right Side - Image */}
        <div
            className="md:w-1/2 right-10 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
        >
        </div>
        <div className="hidden sm:block absolute top-[70%] right-5 transform -translate-y-1/2 rotate-90 origin-right text-black text-xs font-bold tracking-widest p-2">
            #CARGOTON LOGISTIC
        </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-8 flex items-center space-x-4 text-sm">
        <div className="text-yellow-500 font-bold">
          {current + 1} / {slides.length}
        </div>
        <button
          onClick={prevSlide}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          →
        </button>
      </div>
    </div>
  )
}
