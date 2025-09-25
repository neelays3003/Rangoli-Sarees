import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import collectionImage from "@/assets/collection-handloom.jpg";
import detailImage from "@/assets/saree-detail.jpg";
import heroImage from "@/assets/hero-sarees.jpg";

const CollectionsShowcase = () => {
  const collections = [
    {
      title: "Silk Heritage",
      description: "Timeless silk sarees with traditional motifs and rich textures",
      image: collectionImage,
      color: "from-primary to-tertiary",
    },
    {
      title: "Handloom Treasures",
      description: "Artisan-woven masterpieces celebrating regional craftsmanship",
      image: detailImage,
      color: "from-secondary to-yellow-500",
    },
    {
      title: "Bridal Couture",
      description: "Exquisite wedding sarees with intricate gold work and embellishments",
      image: heroImage,
      color: "from-tertiary to-purple-600",
    },
    {
      title: "Contemporary Classics",
      description: "Modern interpretations of traditional designs for the contemporary woman",
      image: collectionImage,
      color: "from-primary to-secondary",
    },
    {
      title: "Royal Weaves",
      description: "Luxurious fabrics fit for royalty, featuring precious metals and stones",
      image: detailImage,
      color: "from-tertiary to-primary",
    },
    {
      title: "Regional Artistry",
      description: "Authentic sarees from different regions, preserving traditional techniques",
      image: heroImage,
      color: "from-secondary to-tertiary",
    },
  ];

  return (
    <section id="collections" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-heading font-serif font-bold text-primary mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each collection represents a journey through India's diverse textile traditions, 
            carefully curated to showcase the finest craftsmanship and design.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {collections.map((collection, index) => (
            <Card 
              key={collection.title}
              className="card-luxury group cursor-pointer h-[400px] relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0 h-full">
                <div className="relative h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${collection.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {collection.title}
                    </h3>
                    <p className="text-white/90 mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {collection.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="btn-hero text-lg px-8 py-4 
  transform transition-all duration-300 
  group-hover:translate-y-[-4px] group-hover:scale-105"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/collections">
            <Button className="btn-gold text-lg px-8 py-4">
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsShowcase;