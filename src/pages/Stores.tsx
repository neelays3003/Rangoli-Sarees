import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Stores = () => {
  const store = {
    id: 1,
    name: "Rangoli Sarees - Flagship Store",
    address: "MG Road, Pune - 411001",
    phone: "+91 20 4567 8900",
    hours: "10:00 AM - 9:00 PM",
    rating: 4.9,
    collections: [
      { name: "Silk Elegance", priceRange: "₹10,000 - ₹40,000", pieces: 30 },
      { name: "Bridal Grandeur", priceRange: "₹50,000 - ₹3,00,000", pieces: 20 },
      { name: "Handloom Classics", priceRange: "₹8,000 - ₹25,000", pieces: 25 },
      { name: "Designer Exclusives", priceRange: "₹25,000 - ₹1,50,000", pieces: 15 },
    ],
    images: [
      "/images/rangoli-exterior.jpg",
      "/images/rangoli-interior1.jpg",
      "/images/rangoli-interior2.jpg",
      "/images/rangoli-display1.jpg",
      "/images/rangoli-display2.jpg",
      "/images/rangoli-trialroom.jpg",
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-bold text-primary mb-6">
              Rangoli Sarees
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Step into the world of elegance at Rangoli Sarees. Explore luxurious fabrics, 
              timeless weaves, and designer collections in our flagship boutique.
            </p>
          </div>
        </section>

        {/* Store Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="card-luxury p-8 animate-fade-in-up">
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      {store.name}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{store.address}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-luxury-gold text-luxury-gold" />
                        <span>{store.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{store.hours}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Store Image Gallery */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-heading font-serif font-bold text-primary mb-4">
                Explore Our Store
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse of the Rangoli experience — from our elegant interiors to curated displays.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {store.images.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-elegant">
                  <img 
                    src={src} 
                    alt={`Rangoli store ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transform transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Saree Collections */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading font-serif font-bold text-primary mb-4">
                Saree Collections
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our curated saree collections, showcasing traditional craftsmanship and contemporary design.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {store.collections.map((collection) => (
                <Card 
                  key={collection.name}
                  className="p-6 hover:shadow-elegant transition-shadow duration-300"
                >
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-primary">{collection.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {collection.pieces} pieces
                      </Badge>
                    </div>
                    <p className="text-luxury-gold font-medium text-lg">
                      {collection.priceRange}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-heading font-serif font-bold text-primary mb-6">
              Schedule Your Visit
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience Rangoli Sarees in person. Book your private consultation 
              or walk in to explore our exquisite collections.
            </p>
            <Button className="btn-gold text-lg px-8 py-4 mr-4">
              Book Consultation
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              Call Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stores;
