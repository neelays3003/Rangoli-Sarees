import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-display font-serif font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for inquiries, appointments, 
              or to learn more about our exquisite saree collections.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-luxury p-8">
                <CardContent className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input placeholder="What can we help you with?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button className="btn-gold w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Visit our stores or reach out through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="card-luxury p-6">
                    <CardContent className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+91 9422727122</p>
                        <p className="text-sm text-muted-foreground">Mon-Sun, 10 AM - 8 PM</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-luxury p-6">
                    <CardContent className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">rangoli2799@gmail.com</p>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-luxury p-6">
                    <CardContent className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Visit Us</h3>
                        <p className="text-muted-foreground">Main Road, Shrirampur</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-luxury p-6">
                    <CardContent className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Hours</h3>
                        <p className="text-muted-foreground">Monday - Sunday: 10 AM - 8 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-heading font-serif font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our sarees and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-luxury p-6">
                <CardContent>
                  <h3 className="font-semibold text-foreground mb-2">Do you offer custom designs?</h3>
                  <p className="text-muted-foreground">Yes, we offer bespoke saree design services with a 4-6 week lead time.</p>
                </CardContent>
              </Card>

              <Card className="card-luxury p-6">
                <CardContent>
                  <h3 className="font-semibold text-foreground mb-2">What is your return policy?</h3>
                  <p className="text-muted-foreground">We accept returns within 7 days for unworn items with original tags.</p>
                </CardContent>
              </Card>

              <Card className="card-luxury p-6">
                <CardContent>
                  <h3 className="font-semibold text-foreground mb-2">Do you ship internationally?</h3>
                  <p className="text-muted-foreground">No, we do not ship worldwide.</p>
                </CardContent>
              </Card>

              <Card className="card-luxury p-6">
                <CardContent>
                  <h3 className="font-semibold text-foreground mb-2">How do I care for my saree?</h3>
                  <p className="text-muted-foreground">We provide detailed care instructions with each purchase and offer maintenance services.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;