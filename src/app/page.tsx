import AboutUs from '@/components/Home/AboutUs';
import Accordian from '@/components/common/Accordian';
import HeroSection from '@/components/Home/FirstHero';
import SecondHero from '@/components/Home/SecondHero';
import Slide from '@/components/Home/Slide';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Slide />
      <SecondHero />
      <Accordian />
    </main>
  );
}
