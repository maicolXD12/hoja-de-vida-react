import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://scontent.fmzl1-1.fna.fbcdn.net/v/t1.6435-9/92812398_169629187835186_5468497294938603520_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGooBKeJmT8YWH1R72Qe30_5-8vd8UEioTn7y93xQSKhKfWbfCC4VNeu01tlswoFSSnozHct86AZLkvfo-oagqz&_nc_ohc=L_kbGWETw2sAX8J3Msx&_nc_ht=scontent.fmzl1-1.fna&oh=00_AT9RNgIpnSJqU-_q9EVx3tHX7FxC-mqLJeVgU2LN_dwNHg&oe=62B80C37',
      name: 'Michael David Herrada Castañeda',
      profession: 'Tecnico en sistemas, Tecnologo en sistemas, Ingenieria en sistemas y telecomunicaciones,',
      bio: '❤ Backend developer, database administration',
      address: 'Colombia, Manizales Caldas.',
      social: [
        {name: 'facebook', url: 'https://www.facebook.com/maicol.herrada.73'},
        {name: 'twitter', url: 'https://twitter.com/home'},
        {name: 'github', url: 'https://github.com/maicolXD12'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/michael-david-herrada-casta%C3%B1eda-474bb8216/'}
      ],
      experience: [
        {jobTitle: 'Tecnico en sistemas', company: 'Sumatec s.a', startDate: 'julio 2014', endDate: 'Enero 2015', jobDescription: 'Tecnico en sistemas estoy en la capacidad de analizar, diseñar, desarrollar, implementar y auditar soluciones informáticas de diversas organizaciones en el área de soporte técnico, mantenimiento preventivo, predictivo y correctivo de equipos de cómputo.'},
        {jobTitle: 'Tecnologo en sistemas', company: 'clinica psiquiatrica san juan de dios', startDate: 'Febrero 2019', endDate: 'octubre 2019', jobDescription: 'Tecnologo profesional en sistemas en administración de redes computacionales, gestión de sistemas operativos y bases de datos. '},
      ],
      education: [
        {degree: 'Tecnico en sistemas', institution: 'SENA', startDate: 'julio 2014', endDate: 'Enero 2015', description: ''},
        {degree: 'tecnologo en sistemas', institution: 'SENA', startDate: 'febrero 2019', endDate: 'octubre 2019', description: ''},
        {degree: 'Ingenieria de sistemas', institution: 'Universidad de Manizales', startDate: 'enero 2020', endDate: 'Actualemente', description: ''},
      ],
      certificate: [
        {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
