import { Target, Eye } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl -z-10 transform scale-105"></div>
            <img
              src={aboutImage}
              alt="Petani sukun dan pohon sukun"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              🌱 Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mengangkat Kekayaan Lokal Indonesia
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Buah sukun berlimpah di Indonesia namun sering kurang dimanfaatkan. 
              <span className="text-foreground font-semibold"> SUKUN.IN </span>
              mengubahnya menjadi camilan premium dengan nilai tambah tinggi untuk petani melalui teknologi vacuum frying modern.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Misi</h3>
                  <p className="text-muted-foreground text-sm">
                    Mengangkat sumber daya lokal Indonesia menjadi produk berkualitas global
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Visi</h3>
                  <p className="text-muted-foreground text-sm">
                    Snack lokal berkualitas global yang mendukung ekonomi petani
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
