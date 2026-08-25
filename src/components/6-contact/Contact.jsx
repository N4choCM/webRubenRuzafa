import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiCheck } from 'react-icons/hi';
import { buildWhatsAppUrl, CONTACT_EMAIL, SOCIAL_LINKS, WHATSAPP_PHONE } from '../../constants/contact';
import SectionHeader from '../core/SectionHeader';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_PHONE, t('contact.whatsappMessage'));
  const points = t('contact.points', { returnObjects: true });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      setAlert({ show: true, type: 'error', message: t('contact.alerts.validation') });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setAlert({ show: true, type: 'error', message: t('contact.alerts.error') });
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setAlert({ show: true, type: 'success', message: t('contact.alerts.success') });
        form.current.reset();
        setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
      },
      () => {
        setAlert({ show: true, type: 'error', message: t('contact.alerts.error') });
        setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
      }
    );
  };

  return (
    <section id="contact" className="anchor contact-section">
      <div className="container">
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        {alert.show && (
          <div className={`contact-alert contact-alert--${alert.type}`} role="alert">
            {alert.message}
            <button type="button" className="contact-alert__close" onClick={() => setAlert({ show: false, type: '', message: '' })} aria-label="Close">×</button>
          </div>
        )}

        <div className="contact-panel">
          <aside className="contact-panel__info">
            <p className="contact-panel__lead">{t('contact.lead')}</p>

            <ul className="contact-panel__points">
              {points.map((point, i) => (
                <li key={i}>
                  <HiCheck aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-whatsapp">
              <FaWhatsapp className="contact-whatsapp__icon" />
              <span>{t('contact.whatsapp')}</span>
            </a>

            <div className="contact-social">
              <p className="contact-social__label">{t('contact.social')}</p>
              <div className="contact-social__links">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
              </div>
            </div>
          </aside>

          <div className="contact-panel__form">
            <form className="contact-form" ref={form} onSubmit={sendEmail} noValidate>
              <input type="hidden" name="to_email" value={CONTACT_EMAIL} />
              <div className="contact-form__row">
                <div className="contact-field">
                  <label htmlFor="contact-name">{t('contact.form.name')}</label>
                  <input id="contact-name" type="text" required name="name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">{t('contact.form.email')}</label>
                  <input id="contact-email" type="email" required name="email" />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">{t('contact.form.message')}</label>
                <textarea id="contact-message" rows="4" required name="message" />
              </div>
              <button className="btn btn-brand contact-submit" type="submit">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
