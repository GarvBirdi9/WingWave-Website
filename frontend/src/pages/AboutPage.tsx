import { Building2, Users, Globe, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import techImage from "@/assets/military-technology-action-soldier-operating-drone-precision-tactical-control-advanced-equipment-aerial-surveillance-strategic-planning-remote-operation-battlefield-innovation_.avif";

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              About Wingwave Technologies
            </h1>
            <p className="text-xl font-mono text-muted-foreground">
              Leading the future of unmanned aerial systems with precision
              engineering and innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-15">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-mono text-2xl text-center">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  To deliver cutting-edge unmanned aerial systems that empower
                  military and defense organizations with superior intelligence,
                  surveillance, and reconnaissance capabilities.
                </p>
                <p className="text-muted-foreground text-center">
                  We are committed to advancing the state of the art in
                  autonomous flight technology, ensuring our systems meet the
                  highest standards of reliability, security, and performance in
                  the most demanding operational environments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-mono text-2xl  text-center">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground  text-center">
                  To be the global leader in defense aerospace technology,
                  setting new benchmarks for unmanned aerial systems through
                  continuous innovation and unwavering commitment to excellence.
                </p>
                <p className="text-muted-foreground  text-center">
                  We envision a future where our advanced UAS platforms become
                  the cornerstone of modern military operations, providing
                  unmatched situational awareness and tactical advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-lg font-mono text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">Excellence</CardTitle>
                <CardDescription>
                  Uncompromising commitment to quality and precision in every
                  system we develop
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">Innovation</CardTitle>
                <CardDescription>
                  Pushing the boundaries of aerospace technology through
                  continuous research and development
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">Security</CardTitle>
                <CardDescription>
                  Maintaining the highest standards of operational security and
                  data protection
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">Integrity</CardTitle>
                <CardDescription>
                  Operating with transparency, accountability, and ethical
                  responsibility
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <img
                src={techImage}
                alt="Wingwave Technologies facility"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Industry Leadership
              </h2>
              <p className="text-lg text-muted-foreground">
                Wingwave Technologies stands at the forefront of defense
                aerospace innovation, specializing in the design, development,
                and deployment of advanced unmanned aerial systems.
              </p>
              <p className="text-muted-foreground">
                Our team of world-class engineers, researchers, and defense
                specialists brings decades of combined experience in aerospace
                engineering, autonomous systems, and military operations. We
                work closely with defense organizations worldwide to deliver
                solutions that meet the evolving challenges of modern warfare.
              </p>
              <p className="text-muted-foreground">
                With state-of-the-art research facilities and rigorous testing
                protocols, we ensure every system we produce meets or exceeds
                the stringent requirements of military operations. Our
                commitment to innovation drives us to continuously advance the
                capabilities of our UAS platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-2">
              <div className="font-mono text-5xl font-bold text-primary">
                15+
              </div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Years of Excellence
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-mono text-5xl font-bold text-primary">
                50+
              </div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Defense Partners
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-mono text-5xl font-bold text-primary">
                1000+
              </div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Systems Deployed
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
