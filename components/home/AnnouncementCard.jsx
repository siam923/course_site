import { Newspaper } from "lucide-react";

const AnnouncementCard = ({ date, title }) => {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg bg-white border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex">
        <div className="w-1/4 bg-indigo-100 py-4 flex items-center justify-center">
          <Newspaper size={40} />
        </div>
        <div className="w-3/4 px-6 py-6">
          <div className="font-bold text-gray-800 text-xl mb-2">{title}</div>
          <p className="text-gray-600 text-base mb-2">20 December, 2023</p>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-4 rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
