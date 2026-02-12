import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Radar, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import bannerImage from "@/assets/1737045723025.jpeg";
import techImage from "@/assets/360_F_1064971205_h90Akx3xq06YkGMonBV3cQJyInpfcr6a.jpg.jpeg";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImage}
            alt="Advanced drone systems in flight"
            className="h-full w-full object-cover opacity-60 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container relative z-10 pt-16">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="font-mono text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                WINGWAVE TECHNOLOGIES
              </h1>
              <p className="mx-auto font-mono max-w-2xl text-xl text-muted-foreground sm:text-2xl">
                Advanced Unmanned Aerial Systems for Military Intelligence,
                Surveillance & Tactical Operations
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button
                asChild
                size="lg"
                className="group transition-transform active:scale-[0.95]"
              >
                <Link
                  to="/products"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                >
                  Explore Systems
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                className="transition-transform active:scale-[0.95]"
                asChild
                variant="outline"
                size="lg"
              >
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to="/contact"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container ">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Mission-Critical Capabilities
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              Precision-engineered systems designed for the most demanding
              operational environments
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-transform hover:shadow-xl hover:border-primary/50 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 ">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">
                  Secure Operations
                </CardTitle>
                <CardDescription>
                  Military-grade encryption and secure communication protocols
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all hover:shadow-xl hover:border-primary/50 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Radar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">
                  Advanced Surveillance
                </CardTitle>
                <CardDescription>
                  Real-time intelligence gathering with cutting-edge sensor
                  technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all hover:shadow-xl hover:border-primary/50 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">
                  Rapid Deployment
                </CardTitle>
                <CardDescription>
                  Quick-response systems ready for immediate tactical operations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all hover:shadow-xl hover:border-primary/50 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">
                  Precision Targeting
                </CardTitle>
                <CardDescription>
                  High-accuracy positioning and targeting systems for mission
                  success
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Next-Generation Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                Our unmanned aerial systems integrate the latest advances in
                aerospace engineering, artificial intelligence, and sensor
                technology to deliver unmatched performance in the field.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Autonomous flight control with AI-powered navigation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Multi-spectral imaging and thermal detection systems
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Extended range and endurance capabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Modular payload systems for mission flexibility
                  </span>
                </li>
              </ul>
              <Button
                asChild
                className="group transition-transform active:scale-[0.95]"
              >
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to="/technology"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={techImage}
                alt="Advanced drone technology"
                className="rounded-lg shadow-2xl "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-12 text-center">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Deploy Advanced UAS Solutions?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
                Contact our team to discuss your operational requirements and
                discover how Wingwave Technologies can enhance your mission
                capabilities.
              </p>
              <Button
                asChild
                size="lg"
                className="group transition-transform active:scale-[0.95]"
              >
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to="/contact"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
