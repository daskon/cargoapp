import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";

export default function ClientsLogos() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-28">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Client logo ${idx + 1}`}
              className="h-25 opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
