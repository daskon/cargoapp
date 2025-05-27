const stats = [
  { number: 890, label: ["Delivered", "packages"] },
  { number: 137, label: ["Countries", "covered"] },
  { number: 740, label: ["Tons", "of Goods"] },
  { number: 600, label: ["Satisfied", "Clients"] },
];

const Stats = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-16 mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left relative">
        {stats.map((stat, index) => (
          <div key={index} className="relative flex items-center">
            {/* Background faded number */}
            <span className="absolute inset-0 text-[100px] font-extrabold text-gray-200 opacity-20 leading-none z-0 flex items-center justify-center pointer-events-none">
              {stat.number}
            </span>

            {/* Foreground number and label (side-by-side) */}
            <div className="relative z-10 flex items-center space-x-3">
              <h3 className="text-3xl font-extrabold text-blue-900">{stat.number}</h3>
              <div className="text-md font-semibold text-blue-900 leading-tight">
                {stat.label.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;