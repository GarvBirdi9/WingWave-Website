import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Rocket, Microscope, Zap } from "lucide-react";

export default function RDPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Research & Development
            </h1>
            <p className="font-mono text-xl text-muted-foreground">
              Pioneering the future of unmanned aerial systems through
              innovation and advanced research
            </p>
          </div>
        </div>
      </section>

      {/* R&D Focus Areas */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Innovation Focus Areas
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              Our research initiatives span multiple disciplines to advance UAS
              capabilities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-xl">
                  Artificial Intelligence
                </CardTitle>
                <CardDescription>
                  Next-generation autonomous systems and machine learning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our AI research team is developing advanced neural networks
                  for real-time object detection, classification, and tracking.
                  We're pushing the boundaries of autonomous decision-making to
                  reduce operator workload and improve mission effectiveness.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold">
                    Current Projects
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Swarm intelligence algorithms</li>
                    <li>• Adversarial AI for threat detection</li>
                    <li>• Reinforcement learning for navigation</li>
                    <li>• Edge computing optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-xl">
                  Advanced Propulsion
                </CardTitle>
                <CardDescription>
                  Revolutionary power systems for extended endurance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We're exploring cutting-edge propulsion technologies including
                  hydrogen fuel cells, solar-electric hybrid systems, and
                  advanced battery chemistries to dramatically extend flight
                  times and operational ranges.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold">
                    Current Projects
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Solid-state battery integration</li>
                    <li>• Solar panel efficiency optimization</li>
                    <li>• Micro-turbine generators</li>
                    <li>• Wireless power transmission</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-xl">
                  Materials Science
                </CardTitle>
                <CardDescription>
                  Lightweight, durable materials for aerospace applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our materials research focuses on developing next-generation
                  composites and metamaterials that offer superior
                  strength-to-weight ratios while providing stealth
                  characteristics and environmental resistance.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold">
                    Current Projects
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Graphene-enhanced composites</li>
                    <li>• Self-healing materials</li>
                    <li>• Radar-absorbing structures</li>
                    <li>• Temperature-adaptive coatings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-xl">
                  Sensor Technology
                </CardTitle>
                <CardDescription>
                  Advanced sensing capabilities for all-weather operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We're developing next-generation sensor systems that combine
                  multiple imaging modalities with advanced signal processing to
                  provide unprecedented situational awareness in all
                  environmental conditions.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold">
                    Current Projects
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Quantum radar systems</li>
                    <li>• Hyperspectral imaging</li>
                    <li>• LIDAR miniaturization</li>
                    <li>• Multi-sensor fusion algorithms</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Collaborative Research
              </h2>
              <p className="font-mono text-lg text-muted-foreground">
                Partnering with leading institutions to accelerate innovation
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-mono text-2xl font-semibold">
                    Academic Partnerships
                  </h3>
                  <p className="text-muted-foreground">
                    We collaborate with top-tier universities and research
                    institutions worldwide to leverage cutting-edge academic
                    research and attract the brightest minds in aerospace
                    engineering, computer science, and materials science.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Joint research programs with leading aerospace
                      departments
                    </li>
                    <li>
                      • Sponsored PhD and post-doctoral research positions
                    </li>
                    <li>• Technology transfer agreements</li>
                    <li>• Student internship and co-op programs</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-2xl font-semibold">
                    Industry Collaboration
                  </h3>
                  <p className="text-muted-foreground">
                    Strategic partnerships with technology leaders enable us to
                    integrate the latest commercial innovations into our defense
                    platforms, accelerating development cycles and reducing
                    costs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Component supplier partnerships</li>
                    <li>• Joint development agreements</li>
                    <li>• Technology licensing arrangements</li>
                    <li>• Standards body participation</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-2xl font-semibold">
                    Government Research Programs
                  </h3>
                  <p className="text-muted-foreground">
                    Active participation in government-funded research
                    initiatives allows us to contribute to national defense
                    priorities while advancing the state of the art in unmanned
                    systems technology.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Defense research contracts</li>
                    <li>
                      • Small Business Innovation Research (SBIR) programs
                    </li>
                    <li>• Technology demonstration projects</li>
                    <li>• Standards development participation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Innovation Pipeline
              </h2>
              <p className="font-mono text-lg text-muted-foreground">
                From concept to deployment: Our systematic approach to
                innovation
              </p>
            </div>

            <div className="space-y-6">
              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">
                    Phase 1: Concept Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Initial research and feasibility studies to evaluate new
                    technologies and concepts. Rapid prototyping and simulation
                    to validate core principles.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">
                    Phase 2: Technology Demonstration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Development of functional prototypes and proof-of-concept
                    systems. Laboratory and controlled field testing to validate
                    performance characteristics.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">
                    Phase 3: System Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Integration of new technologies into complete UAS platforms.
                    Comprehensive testing in realistic operational environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">
                    Phase 4: Operational Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Production engineering and manufacturing scale-up.
                    Deployment to operational units with comprehensive training
                    and support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
