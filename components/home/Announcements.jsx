import AnnouncementCard from "./AnnouncementCard";
import ImageSlider from "./ImageSlider";

const announcementData = [
  {
    date: "20 December, 2023",
    title: "NEW BRANCH: BECONTREE, MARCH 2024",
  },
  {
    date: "25 December, 2023",
    title: "HOLIDAY SALE: UP TO 50% OFF",
  },
  {
    date: "10 January, 2024",
    title: "PRODUCT LAUNCH EVENT",
  },
];

function Announcements() {
  return (
    <section className=" max-w-full container mx-auto py-8 flex flex-col justify-center items-center">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
      </div>

      {/* 2nd Row */}
      <div className="flex flex-wrap justify-center w-full ">
        {/* 1st Column for Announcement Cards */}
        <div className="max-w-2xl md:w-4/6 lg:w-4/6 px-4 mb-6 md:mb-0">
          {announcementData.map((announcement, index) => (
            <div key={index} className="mb-6">
              <AnnouncementCard
                date={announcement.date}
                title={announcement.title}
              />
            </div>
          ))}
        </div>

        {/* 2nd Column for Image */}
        <div className="w-full md:w-2/6 lg:w-2/6 px-4">
          <div className="h-full">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Announcements;
