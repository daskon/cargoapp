import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import 'swiper/css';

const testimonials = [
  {
    quote: `Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor se felis ac mauris. Pellen tesque inyd urna.`,
    name: "John Deo",
    title: "Managing Director",
  },
  {
    quote: `Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs.`,
    name: "Jane Smith",
    title: "Operations Head",
  },
];

const reasons = [
  "Dui ac hendrerit elementum quam ipsum auctor lorem",
  "Mauris vel magna a est lobortis volutpat",
  "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
  "Nulla scelerisque dul hendrerit elementum quam",
];

export default function TestimonialSection() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="bg-white py-16 px-6 md:px-20 mt-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Testimonials */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">TRUSTED CLIENTS</h2>
          <p className="text-gray-400 uppercase tracking-widest mb-6 text-sm">Lorem ipsum dolor sit amet consectetur</p>

          <Swiper
            spaceBetween={20}
            onSwiper={setSwiperRef}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 p-6 relative text-sm text-gray-600">
                  {/* Red quote icon */}
                  <div className="absolute left-4 top-6 bg-red-600 w-10 h-10 flex items-center justify-center text-white text-xl">
                    <FaQuoteLeft />
                  </div>
                  <p className="ml-10">{t.quote}</p>
                  <div className="mt-6 font-bold text-gray-800 text-lg">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav Arrows */}
          <div className="flex space-x-2 mt-4">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="border p-2 text-gray-600 hover:bg-gray-200"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="border p-2 text-gray-600 hover:bg-gray-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right: Accordion */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">WHY CHOOSE US</h2>
          <p className="text-gray-400 uppercase tracking-widest mb-6 text-sm">Lorem ipsum dolor sit amet consectetur</p>

          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <div key={i} className="border-b pb-4 flex justify-between items-start">
                <p className="text-sm text-gray-800">{reason}</p>
                <FaPlus className="mt-1 text-gray-800" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}