import React from 'react';
import '../stylesheets/jobCard.css';

function Jobs(props) {
  return (
    <div className="job-card">
        <div className='info'>
          <img className="image-job"
            src={require(`../images/${props.imageJob}`)}
            alt="Company logo"
          />
          <div className="container-info">
            <div className="tittle">
              <h1 className="tittle-vacante">
                {props.tittleVacante}
              </h1>
              <ul className="skills">
                {props.skills.map((skill, index) => (
                  <li key={index}><a href="#">{skill}</a></li>
                ))}
              </ul>
            </div>
            <div className="datos-empleo">
              <p className="icon-card empresa"><img src={require(`../images/empresa.png`)} alt="Empresa" />{props.empresa}</p>
              <p className="icon-card lugar"><img src={require(`../images/gps.png`)} alt="Lugar" />{props.lugar}</p>
              <p className="icon-card salario"><img src={require(`../images/salario.png`)} alt="Salario" />{props.salario}</p>
              <p className="icon-card vacantes"><img src={require(`../images/vacante.png`)} alt="Vacantes" />{props.vacantes} Vacantes</p>
              <p className="icon-card publicacion"><img src={require(`../images/fecha.png`)} alt="Publicación" />Publicado hace {props.publicacion} días</p>
            </div>
            
          </div>
        </div>
        <div className='descripcion'>
              <h3 className='tittle'>Descripcion</h3>
              <p className='parrafo-descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iste ratione dolor nisi odit, eius, maiores aperiam, reprehenderit vero commodi cupiditate alias? Vero modi eaque, odit nobis iste dolore magnam.</p>
        </div>
      </div>
  );
}

export default Jobs;
