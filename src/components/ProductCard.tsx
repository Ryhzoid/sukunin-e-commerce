import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { formatPrice, createSingleProductMessage, openWhatsApp } from '@/lib/whatsapp';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleOrderNow = () => {
    const message = createSingleProductMessage(product.name, 1, product.price);
    openWhatsApp(message);
  };

  return (
    <div className="product-card group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        <p className="text-xl font-bold text-primary mb-4">{formatPrice(product.price)}</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => addToCart(product)}
            className="btn-secondary w-full text-sm py-2.5"
          >
            <ShoppingCart className="w-4 h-4" />
            Tambah ke Keranjang
          </button>
          <button
            onClick={handleOrderNow}
            className="btn-whatsapp w-full text-sm py-2.5"
          >
            <MessageCircle className="w-4 h-4" />
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
