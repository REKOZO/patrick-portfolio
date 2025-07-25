import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Handshake } from "lucide-react";

export default function Candidate() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold campaign-blue mb-6">
            Qui est Eric NZENGUE ?
          </h1>
          <p className="text-xl campaign-gray max-w-3xl mx-auto">
            Un leader engagé pour la diaspora gabonaise, avec une vision claire pour notre avenir commun.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold campaign-blue">Biographie & Parcours</h2>
              <p className="text-lg campaign-gray leading-relaxed">
                Né au Gabon et installé en Europe depuis plus de 15 ans, Eric NZENGUE a consacré sa carrière 
                à servir la communauté gabonaise de la diaspora. Diplômé en Sciences Politiques et fort d'une 
                expérience internationale, il comprend les défis uniques auxquels fait face notre communauté.
              </p>
              <p className="text-lg campaign-gray leading-relaxed">
                Son engagement associatif et son travail de terrain lui ont permis de tisser des liens solides 
                avec les différentes communautés de la diaspora à travers le monde. Il a organisé de nombreux 
                événements culturels et politiques, créé des réseaux d'entraide, et œuvré pour améliorer les 
                conditions de vie des Gabonais à l'étranger.
              </p>
              <p className="text-lg campaign-gray leading-relaxed">
                Convaincu que l'union fait la force, Eric NZENGUE propose aujourd'hui un projet politique 
                ambitieux qui vise à rassembler toutes les sensibilités de la diaspora autour d'objectifs 
                communs : éducation, développement économique, représentation politique et solidarité sociale.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-50">
                <CardContent className="p-6">
                  <GraduationCap className="h-8 w-8 campaign-blue mb-4" />
                  <h3 className="font-semibold campaign-blue mb-2">Formation</h3>
                  <p className="campaign-gray">Sciences Politiques, Relations Internationales</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50">
                <CardContent className="p-6">
                  <Handshake className="h-8 w-8 campaign-blue mb-4" />
                  <h3 className="font-semibold campaign-blue mb-2">Engagement</h3>
                  <p className="campaign-gray">15+ ans au service de la diaspora</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Eric NZENGUE - Portrait officiel" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            
            <Card className="bg-campaign-blue text-white">
              <CardContent className="p-8">
                <blockquote className="text-xl italic mb-4">
                  "Notre force réside dans notre unité. Ensemble, nous pouvons construire un avenir 
                  où chaque membre de la diaspora gabonaise trouve sa place et contribue au développement de notre nation."
                </blockquote>
                <cite className="font-semibold">- Eric NZENGUE</cite>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold campaign-blue text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-campaign-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold campaign-blue mb-4">Solidarité</h3>
                <p className="campaign-gray">
                  Nous croyons en l'entraide et le soutien mutuel entre tous les membres de la diaspora.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-campaign-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-balance-scale text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold campaign-blue mb-4">Justice</h3>
                <p className="campaign-gray">
                  Nous œuvrons pour l'égalité des chances et la justice sociale pour tous.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-campaign-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-lightbulb text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold campaign-blue mb-4">Innovation</h3>
                <p className="campaign-gray">
                  Nous encourageons la créativité et l'innovation pour relever les défis de demain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-20 bg-slate-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold campaign-blue text-center mb-8">Notre Vision</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg campaign-gray leading-relaxed text-center">
              Nous imaginons une diaspora gabonaise unie, prospère et influente, capable de jouer un rôle 
              déterminant dans le développement du Gabon tout en s'épanouissant pleinement dans ses pays d'accueil.
            </p>
            <p className="text-lg campaign-gray leading-relaxed text-center">
              Notre vision s'articule autour de quatre piliers fondamentaux : l'éducation de qualité pour tous, 
              la création d'opportunités économiques durables, le renforcement de notre représentation politique, 
              et la construction d'un réseau de solidarité mondial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
