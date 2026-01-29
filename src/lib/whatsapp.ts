import { CartItem } from '@/contexts/CartContext';

const WHATSAPP_NUMBER = '6282284842347';

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function createSingleProductMessage(productName: string, quantity: number, price: number): string {
  const total = price * quantity;
  const message = `Halo Admin SUKUN.IN!
Saya mau pesan:

${productName} - ${quantity} pcs
Harga: ${formatPrice(price)}

Total: ${formatPrice(total)}
Mohon info ketersediaan dan ongkir ke [kota saya]. Terima kasih!`;
  
  return message;
}

export function createCartMessage(items: CartItem[]): string {
  const itemLines = items
    .map((item) => `${item.name} - ${item.quantity} pcs = ${formatPrice(item.price * item.quantity)}`)
    .join('\n');
  
  const grandTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const message = `Halo Admin SUKUN.IN!
Saya mau pesan:

${itemLines}

Total Pesanan: ${formatPrice(grandTotal)}
Mohon info ketersediaan dan ongkir ke [kota saya]. Terima kasih!`;
  
  return message;
}

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(getWhatsAppLink(message), '_blank');
}
