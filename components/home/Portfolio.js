import { BookOpenText, Flame, GraduationCap, BookCheck } from "lucide-react";

const Portfolio = () => {
  const items = [
    {
      name: "Teachers",
      number: 10,
      icon: <Flame size={32} />,
    },
    {
      name: "Students",
      number: 330,
      icon: <GraduationCap size={32} />,
    },
    {
      name: "Courses",
      number: 4,
      icon: <BookOpenText size={32} />,
    },
    {
      name: "Publications",
      number: 60,
      icon: <BookCheck size={32} />,
    },
  ];
  return (
    <section className="relative bg-no-repeat bg-cover min-h-60 flex flex-wrap items-center">
      <div
        className="absolute inset-0 z-[-1] bg-no-repeat bg-cover sm:bg-auto"
        style={{ backgroundImage: `url('/background.jpg')` }}
      />

      <div className="py-8 flex flex-col justify-center items-center container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {items.map((items, index) => (
            <div key={index} className="flex gap-2 items-center   text-white">
              <div className="">{items.icon}</div>
              <div className="">
                <div className="text-2xl font-bold ">{items.number}</div>
                <div className="text-lg font-bold ">{items.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
