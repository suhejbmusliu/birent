import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Fleet } from "@/components/Fleet";
import { CTABanner } from "@/components/CTABanner";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <About />
      <Features />
      <Fleet />
      <CTABanner />
      <WhyChooseUs />
      <Testimonial />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
