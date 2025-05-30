export const formatPrice = (price: number): string => {
  // Format price in Thai Baht
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    maximumFractionDigits: 0
  }).format(price);
};

export const formatArea = (size: number): string => {
  return `${size} ตร.ม.`;
};