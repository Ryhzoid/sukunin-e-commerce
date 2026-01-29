import { MessageCircle, ArrowRight, Clock, Headphones } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function OrderCTA() {
  const handleScrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    openWhatsApp('Halo Admin SUKUN.IN! Saya ingin memesan keripik sukun premium. Bisa info lebih lanjut?');
  };

  return (
    <section id="order" className="py-16 md:py-24 gradient-bg">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            🛒 Siap Order?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Siap Mencoba Camilan Sehat Kami?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nikmati kelezatan keripik sukun premium langsung ke rumah Anda. Pesan sekarang dan rasakan perbedaannya!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleWhatsAppClick}
              className="btn-whatsapp text-lg px-10 py-5"
            >
              <MessageCircle className="w-6 h-6" />
              Order via WhatsApp
            </button>
            <button
              onClick={handleScrollToProducts}
              className="btn-secondary text-lg px-10 py-5"
            >
              Lihat Semua Produk
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Pelayanan 08.00 - 20.00 WIB</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-primary" />
              <span>Fast response & gratis konsultasi</span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Langsung dengan Admin
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
