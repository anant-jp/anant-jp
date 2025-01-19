import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import TypingEffect from "@/components/TypingEffect";
import FadeOut from "@/components/FadeOut";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 ">Hi, This is</h2>
          <FadeOut />
          <p className="text-xl text-muted-foreground font-semibold">
            I am a <TypingEffect />
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">ABOUT ME</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/173897893?v=4"
                alt="Profile"
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg mb-4">
                Experienced Technical Business Analyst with a proven track record in system integration
                and process optimization. Passionate about bridging the gap between business needs and
                technical solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Age:</p>
                  <p>28</p>
                </div>
                <div>
                  <p className="font-semibold">Experience:</p>
                  <p>4+ years</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">CLIENTS I WORKED WITH</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add client logos here */}
            <Card className="p-6">Client 1</Card>
            <Card className="p-6">Client 2</Card>
            <Card className="p-6">Client 3</Card>
            <Card className="p-6">Client 4</Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">EXPERIENCE</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-primary pl-4"
            >
              <h3 className="text-xl font-semibold">Senior Business Analyst</h3>
              <p className="text-muted-foreground">2020 - Present</p>
              <p className="mt-2">
                Led multiple successful projects focusing on system integration and process optimization.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 border-4 border-primary rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">90%</span>
                  </div>
                </div>
                <h3 className="font-semibold">Business Analysis</h3>
              </div>
            </Card>
            {/* Add more skill cards */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">TESTIMONIALS</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-6">
              <p className="text-lg mb-4">
                "Anant is a highly skilled analyst who consistently delivers exceptional results. His ability to understand complex business requirements and translate them into technical solutions is unparalleled."
              </p>
              <p className="font-semibold">- Client {item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">MY PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden">
              <img
                src={`/project-${item}.jpg`}
                alt={`Project ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Project Title</h3>
                <p className="text-sm text-muted-foreground">
                  Brief description of the project and its impact.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">CONTACT ME</h2>
          <div className="flex justify-center space-x-8">
            <Button variant="outline" size="icon">
              <Mail className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon">
              <Phone className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon">
              <Github className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;