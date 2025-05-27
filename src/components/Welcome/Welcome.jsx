import img1 from "../../assets/welcomeimg1.jpg";
import img2 from "../../assets/welcomeimg2.jpg";

export const Welcome = () => {
  return (
    <section className="px-6 py-12 md:px-12 lg:flex items-center justify-between gap-4 mt-12">
      {/* Left - Images */}
      <div className="relative w-full lg:w-[50%] flex justify-center items-center">
        {/* Background image */}
        <img src={img2} alt="Worker" className="w-80 md:w-96 z-10" />

        {/* Overlay image */}
        <img
          src={img1}
          alt="Forklift"
          className="absolute bottom-[-20px] left-[-20px] w-40 h-50 md:w-56 z-20 shadow-lg"
        />

        {/* Orange badge */}
        <div className="absolute bottom-[-40px] right-12 bg-orange-500 text-white px-6 py-4 z-30">
          <div className="absolute top-0 left-[-30px] w-0 h-0 border-t-[30px] border-t-transparent border-r-[30px] border-r-orange-500"></div>
          <p className="text-xl font-bold">15,350 +</p>
          <p className="text-sm">Clients Worldwide</p>
        </div>
      </div>

      {/* Right - Text Content */}
      <div className="mt-10 lg:mt-0 w-full lg:w-[45%]">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          TransMax Logistics <br />
          <span className="text-orange-500">Around the World</span>
        </h2>
        <p className="mt-4 text-gray-700 p-2">
          Transmax is the world’s driving worldwide coordinations
          supplier — we uphold industry and exchange the worldwide
          trade of merchandise through land transport.
        </p>
        <p className="mt-4 text-gray-400 p-2">
          Our worth added administrations guarantee the progression of
          products proceeds consistently and supply chains stay lean and
          streamlined for progress.
        </p>
        <button className="mt-6 px-6 py-3 border border-teal-800 text-teal-800 font-semibold rounded hover:bg-teal-800 hover:text-white transition">
          MORE ABOUT US
        </button>
      </div>
    </section>
  )
}
