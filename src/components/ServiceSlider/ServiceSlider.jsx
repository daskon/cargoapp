import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AirFreight from "../../assets/AirFreightServices.png";
import DroneService from "../../assets/droneservice.jpg";
import CargoHandle from "../../assets/cargohandling.jpg";

import { FaTools, FaPlane, FaShippingFast, FaTruck } from 'react-icons/fa';

const services = [
  {
    title: 'Air Freight Services',
    description: 'At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.',
    image: AirFreight,
    icon: <FaTools />,
    bgColor: 'bg-lime-500',
  },
  {
    title: 'Drone Services',
    description: 'These are unique and often they differ from one industry to the other. Our logistics expertise.',
    image: DroneService,
    icon: <FaShippingFast />,
    bgColor: 'bg-lime-500',
  },
  {
    title: 'International Cargo',
    description: 'We handle international freight logistics with precision and care.',
    image: CargoHandle,
    icon: <FaPlane />,
    bgColor: 'bg-lime-500',
  },
];

export default function ServiceSlider() {
  return (
    <section className="py-12 px-4 md:px-8 bg-white relative">
      <div className="text-center mb-10">
        <p className="text-lime-500 font-semibold">Real Solution ,Real Fast !</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">
          Best Global Logistics Solutions.
        </h2>
      </div>

      <div className="relative">
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
            768: {
                slidesPerView: 2,
            },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
        >
            {services.map((service, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col md:flex-row items-stretch bg-white shadow-md rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                    {/* Image section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        />
                        {/* Green Icon on image bottom-right */}
                        <div className={`absolute bottom-4 right-4 w-14 h-14 rounded-full text-white text-2xl flex items-center justify-center ${service.bgColor}`}>
                        {service.icon}
                        </div>
                    </div>

                    {/* Text section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                        <button className="flex items-center gap-2 font-bold text-black hover:translate-x-1 transition-transform duration-200">
                        <span>Read More</span>
                        <span className="text-xl">→</span>
                        </button>
                    </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className="custom-pagination absolute bottom-4 right-10 flex gap-2 z-10" />
        </div>
    </section>
  );
}