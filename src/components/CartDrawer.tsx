import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, createCartMessage, openWhatsApp } from '@/lib/whatsapp';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const message = createCartMessage(items);
    openWhatsApp(message);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Keranjang Belanja</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Tutup keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingCartEmpty />
              <p className="mt-4 text-lg">Keranjang masih kosong</p>
              <p className="text-sm">Yuk, tambahkan produk favorit kamu!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-muted/50 rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                    <p className="text-primary font-bold">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-background rounded-lg transition-colors"
                        aria-label="Kurangi jumlah"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-background rounded-lg transition-colors"
                        aria-label="Tambah jumlah"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 ml-auto text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        aria-label="Hapus item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="text-2xl font-bold text-foreground">{formatPrice(getTotalPrice())}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn-whatsapp w-full text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2 text-muted-foreground hover:text-destructive text-sm transition-colors"
            >
              Kosongkan Keranjang
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function ShoppingCartEmpty() {
  return (
    <svg
      className="w-24 h-24 text-muted-foreground/50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}
