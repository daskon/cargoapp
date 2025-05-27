import { FaUserAlt, FaRegComments } from "react-icons/fa";
import truck from "../../assets/trucknews.jpeg"
import container from "../../assets/containers.jpeg"
import airplane from "../../assets/airplane.jpeg"
import cargo from '../../assets/cargohandling.jpg'

const newsItems = [
  {
    date: "26",
    month: "MAY",
    image: truck,
    title: "Curabitur lorem uism quis",
    author: "Admin",
    comments: 15,
    text: "Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...",
    highlight: true,
  },
  {
    date: "22",
    month: "MAY",
    image: container,
    title: "Curabitur lorem uism quis",
    author: "Admin",
    comments: 15,
    text: "Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...",
    highlight: false,
  },
  {
    date: "20",
    month: "MAY",
    image: airplane,
    title: "Curabitur lorem uism quis",
    author: "Admin",
    comments: 15,
    text: "Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...",
    highlight: false,
  },
  {
    date: "15",
    month: "MAY",
    image: cargo,
    title: "Curabitur lorem uism quis",
    author: "Admin",
    comments: 15,
    text: "Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...",
    highlight: false,
  },
];

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <p className="text-sm text-gray-500">
          <span className="inline-block w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
          INTEGER CONGUE ELIT
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4">
        {newsItems.map((item, idx) => (
          <div key={idx} className="flex shadow-md overflow-hidden">
            <div className="relative w-1/2">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 bg-black text-white p-2 text-center w-12">
                <p className="text-md leading-none font-bold">{item.date}</p>
                <p className="text-xs uppercase">{item.month}</p>
              </div>
            </div>
            <div className={`w-1/2 p-4 ${item.highlight ? "bg-sky-500 text-white" : "bg-gray-100"}`}>
              <h3 className="font-semibold uppercase">{item.title}</h3>
              <div className="flex items-center gap-4 text-sm mt-2 mb-2">
                <span className="flex items-center gap-1">
                  <FaUserAlt className="text-xs" /> {item.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegComments className="text-xs" /> {item.comments}
                </span>
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
