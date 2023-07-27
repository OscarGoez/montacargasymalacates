import React from 'react';
import 'bulma/css/bulma.min.css';
import { FaPhone, FaEnvelope, FaMapMarker, FaWhatsapp } from 'react-icons/fa';
import './contact.css'


const Contact = () => {
  return (
    <div id="contact" className="container mb-2">
      <section className="hero is-warning">
        <div className="container">
          <h2 className="title has-text-centered is-size-3">CONTACTO</h2>
          <div className="columns is-multiline">
            <div className="column is-two-thirds-desktop">
              <div className="content">
                <h4 className="subtitle is-size-4">Hector Hernan Orozco Garcia</h4>
                <p className="is-size-5">
                  <span className="icon">
                    <FaMapMarker />
                  </span>
                  Dirección: Calle 101 # 45 A 44 Apto 301, Medellín, Antioquia
                </p>
                <p className="is-size-5">
                  <span className="icon">
                    <FaPhone />
                  </span>
                  Teléfono: 321 7639431
                </p>
                <p className="is-size-5">
                  <span className="icon">
                    <FaEnvelope />
                  </span>
                  Correo electrónico: hector6103@hotmail.com
                </p>
                <p className="is-size-5">
                  <span className="icon">
                    <FaWhatsapp />
                  </span>
                  WhatsApp: +57 321 7639431
                </p>
              </div>
            </div>

            <div className="column is-one-third-desktop">
              <div className="map-container">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.2076278169336!2d-75.5535616304677!3d6.291711232633505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f350eb50425%3A0x774d37243d778c8d!2sCl.%20101%20%2345a-44%2C%20Villa%20Del%20Socorro%2C%20Medell%C3%ADn%2C%20Antioquia!5e1!3m2!1ses!2sco!4v1688162813373!5m2!1ses!2sco"                   
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;