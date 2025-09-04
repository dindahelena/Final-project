import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DestinationList from '../components/DestinationList';
import PromoList from '../components/PromoList';
import TestimonialList from '../components/TestimonialList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-4 py-6">
        <DestinationList />
        <PromoList />
        <TestimonialList />
      </main>
      <Footer />
    </>
  );
}
