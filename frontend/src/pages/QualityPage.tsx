import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Shield, Award, FileCheck } from "lucide-react";

export default function QualityPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Quality Assurance
            </h1>
            <p className="font-mono text-xl text-muted-foreground">
              Uncompromising standards ensuring mission-critical reliability and
              performance
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Quality Commitment
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              Every system undergoes rigorous testing and validation to meet the
              highest standards
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-mono">100%</CardTitle>
                <CardDescription>Systems Tested</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-mono">ISO 9001</CardTitle>
                <CardDescription>Certified Quality Management</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-mono">AS9100</CardTitle>
                <CardDescription>Aerospace Quality Standard</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-mono">MIL-STD</CardTitle>
                <CardDescription>Military Standards Compliance</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing & Validation */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Comprehensive Testing Program
              </h2>
              <p className="font-mono text-lg text-muted-foreground">
                Multi-phase validation ensuring operational readiness
              </p>
            </div>

            <div className="space-y-6">
              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    Component Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Every component undergoes individual testing before
                    integration. We verify performance specifications,
                    environmental tolerances, and reliability metrics for all
                    subsystems.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Electrical Systems
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Power system validation</li>
                        <li>• EMI/EMC compliance testing</li>
                        <li>• Circuit board inspection</li>
                        <li>• Connector reliability testing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Mechanical Systems
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Structural load testing</li>
                        <li>• Vibration analysis</li>
                        <li>• Material fatigue testing</li>
                        <li>• Actuator performance validation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    System Integration Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Complete systems undergo extensive integration testing to
                    verify all subsystems work together seamlessly. We test all
                    operational modes and failure scenarios.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• End-to-end system functionality verification</li>
                    <li>• Communication link testing</li>
                    <li>• Sensor calibration and validation</li>
                    <li>• Software integration testing</li>
                    <li>• Failure mode and effects analysis (FMEA)</li>
                    <li>• Redundancy system verification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    Environmental Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    All systems are subjected to rigorous environmental testing
                    to ensure reliable operation in extreme conditions
                    encountered during military operations.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Climate Testing
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Temperature extremes (-40°C to +60°C)</li>
                        <li>• Humidity and moisture resistance</li>
                        <li>• Salt spray corrosion testing</li>
                        <li>• Thermal cycling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-semibold mb-2">
                        Operational Testing
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• High altitude performance</li>
                        <li>• Wind and turbulence testing</li>
                        <li>• Rain and icing conditions</li>
                        <li>• Dust and sand exposure</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    Flight Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Extensive flight testing validates all performance
                    parameters and operational capabilities. We conduct hundreds
                    of test flights before operational deployment.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Performance envelope validation</li>
                    <li>• Endurance and range verification</li>
                    <li>• Payload integration testing</li>
                    <li>• Autonomous flight mode validation</li>
                    <li>• Emergency procedure verification</li>
                    <li>• Operational scenario testing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Certifications & Compliance
              </h2>
              <p className="font-mono text-xl text-muted-foreground">
                Meeting and exceeding industry and military standards
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-mono text-2xl font-semibold">
                    Quality Management
                  </h3>
                  <p className="text-muted-foreground">
                    Our quality management system is certified to ISO 9001:2015
                    and AS9100D, demonstrating our commitment to consistent
                    quality and continuous improvement.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ISO 9001:2015 - Quality Management Systems</li>
                    <li>• AS9100D - Aerospace Quality Management</li>
                    <li>• ISO 27001 - Information Security Management</li>
                    <li>
                      • CMMC Level 3 - Cybersecurity Maturity Model
                      Certification
                    </li>
                  </ul>  
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-2xl font-semibold">
                    Military Standards
                  </h3>
                  <p className="text-muted-foreground">
                    All systems are designed and tested to meet applicable
                    military standards, ensuring compatibility with defense
                    operations and infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • MIL-STD-810 - Environmental Engineering Considerations
                    </li>
                    <li>
                      • MIL-STD-461 - Electromagnetic Interference
                      Characteristics
                    </li>
                    <li>
                      • MIL-STD-1553 - Digital Time Division Command/Response
                      Multiplex Data Bus
                    </li>
                    <li>
                      • DO-178C - Software Considerations in Airborne Systems
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-2xl font-semibold">
                    Export Control
                  </h3>
                  <p className="text-muted-foreground">
                    We maintain strict compliance with international export
                    control regulations, including ITAR and EAR requirements for
                    defense articles and technologies.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ITAR compliance program</li>
                    <li>• Export license management</li>
                    <li>• Technology transfer controls</li>
                    <li>• Foreign national access procedures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
              Continuous Improvement
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              We continuously monitor field performance and customer feedback to
              drive ongoing improvements in our products and processes. Our
              commitment to quality extends throughout the entire product
              lifecycle, from initial design through operational support and
              eventual retirement.
            </p>
            <div className="grid gap-6 md:grid-cols-3 pt-8">
              <div className="space-y-2">
                <div className="font-mono text-3xl font-bold text-primary">
                  99.8%
                </div>
                <div className="text-sm text-muted-foreground">
                  Mission Success Rate
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-3xl font-bold text-primary">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Technical Support
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-3xl font-bold text-primary">
                  &lt;0.1%
                </div>
                <div className="text-sm text-muted-foreground">Defect Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
