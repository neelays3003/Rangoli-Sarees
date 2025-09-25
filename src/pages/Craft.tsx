import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import artisanImage from "@/assets/artisan-weaver.jpg";
import detailImage from "@/assets/saree-detail.jpg";
import collectionImage from "@/assets/collection-handloom.jpg";

const Craft = () => {
  const craftProcesses = [
    {
      title: "Handloom Weaving",
      description: "Traditional pit looms operated by master weavers, creating intricate patterns passed down through generations.",
      image: artisanImage,
      region: "Varanasi, Uttar Pradesh",
      timeRequired: "15-30 days per saree",
    },
    {
      title: "Silk Dyeing",
      description: "Natural dyes extracted from plants, minerals, and organic sources create rich, lasting colors.",
      image: detailImage,
      region: "Karnataka & Tamil Nadu",
      timeRequired: "3-7 days per batch",
    },
    {
      title: "Zardozi Embroidery",
      description: "Intricate goldwork using real gold and silver threads, creating elaborate motifs and borders.",
      image: collectionImage,
      region: "Lucknow, Uttar Pradesh",
      timeRequired: "2-6 months per piece",
    },
  ];

  const artisanStories = [
    {
      name: "Ramesh Kumar",
      craft: "Master Weaver",
      experience: "35 years",
      story: "Third-generation weaver specializing in Banarasi silk sarees with traditional brocade work.",
      location: "Varanasi",
    },
    {
      name: "Lakshmi Devi",
      craft: "Natural Dye Expert",
      experience: "28 years",
      story: "Pioneer in reviving ancient dyeing techniques using turmeric, indigo, and madder root.",
      location: "Mysore",
    },
    {
      name: "Abdul Rahman",
      craft: "Zardozi Artist",
      experience: "42 years",
      story: "Master craftsman keeping alive the Mughal art of gold thread embroidery.",
      location: "Lucknow",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-display font-serif font-bold text-primary mb-6">
              The Art of Craft
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Behind every saree lies centuries of tradition, skill, and artistry. 
              Discover the intricate processes and master craftsmen who bring our collections to life.
            </p>
          </div>
        </section>

        {/* Craft Processes */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading font-serif font-bold text-primary mb-4">
                Traditional Processes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each technique represents generations of knowledge, skill, and cultural heritage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {craftProcesses.map((process, index) => (
                <Card 
                  key={process.title}
                  className="card-luxury group h-[600px] relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      {/* Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${process.image})` }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-serif font-bold mb-3 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                          {process.title}
                        </h3>
                        <p className="text-white/90 mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                          {process.description}
                        </p>
                        <div className="space-y-2 mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                          <p className="text-luxury-gold font-medium">
                            <span className="text-white/80">Region:</span> {process.region}
                          </p>
                          <p className="text-luxury-gold font-medium">
                            <span className="text-white/80">Time:</span> {process.timeRequired}
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-fit border-white text-black hover:bg-white hover:text-primary transform transition-all duration-300 group-hover:translate-y-[-4px] group-hover:scale-105"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Artisan Stories */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading font-serif font-bold text-primary mb-4">
                Master Artisans
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the skilled craftspeople who preserve and practice these ancient arts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {artisanStories.map((artisan, index) => (
                <Card 
                  key={artisan.name}
                  className="card-luxury p-8 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="space-y-4">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-serif font-bold">
                      {artisan.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary">
                      {artisan.name}
                    </h3>
                    <p className="text-luxury-gold font-medium">
                      {artisan.craft}
                    </p>
                    <p className="text-muted-foreground font-medium">
                      {artisan.experience} experience • {artisan.location}
                    </p>
                    <p className="text-foreground leading-relaxed">
                      {artisan.story}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-heading font-serif font-bold text-primary mb-6">
              Support Traditional Crafts
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every purchase directly supports master artisans and helps preserve these ancient techniques for future generations.
            </p>
            <Button className="btn-gold text-lg px-8 py-4">
              Explore Collections
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Craft;