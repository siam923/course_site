import Announcements from "@/components/home/Announcements";
import Courses from "@/components/home/Courses";
import HeroSlider from "@/components/home/HeroSlider";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSlider />
      <Announcements />
      <Welcome />
      <Courses />
    </main>
  );
}
