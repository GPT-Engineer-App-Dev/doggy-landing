import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?w=1200&h=600')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Dog Haven</h1>
          <p className="mt-4 text-xl">Your one-stop destination for all things dog-related</p>
          <Button className="mt-8">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center">At Dog Haven, our mission is to provide the best care and services for your furry friends. We believe in creating a safe and loving environment for all dogs.</p>
        <img src="/placeholder.svg?w=800&h=400" alt="About Us" className="mx-auto mt-8 rounded-xl object-cover" />
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Dog Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Professional training services to help your dog learn and grow.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dog Grooming</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Keep your dog looking and feeling great with our grooming services.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dog Boarding</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Safe and comfortable boarding facilities for your dog.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <Carousel className="mt-8">
          <CarouselContent>
            <CarouselItem>
              <div className="text-center">
                <img src="/placeholder.svg?w=100&h=100" alt="Client 1" className="mx-auto rounded-full object-cover" />
                <p className="mt-4">"Dog Haven is amazing! My dog loves it here."</p>
                <p className="mt-2 font-bold">- John Doe</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center">
                <img src="/placeholder.svg?w=100&h=100" alt="Client 2" className="mx-auto rounded-full object-cover" />
                <p className="mt-4">"The best services for my furry friend."</p>
                <p className="mt-2 font-bold">- Jane Smith</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Follow us on social media</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-white">Facebook</a>
            <a href="#" className="text-white">Twitter</a>
            <a href="#" className="text-white">Instagram</a>
          </div>
          <p className="mt-4">&copy; 2023 Dog Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;