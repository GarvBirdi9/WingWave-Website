import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, Radio, Eye, Cpu } from 'lucide-react';
import image1 from '@/assets/1737045723025.jpeg'
import image2 from '@/assets/360_F_1064971205_h90Akx3xq06YkGMonBV3cQJyInpfcr6a.jpg.jpeg'
import image3 from '@/assets/military-technology-action-soldier-operating-drone-precision-tactical-control-advanced-equipment-aerial-surveillance-strategic-planning-remote-operation-battlefield-innovation_.avif'

export default function ProductsPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              UAS Product Portfolio
            </h1>
            <p className="font-mono text-xl text-muted-foreground">
              Advanced unmanned aerial systems engineered for mission-critical operations
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-5">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Tactical Reconnaissance Drone */}
            <Card className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image1}
                  alt="Tactical Reconnaissance Drone"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 backdrop-blur">FLAGSHIP</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-2xl">WW-TR-5000</CardTitle>
                <CardDescription className="text-base">
                  Tactical Reconnaissance System
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our flagship tactical reconnaissance platform designed for extended surveillance 
                  missions in contested environments. Features advanced multi-spectral imaging and 
                  real-time data transmission.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    Key Specifications
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Flight endurance: 18+ hours</li>
                    <li>• Operational range: 150 km</li>
                    <li>• Payload capacity: 8 kg</li>
                    <li>• Max altitude: 6,000 m</li>
                    <li>• Stealth profile design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Rapid Response Drone */}
            <Card className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image2}
                  alt="Rapid Response Drone"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="backdrop-blur">TACTICAL</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-2xl">WW-RR-3000</CardTitle>
                <CardDescription className="text-base">
                  Rapid Response Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  High-speed tactical drone optimized for quick deployment and immediate response 
                  scenarios. Ideal for time-sensitive intelligence gathering and target acquisition.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    Key Specifications
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Flight endurance: 6 hours</li>
                    <li>• Operational range: 75 km</li>
                    <li>• Max speed: 180 km/h</li>
                    <li>• Deployment time: &lt;5 minutes</li>
                    <li>• Vertical take-off capable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Communications Relay Drone */}
            <Card className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-muted/50 flex items-center justify-center">
                <Radio className="h-32 w-32 text-muted-foreground/20" />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="backdrop-blur">SPECIALIZED</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-2xl">WW-CR-4000</CardTitle>
                <CardDescription className="text-base">
                  Communications Relay System
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Specialized platform for establishing secure communication networks in remote or 
                  denied areas. Provides critical connectivity for ground forces and command centers.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    Key Specifications
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Flight endurance: 24+ hours</li>
                    <li>• Coverage radius: 100 km</li>
                    <li>• Multi-band relay capability</li>
                    <li>• Encrypted communications</li>
                    <li>• Autonomous station-keeping</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI-Powered Surveillance Drone */}
            <Card className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image3}
                  alt="AI-Powered Surveillance"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 backdrop-blur">AI-ENABLED</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono text-2xl">WW-AI-6000</CardTitle>
                <CardDescription className="text-base">
                  Autonomous Intelligence Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Next-generation autonomous system with integrated AI for real-time threat detection, 
                  pattern recognition, and predictive analysis. Reduces operator workload significantly.
                </p>
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    Key Specifications
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Flight endurance: 20 hours</li>
                    <li>• AI-powered target recognition</li>
                    <li>• Autonomous mission planning</li>
                    <li>• Multi-sensor fusion</li>
                    <li>• Swarm coordination capable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Standard Features Across All Systems
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              Every Wingwave UAS includes these mission-critical capabilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="h-2 w-2 rounded-full bg-primary mb-3" />
              <h3 className="text-lg font-mono font-semibold">Military-Grade Encryption</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end encrypted communications and data storage
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-2 rounded-full bg-primary mb-3" />
              <h3 className="text-lg font-mono font-semibold">Weather Resistance</h3>
              <p className="text-sm text-muted-foreground">
                Operational in extreme weather conditions
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-2 rounded-full bg-primary mb-3" />
              <h3 className="text-lg font-mono font-semibold">Modular Payloads</h3>
              <p className="text-sm text-muted-foreground">
                Quick-swap payload systems for mission flexibility
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-2 rounded-full bg-primary mb-3" />
              <h3 className="text-lg font-mono font-semibold">Redundant Systems</h3>
              <p className="text-sm text-muted-foreground">
                Multiple backup systems for critical components
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-2 rounded-full bg-primary mb-3" />
              <h3 className="text-lg font-mono font-semibold">Real-Time Telemetry</h3>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring and data streaming
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-2 rounded-full bg-primary mb-3" />
              <h3 className="text-lg font-mono font-semibold">Fail-Safe Protocols</h3>
              <p className="text-sm text-muted-foreground">
                Automatic return-to-base and emergency procedures
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
