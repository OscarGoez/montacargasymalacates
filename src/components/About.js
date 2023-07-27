import React from 'react';
import logo from '../images/LogoHHO.jpg';
import './about.css';

const About = () => {
  return (
    <div className="container mb-2 mt-2">
      <section className="heros is-primary">
        <div className="hero-body">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-12-mobile is-4-desktop has-text-centered">
              <figure className="image is-128x128">
                <img src={logo} alt="Logo" id="about-logo" />
              </figure>
            </div>
            <div className="column is-12-mobile is-8-desktop">
              <h1 className="title has-text-centered is-2  has-text-black">
                HHO MONTACARGAS Y MALACATES
              </h1>
              <div className="content has-text-black">
                <p>
                  En HHO, somos un fabricante con 20 años de experiencia en la industria. Nos enorgullece ofrecer productos de alta calidad que superan las expectativas de nuestros clientes. Desde nuestra fundación, nos hemos dedicado a proporcionar soluciones innovadoras y confiables en el campo de montacargas, malacates y ascensores personalizados.
                </p>
                <br />
                <p>
                  Valoramos la colaboración y las relaciones sólidas con nuestros clientes. Trabajamos estrechamente con ellos para comprender sus necesidades específicas y proporcionar soluciones personalizadas que impulsen su éxito. Nuestro equipo altamente capacitado y apasionado se dedica a brindar un servicio excepcional y mantener los más altos estándares en todas nuestras operaciones.
                </p>
                <br />
                <p>
                  En HHO, nos enfocamos en la innovación constante y la mejora continua. Mantenemos un enfoque en la investigación y el desarrollo, siempre buscando nuevas formas de mejorar nuestros productos y procesos. Nuestro compromiso con la calidad nos ha permitido establecer una reputación sólida en la industria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
