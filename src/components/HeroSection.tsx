import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sarees.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <h1 className="text-hero font-serif font-bold mb-6 leading-tight">
          Heritage
          <span className="block text-luxury-gold">Reimagined</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#f5f5dc] mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Discover exquisite handcrafted sarees that celebrate India's rich textile heritage, 
          where every thread tells a story of artisan mastery and timeless elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-hero text-lg px-8 py-4">
            Explore Collections
          </Button>
          <Button className="btn-outline-luxury text-lg px-8 py-4 bg-background/05 backdrop-blur-sm">
            Our Story
          </Button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-foreground/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-foreground/60 rounded-full mt-2" />
          </div>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-secondary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-tertiary/20 rounded-full animate-pulse" />
    </section>
  );
};

export default HeroSection;