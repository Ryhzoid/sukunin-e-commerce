import { MessageCircle, Mail, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Produk', href: '#products' },
  { name: 'Tentang', href: '#about' },
  { name: 'Order', href: '#order' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="SUKUN.IN Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-lg mb-4">
              Snack Lokal, Standar Global
            </p>
            <p className="text-background/60 text-sm max-w-md">
              Keripik sukun premium dengan teknologi vacuum frying untuk camilan yang lebih sehat dan lezat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6282284842347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  +62 822-8484-2347
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@sukun.in"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  admin@sukun.in
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sukun.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @sukun.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} SUKUN.IN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
