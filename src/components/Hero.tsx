import { ArrowRight, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Hero() {
  const handleScrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    openWhatsApp('Halo Admin SUKUN.IN! Saya tertarik dengan produk keripik sukun premium. Bisa info lebih lanjut?');
  };

  return (
    <section id="home" className="gradient-hero pt-20 md:pt-24">
      <div className="section-container py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              🌿 Camilan Sehat Premium
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Keripik Sukun Premium,{' '}
              <span className="gradient-text">Renyah Sehat</span> dengan Teknologi Vacuum Frying
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Snack lokal dengan teknologi modern untuk gaya hidup sehat Anda. Lebih rendah minyak, lebih renyah, rasa alami terjaga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleScrollToProducts}
                className="btn-primary text-lg px-8 py-4"
              >
                Lihat Produk
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
              <img
                src={heroImage}
                alt="Keripik Sukun Premium SUKUN.IN"
                className="w-full h-auto rounded-3xl shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
