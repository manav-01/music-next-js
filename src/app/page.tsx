import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/whyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-black/[0.96] antialiased bg-grid-white/[0.02] flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWebinars />
        <Instructors />
      </main>
      <Footer />
    </>
  );
}
