import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CollectionsShowcase from "@/components/CollectionsShowcase";
import HeritageStory from "@/components/HeritageStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CollectionsShowcase />
        <HeritageStory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
