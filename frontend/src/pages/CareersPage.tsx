import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import { toast } from "sonner";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeLink: "",
    position: "",
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.position) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      toast.success(
        "Application submitted successfully! We will review your application and contact you soon.",
      );

      setFormData({
        name: "",
        email: "",
        resumeLink: "",
        position: "",
        coverLetter: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Join Our Team
            </h1>
            <p className="font-mono text-xl text-muted-foreground">
              Shape the future of unmanned aerial systems with the industry's
              leading innovators
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why WingWave Technologies?
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              Be part of a team that's redefining aerospace technology
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20  ">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono">Cutting-Edge Work</CardTitle>
                <CardDescription>
                  Work on advanced technologies that push the boundaries of
                  what's possible
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20  ">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono">
                  Collaborative Culture
                </CardTitle>
                <CardDescription>
                  Join a team of passionate professionals dedicated to
                  excellence
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20  ">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono">Career Growth</CardTitle>
                <CardDescription>
                  Continuous learning opportunities and clear paths for
                  advancement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20  ">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-mono">
                  Comprehensive Benefits
                </CardTitle>
                <CardDescription>
                  Competitive compensation and comprehensive benefits package
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Open Positions
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              Explore opportunities across engineering, research, and operations
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="font-mono text-2xl">
                      Senior Aerospace Engineer
                    </CardTitle>
                    <CardDescription>
                      Engineering · Full-time · On-site
                    </CardDescription>
                  </div>
                  <Badge>Open</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Lead the design and development of next-generation UAS
                  platforms. Requires extensive experience in aerospace
                  engineering and autonomous systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Aerospace</Badge>
                  <Badge variant="secondary">CAD/CAM</Badge>
                  <Badge variant="secondary">Flight Dynamics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="font-mono text-2xl">
                      AI/ML Research Scientist
                    </CardTitle>
                    <CardDescription>
                      Research & Development · Full-time · Hybrid
                    </CardDescription>
                  </div>
                  <Badge>Open</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop advanced machine learning algorithms for autonomous
                  navigation and target recognition. PhD in Computer Science or
                  related field preferred.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="font-mono text-2xl">
                      Embedded Systems Engineer
                    </CardTitle>
                    <CardDescription>
                      Engineering · Full-time · On-site
                    </CardDescription>
                  </div>
                  <Badge>Open</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Design and implement real-time embedded systems for flight
                  control and sensor integration. Experience with
                  safety-critical systems required.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C/C++</Badge>
                  <Badge variant="secondary">RTOS</Badge>
                  <Badge variant="secondary">Hardware Integration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="font-mono text-2xl">
                      Flight Test Engineer
                    </CardTitle>
                    <CardDescription>
                      Operations · Full-time · On-site
                    </CardDescription>
                  </div>
                  <Badge>Open</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Plan and execute flight test programs to validate system
                  performance. Remote pilot certification and test engineering
                  experience required.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Flight Testing</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">Remote Pilot</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="font-mono text-2xl">
                      Cybersecurity Specialist
                    </CardTitle>
                    <CardDescription>
                      Security · Full-time · Hybrid
                    </CardDescription>
                  </div>
                  <Badge>Open</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ensure the security of our systems against cyber threats.
                  Experience with defense systems and security clearance
                  required.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cybersecurity</Badge>
                  <Badge variant="secondary">Penetration Testing</Badge>
                  <Badge variant="secondary">ITAR</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Apply Now
              </h2>
              <p className="font-mono text-lg text-muted-foreground">
                Submit your application and join our team of innovators
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For *</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="e.g., Senior Aerospace Engineer"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resumeLink">Resume/CV Link</Label>
                    <Input
                      id="resumeLink"
                      name="resumeLink"
                      type="url"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      placeholder="https://example.com/resume.pdf"
                    />
                    <p className="text-xs text-muted-foreground">
                      Provide a link to your resume (Google Drive, Dropbox,
                      etc.)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in joining Wingwave Technologies..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full transition-transform active:scale-[0.95]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
