import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, MapPin, Shield, Radio, Eye, Target } from "lucide-react";

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mission Applications
            </h1>
            <p className="font-mono text-xl text-muted-foreground">
              Versatile UAS solutions for diverse military and defense
              operations
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-5">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-mono">
                  Intelligence Gathering
                </CardTitle>
                <CardDescription>
                  Comprehensive ISR operations for strategic intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Deploy our UAS platforms for persistent surveillance and
                  intelligence collection in areas of interest. Real-time data
                  transmission enables immediate analysis and decision-making.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Pattern of life analysis</li>
                  <li>• Infrastructure monitoring</li>
                  <li>• Border surveillance</li>
                  <li>• Maritime patrol</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-mono">
                  Target Acquisition
                </CardTitle>
                <CardDescription>
                  Precision targeting and tracking capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced sensor fusion and AI-powered recognition systems
                  enable rapid target identification and tracking, providing
                  critical information for tactical operations.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Automatic target recognition</li>
                  <li>• Moving target tracking</li>
                  <li>• Laser designation</li>
                  <li>• Coordinate generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-mono">
                  Force Protection
                </CardTitle>
                <CardDescription>
                  Perimeter security and threat detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Provide continuous overwatch for forward operating bases,
                  convoys, and critical infrastructure. Early warning systems
                  detect potential threats before they materialize.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Base perimeter monitoring</li>
                  <li>• Convoy escort</li>
                  <li>• Threat early warning</li>
                  <li>• Crowd monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-mono">
                  Reconnaissance
                </CardTitle>
                <CardDescription>
                  Tactical and strategic reconnaissance missions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Conduct detailed reconnaissance of terrain, enemy positions,
                  and potential operational areas. High-resolution imagery and
                  3D mapping capabilities support mission planning.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Terrain mapping</li>
                  <li>• Route reconnaissance</li>
                  <li>• Enemy position identification</li>
                  <li>• Landing zone assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-mono">
                  Communications Relay
                </CardTitle>
                <CardDescription>
                  Extended range communications support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Establish and maintain communication networks in remote or
                  mountainous terrain where traditional radio systems are
                  ineffective. Enables coordination across dispersed units.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Radio relay operations</li>
                  <li>• Network extension</li>
                  <li>• Emergency communications</li>
                  <li>• Data link bridging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-mono">
                  Battle Damage Assessment
                </CardTitle>
                <CardDescription>
                  Post-strike evaluation and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Rapidly assess the effectiveness of strikes and operations.
                  High-resolution imagery and change detection algorithms
                  provide accurate damage assessment.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Strike effectiveness analysis</li>
                  <li>• Change detection</li>
                  <li>• Infrastructure assessment</li>
                  <li>• Follow-up targeting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Operational Scenarios
              </h2>
              <p className="font-mono text-lg text-muted-foreground">
                Real-world applications demonstrating the versatility of our
                systems
              </p>
            </div>

            <div className="space-y-8">
              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    Urban Operations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    In complex urban environments, our compact UAS platforms
                    provide critical situational awareness for ground forces.
                    Low-altitude flight capabilities and obstacle avoidance
                    systems enable safe operation in confined spaces.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Capabilities
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Building interior reconnaissance</li>
                        <li>• Rooftop surveillance</li>
                        <li>• Crowd monitoring</li>
                        <li>• Sniper detection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Benefits
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Reduced risk to personnel</li>
                        <li>• Enhanced situational awareness</li>
                        <li>• Rapid deployment</li>
                        <li>• Minimal collateral damage</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    Maritime Surveillance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Extended endurance platforms provide persistent surveillance
                    of maritime approaches, exclusive economic zones, and
                    shipping lanes. Automatic identification system (AIS)
                    integration enables vessel tracking.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Capabilities
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Wide-area maritime patrol</li>
                        <li>• Vessel identification</li>
                        <li>• Illegal fishing detection</li>
                        <li>• Search and rescue support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Benefits
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Cost-effective patrol</li>
                        <li>• 24/7 coverage capability</li>
                        <li>• Weather-independent operation</li>
                        <li>• Rapid response to incidents</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    Counter-Terrorism Operations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Specialized systems support counter-terrorism missions with
                    advanced surveillance, target tracking, and real-time
                    intelligence dissemination. Stealth features enable covert
                    operations.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Capabilities
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• High-value target tracking</li>
                        <li>• Compound surveillance</li>
                        <li>• Communications intercept</li>
                        <li>• Hostage rescue support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Benefits
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Covert intelligence gathering</li>
                        <li>• Minimal operational footprint</li>
                        <li>• Real-time tactical support</li>
                        <li>• Enhanced mission success rate</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
