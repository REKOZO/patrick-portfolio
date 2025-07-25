import { useEffect } from "react";
import HeroSection from "@/components/features/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PROGRAM_POINTS } from "@/lib/constants";
import { ChevronRight, Users, Calendar, TrendingUp } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Add fade-in animation to sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="py-20 bg-white fade-in">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold campaign-blue">
                  Qui est Eric NZENGUE ?
                </h2>
                <p className="text-xl campaign-gray leading-relaxed">
                  Un leader engagé pour la diaspora gabonaise, avec une vision claire pour notre avenir commun.
                </p>
                <p className="text-lg campaign-gray leading-relaxed">
                  Né au Gabon et installé en Europe depuis plus de 15 ans, Eric NZENGUE a consacré sa carrière 
                  à servir la communauté gabonaise de la diaspora. Son engagement associatif et son travail de terrain 
                  lui ont permis de tisser des liens solides avec les différentes communautés.
                </p>
              </div>
              
              <Link href="/candidat">
                <Button className="bg-campaign-blue hover:bg-campaign-blue-light">
                  En savoir plus sur le candidat
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Eric NZENGUE - Portrait officiel" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              <Card className="bg-campaign-blue text-white">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4">
                    "Notre force réside dans notre unité. Ensemble, nous pouvons construire un avenir 
                    où chaque membre de la diaspora gabonaise trouve sa place."
                  </blockquote>
                  <cite className="font-semibold">- Eric NZENGUE</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Preview Section */}
      <section className="py-20 bg-slate-50 fade-in">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold campaign-blue mb-6">
              Notre Programme
            </h2>
            <p className="text-xl campaign-gray max-w-3xl mx-auto">
              Un programme ambitieux pour répondre aux besoins spécifiques de la diaspora gabonaise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {PROGRAM_POINTS.slice(0, 3).map((point, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-campaign-blue rounded-xl flex items-center justify-center mb-6">
                    <i className={`${point.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold campaign-blue mb-4">{point.title}</h3>
                  <p className="campaign-gray mb-6">{point.description}</p>
                  <Button variant="ghost" className="campaign-blue hover:bg-blue-50 p-0">
                    En savoir plus <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/programme">
              <Button size="lg" className="bg-campaign-blue hover:bg-campaign-blue-light">
                <i className="fas fa-download mr-3"></i>
                Découvrir le Programme Complet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white fade-in">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 campaign-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold campaign-blue mb-2">50,000+</h3>
                <p className="campaign-gray">Membres de la Diaspora</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 campaign-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold campaign-blue mb-2">15+</h3>
                <p className="campaign-gray">Événements Organisés</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 campaign-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold campaign-blue mb-2">25</h3>
                <p className="campaign-gray">Pays Représentés</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-campaign-blue text-white fade-in">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Rejoignez Notre Mouvement
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Ensemble, nous sommes plus forts. Rejoignez des milliers de membres de la diaspora 
            qui croient en notre vision d'avenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rejoindre">
              <Button size="lg" className="bg-campaign-yellow campaign-blue hover:bg-yellow-400 text-lg px-8">
                Devenir Membre
              </Button>
            </Link>
            <Link href="/feedback">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-campaign-blue text-lg px-8"
              >
                Participer aux Sondages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
