import { Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import lightWingwaveLogo from "@/assets/wingwave_logo.jpg";
import darkWingwaveLogo from "@/assets/wingwave_logo_dark.jpg";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    (setMounted(true), []);
  });

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {mounted && (
                <img
                  src={
                    resolvedTheme === "dark"
                      ? darkWingwaveLogo
                      : lightWingwaveLogo
                  }
                  alt="Wingwave Technologies"
                  className="h-11 w-11"
                />
              )}
              <span className="font-mono text-2xl font-bold">WINGWAVE</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Advanced unmanned aerial systems for military intelligence,
              surveillance, and tactical operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-lg font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/products"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Products
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/technology"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Technology
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/careers"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-mono text-lg font-semibold uppercase tracking-wider">
              Solutions
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/applications"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Applications
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/rd"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Research & Development
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/quality"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Quality Assurance
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-mono text-lg font-semibold uppercase tracking-wider">
              Get in Touch
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Us
              </Link>
              <p className="text-sm font-mono font-bold text-muted-foreground">
                Secure communications available for authorized personnel.
              </p>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 text-center text-sm text-muted-foreground md:flex-row md:space-y-0">
          <p>© 2025 WingWave Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
