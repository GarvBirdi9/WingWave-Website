import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Satellite, Shield, Zap, Brain, Radio } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Advanced Technology
            </h1>
            <p className="text-xl font-mono text-muted-foreground">
              Cutting-edge innovations powering the next generation of unmanned
              aerial systems
            </p>
          </div>
        </div>
      </section>

      {/* Technology Tabs */}
      <section className="py-5">
        <div className="container">
          <Tabs defaultValue="propulsion" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
              <TabsTrigger className="hover:bg-accent cursor-auto" value="propulsion">
                Propulsion
              </TabsTrigger>
              <TabsTrigger className="hover:bg-accent cursor-auto" value="sensors">
                Sensors
              </TabsTrigger>
              <TabsTrigger className="hover:bg-accent cursor-auto" value="ai">
                AI Systems
              </TabsTrigger>
              <TabsTrigger className="hover:bg-accent cursor-auto" value="communications">
                Comms
              </TabsTrigger>
              <TabsTrigger className="hover:bg-accent cursor-auto" value="security">
                Security
              </TabsTrigger>
              <TabsTrigger className="hover:bg-accent cursor-auto" value="materials">
                Materials
              </TabsTrigger>
            </TabsList>

            <TabsContent value="propulsion" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-3xl">
                    Hybrid Propulsion Systems
                  </CardTitle>
                  <CardDescription className="">
                    Advanced power systems for extended endurance and
                    operational flexibility
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our proprietary hybrid propulsion technology combines
                    electric motors with high-efficiency fuel cells, delivering
                    unprecedented flight endurance while maintaining low
                    acoustic and thermal signatures.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Electric Motors
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Brushless DC motors with 95% efficiency</li>
                        <li>
                          • Variable speed control for optimal performance
                        </li>
                        <li>• Minimal electromagnetic signature</li>
                        <li>• Redundant motor configurations</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Fuel Cell Technology
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Hydrogen fuel cells for extended range</li>
                        <li>• Quick-swap fuel cartridge system</li>
                        <li>• Cold-weather operation capability</li>
                        <li>• Zero emissions during operation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sensors" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Satellite className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-3xl">
                    Multi-Spectral Sensor Suite
                  </CardTitle>
                  <CardDescription>
                    Comprehensive sensing capabilities for all-weather,
                    day/night operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our advanced sensor packages integrate multiple imaging
                    technologies to provide complete situational awareness
                    regardless of environmental conditions or time of day.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Electro-Optical
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 4K resolution imaging</li>
                        <li>• 30x optical zoom</li>
                        <li>• Image stabilization</li>
                        <li>• Low-light enhancement</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Thermal Imaging
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• LWIR thermal camera</li>
                        <li>• Temperature detection</li>
                        <li>• Through-fog capability</li>
                        <li>• Heat signature analysis</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Radar Systems
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Synthetic aperture radar</li>
                        <li>• Ground moving target indicator</li>
                        <li>• All-weather operation</li>
                        <li>• Terrain mapping</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-3xl">
                    Artificial Intelligence & Autonomy
                  </CardTitle>
                  <CardDescription>
                    Machine learning systems for intelligent decision-making and
                    autonomous operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our AI-powered systems leverage deep learning algorithms to
                    provide real-time analysis, autonomous navigation, and
                    intelligent threat detection, significantly reducing
                    operator workload.
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Computer Vision
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced object detection and classification using
                        convolutional neural networks. Capable of identifying
                        vehicles, personnel, and infrastructure with high
                        accuracy.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Autonomous Navigation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        GPS-denied navigation using visual odometry and SLAM
                        algorithms. Enables operation in contested environments
                        where GPS signals are unavailable.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Predictive Analytics
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Machine learning models that predict patterns of life,
                        identify anomalies, and provide actionable intelligence
                        to operators.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="communications" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Radio className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-3xl">
                    Secure Communications
                  </CardTitle>
                  <CardDescription>
                    Military-grade communication systems with anti-jamming
                    capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our communication systems employ frequency-hopping spread
                    spectrum technology and advanced encryption to ensure
                    reliable, secure data transmission in hostile
                    electromagnetic environments.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Data Links
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Multi-band radio systems</li>
                        <li>• Frequency-hopping capability</li>
                        <li>• Low probability of intercept</li>
                        <li>• Mesh networking support</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Satellite Comms
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Beyond-line-of-sight capability</li>
                        <li>• Global coverage</li>
                        <li>• High-bandwidth data transmission</li>
                        <li>• Redundant link architecture</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-3xl">
                    Cybersecurity & Data Protection
                  </CardTitle>
                  <CardDescription>
                    Multi-layered security architecture protecting against cyber
                    threats
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Every Wingwave system incorporates defense-in-depth security
                    principles, with multiple layers of protection against
                    unauthorized access, data interception, and cyber attacks.
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Encryption Standards
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        AES-256 encryption for all data at rest and in transit.
                        Hardware security modules (HSM) for key management and
                        cryptographic operations.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Authentication
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Multi-factor authentication for operator access.
                        Cryptographic verification of all command and control
                        messages to prevent spoofing.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Intrusion Detection
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Real-time monitoring for anomalous behavior and
                        potential cyber attacks. Automatic countermeasures and
                        alert systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-3xl">
                    Advanced Materials & Structures
                  </CardTitle>
                  <CardDescription>
                    Lightweight, durable materials optimized for aerospace
                    applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our airframes utilize cutting-edge composite materials and
                    manufacturing techniques to achieve optimal
                    strength-to-weight ratios while maintaining low radar
                    cross-sections.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Composite Structures
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Carbon fiber reinforced polymers</li>
                        <li>• Honeycomb core construction</li>
                        <li>• Impact-resistant design</li>
                        <li>• Corrosion-proof materials</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-lg font-semibold">
                        Stealth Features
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Radar-absorbing materials</li>
                        <li>• Low-observable geometry</li>
                        <li>• Thermal signature reduction</li>
                        <li>• Acoustic dampening</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
              Continuous Innovation
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              Our dedicated research and development team works tirelessly to
              push the boundaries of what's possible in unmanned aerial systems.
              We invest heavily in emerging technologies including quantum
              communications, advanced AI, and next-generation propulsion
              systems to ensure our platforms remain at the cutting edge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
