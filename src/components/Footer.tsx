import { Shield, Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">ClearCover</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Making insurance transparent, fair, and easy to understand.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-secondary" />
              <span>Built with care for you</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Insurance Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/compare" className="hover:text-foreground transition-colors">Health Insurance</Link></li>
              <li><Link to="/compare" className="hover:text-foreground transition-colors">Car Insurance</Link></li>
              <li><Link to="/compare" className="hover:text-foreground transition-colors">Life Insurance</Link></li>
              <li><Link to="/compare" className="hover:text-foreground transition-colors">Home Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">How It Works</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Insurance Guide</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@clearcover.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2026 ClearCover. All rights reserved. Your trusted insurance comparison platform.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
