import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import collectionImage from "@/assets/collection-handloom.jpg";
import detailImage from "@/assets/saree-detail.jpg";
import heroImage from "@/assets/hero-sarees.jpg";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const collections = [
    {
      id: 1,
      title: "Silk Heritage",
      description: "Timeless silk sarees with traditional motifs and rich textures",
      image: collectionImage,
      category: "silk",
      price: "₹15,000 - ₹45,000",
      pieces: 24,
    },
    {
      id: 2,
      title: "Handloom Treasures",
      description: "Artisan-woven masterpieces celebrating regional craftsmanship",
      image: detailImage,
      category: "handloom",
      price: "₹8,000 - ₹25,000",
      pieces: 36,
    },
    {
      id: 3,
      title: "Bridal Couture",
      description: "Exquisite wedding sarees with intricate gold work and embellishments",
      image: heroImage,
      category: "bridal",
      price: "₹50,000 - ₹2,50,000",
      pieces: 18,
    },
    {
      id: 4,
      title: "Contemporary Classics",
      description: "Modern interpretations of traditional designs for the contemporary woman",
      image: collectionImage,
      category: "contemporary",
      price: "₹12,000 - ₹35,000",
      pieces: 28,
    },
    {
      id: 5,
      title: "Royal Weaves",
      description: "Luxurious fabrics fit for royalty, featuring precious metals and stones",
      image: detailImage,
      category: "luxury",
      price: "₹75,000 - ₹5,00,000",
      pieces: 12,
    },
    {
      id: 6,
      title: "Regional Artistry",
      description: "Authentic sarees from different regions, preserving traditional techniques",
      image: heroImage,
      category: "regional",
      price: "₹6,000 - ₹18,000",
      pieces: 42,
    },
  ];

  const categories = [
    { id: "all", label: "All Collections" },
    { id: "silk", label: "Silk" },
    { id: "handloom", label: "Handloom" },
    { id: "bridal", label: "Bridal" },
    { id: "contemporary", label: "Contemporary" },
    { id: "luxury", label: "Luxury" },
    { id: "regional", label: "Regional" },
  ];

  const filteredCollections = selectedCategory === "all" 
    ? collections 
    : collections.filter(collection => collection.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-display font-serif font-bold text-primary mb-6">
              Our Collections
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our curated selection of premium sarees, each collection telling a unique story 
              of craftsmanship, heritage, and timeless elegance.
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Collections Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCollections.map((collection, index) => (
                <Card 
                  key={collection.id}
                  className="card-luxury group cursor-pointer h-[500px] relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${collection.image})` }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                        <div className="flex justify-between items-start">
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {collection.pieces} pieces
                          </Badge>
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {collection.category}
                          </Badge>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-serif font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                            {collection.title}
                          </h3>
                          <p className="text-white/90 mb-3 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                            {collection.description}
                          </p>
                          <p className="text-luxury-gold font-semibold mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                            {collection.price}
                          </p>
                          <Button 
                            variant="outline" 
                            className="btn-hero text-lg px-8 py-4 
  transform transition-all duration-300 
  group-hover:translate-y-[-4px] group-hover:scale-105">
                            Explore Collection
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;