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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !formData.inquiryType
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://wingwave-website-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      toast.success(
        "Message sent successfully! We will get back to you soon.",
        {
          className: "bg-green-600 text-white border border-green-600",
        },
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "",
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }));
  };

  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="font-mono text-xl text-muted-foreground">
              Get in touch with our team to discuss your operational
              requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-mono text-2xl font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team is ready to discuss how Wingwave Technologies can
                  support your mission requirements.
                </p>
              </div>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-lg">Email</CardTitle>
                  <CardDescription>tech.wingwave@gmail.com</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-lg">Phone</CardTitle>
                  <CardDescription>(+91) - 9953634346</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group transition-transform hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-mono text-lg">
                    Headquarters
                  </CardTitle>
                  <CardDescription>
                    New Delhi
                    <br />
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="rounded-lg border border-border/40 bg-muted/30 p-6">
                <h3 className="font-mono text-sm font-semibold mb-2">
                  Security Notice
                </h3>
                <p className="text-sm text-muted-foreground">
                  For classified inquiries, please use secure communication
                  channels. Contact your designated liaison officer for access
                  credentials.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
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

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your organization"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger id="inquiryType">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="sales">
                              Sales & Procurement
                            </SelectItem>
                            <SelectItem value="technical">
                              Technical Support
                            </SelectItem>
                            <SelectItem value="partnership">
                              Partnership Opportunities
                            </SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={8}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full transition-transform active:scale-[0.98]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
              Business Hours
            </h2>
            <div className="grid gap-4 md:grid-cols-2 text-left">
              <Card className="group transition-transform hover:shadow-xl hover:border-primary/50 hover:scale-105 cursor-text text-center">
                <CardHeader>
                  <CardTitle className="font-mono text-lg">
                    General Inquiries
                  </CardTitle>
                  <CardDescription>
                    Monday - Friday: 8:00 AM - 6:00 PM EST
                    <br />
                    Saturday - Sunday: Closed
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="group transition-transform hover:shadow-xl hover:border-primary/50 hover:scale-105 cursor-text text-center">
                <CardHeader>
                  <CardTitle className="font-mono text-lg">
                    Emergency Support
                  </CardTitle>
                  <CardDescription>
                    24/7 Support Available
                    <br />
                    For authorized personnel only
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
