export function getCurrentLanguage(i18n) {
  const raw = i18n.resolvedLanguage || i18n.language || 'es';
  return raw.split('-')[0];
}
