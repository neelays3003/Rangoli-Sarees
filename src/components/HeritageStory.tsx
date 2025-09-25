import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import artisanImage from "@/assets/image.png";

const HeritageStory = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Heritage",
      description: "Every saree we curate carries forward centuries of textile tradition and cultural storytelling.",
    },
    {
      icon: Users,
      title: "Artisan Partners",
      description: "We collaborate directly with master weavers and craftspeople, ensuring fair trade and skill preservation.",
    },
    {
      icon: Award,
      title: "Exceptional Quality",
      description: "Each piece undergoes rigorous quality checks to meet our exacting standards of excellence.",
    },
    {
      icon: Sparkles,
      title: "Timeless Elegance",
      description: "Our collections blend traditional craftsmanship with contemporary design sensibilities.",
    },
  ];

  return (
    <section id="heritage" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-heading font-serif font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Founded with a deep reverence for India's textile heritage, Anaya began as a dream 
                to bridge the gap between traditional craftsmanship and contemporary elegance.
              </p>
              <p>
                Our journey started in the handloom clusters of Tamil Nadu and Gujarat, where we 
                discovered the extraordinary skill of master weavers whose families have been 
                perfecting their craft for generations.
              </p>
              <p>
                Today, we work with over 200 artisan families across India, creating employment 
                opportunities while preserving traditional techniques that might otherwise be lost 
                to time.
              </p>
            </div>
            <div className="mt-8">
              <Button className="btn-outline-luxury">
                Learn More About Our Mission
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <img 
              src={artisanImage} 
              alt="Master artisan weaver at traditional handloom"
              className="rounded-xl shadow-elegant w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="text-center mb-12">
          <h3 className="text-subheading font-serif font-bold text-primary mb-4">
            Our Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make, from sourcing to customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="card-luxury text-center p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-serif font-bold text-primary mb-3 text-lg">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageStory;