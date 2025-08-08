import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Emails.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Emails() {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k0j6fqs',
        'template_004ws0f',
        e.target,
        'apSRHYZU7LZihPeib'
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully!',
          text: 'Your message has been sent.',
          confirmButtonText: 'ok',
        });
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to send message to admin. Please try again later.',
          confirmButtonText: 'ok',
        });
      });
  };

  return (
    <div className="emailSection">
      {/* Left Side */}
      <div className="leftSection" data-aos="fade-right">
        <div className="leftContent" data-aos="fade-down">
          <h1>{t('contacts.title')}</h1>
          <p>{t('contacts.description')}</p>
        </div>
        <hr data-aos="fade-in" />

        <div className="links" data-aos="fade-up" data-aos-delay="100">
          <FaLocationDot className="icons" />
          <div className="tobic">
            <h2>{t('contacts.locationTitle')}</h2>
            <p>{t('contacts.address')}</p>
          </div>
        </div>

        <div className="links" data-aos="fade-up" data-aos-delay="200">
          <MdEmail className="icons" />
          <div className="tobic">
            <h2>{t('contacts.emailTitle')}</h2>
            <p>{t('contacts.email')}</p>
          </div>
        </div>

        <div className="links" data-aos="fade-up" data-aos-delay="300">
          <IoMdCall className="icons" />
          <div className="tobic">
            <h2>{t('contacts.phoneTitle')}</h2>
            <p>{t('contacts.phone')}</p>
          </div>
        </div>

        <hr data-aos="fade-in" />
        <h2 data-aos="fade-right">{t('contacts.followUs')}</h2>
        <div className="logos" data-aos="zoom-in">
          <a
            href="https://www.facebook.com/share/196tuSbvvV/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icons" />
          </a>{' '}
          <a
            href="https://www.linkedin.com/company/makpool-solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icons" />
          </a>{' '}
          <a
            href="https://wa.me/01202275620"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icons" />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="rightSection" data-aos="fade-left">
        <div className="rightContent">
          <h1 data-aos="fade-down">{t('contacts.formTitle')}</h1>
          <p data-aos="fade-up">{t('contacts.formDescription')}</p>

          <form className="inputs" onSubmit={sendEmail}>
            <div className="inputRow" data-aos="fade-up" data-aos-delay="100">
              <input
                type="text"
                name="from_name"
                placeholder={t('contacts.name')}
                required
              />
              <input
                type="text"
                name="company"
                placeholder={t('contacts.company')}
              />
            </div>

            <div className="inputRow" data-aos="fade-up" data-aos-delay="200">
              <input
                type="tel"
                name="phone"
                placeholder={t('contacts.phone')}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t('contacts.email')}
                required
              />
            </div>

            <div className="inputFull" data-aos="fade-up" data-aos-delay="300">
              <input
                type="text"
                name="subject"
                placeholder={t('contacts.subject')}
                required
              />
            </div>

            <div className="inputFull" data-aos="fade-up" data-aos-delay="400">
              <textarea
                name="message"
                rows="5"
                placeholder={t('contacts.message')}
                required
              ></textarea>
            </div>

            <button type="submit" data-aos="fade-up" data-aos-delay="500">
              {t('contacts.send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Emails;
