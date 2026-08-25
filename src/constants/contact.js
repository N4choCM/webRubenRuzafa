export const WHATSAPP_PHONE = '34629716415';

export const CONTACT_EMAIL = 'rubenruzafa@gmail.com';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/ruben.ruzafa',
  instagram: 'https://www.instagram.com/rubenruzafa/',
  twitter: 'https://twitter.com/rubenruzafa?lang=es',
};

export function buildWhatsAppUrl(phone, message) {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
