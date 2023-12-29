import Announcements from "@/components/home/Announcements";
import Books from "@/components/home/Books";
import Courses from "@/components/home/Courses";
import HeroSlider from "@/components/home/HeroSlider";
import Portfolio from "@/components/home/Portfolio";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSlider />
      <Announcements />
      <Welcome />
      <Courses />
      <Portfolio />
      <Books />
    </main>
  );
}
