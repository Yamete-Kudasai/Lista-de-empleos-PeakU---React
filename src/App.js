import logo from './logo.svg';
import './App.css';
import Jobs from './componentes/Jobs';
import empleos from './componentes/job'

function App() {
  return (
    <div className="App">
      <div className='container'>
        {empleos.map((trabajo, index) => (
        <Jobs
          key={index}
          tittleVacante={trabajo.tittleVacante}
          imageJob={trabajo.imageJob}
          skills={trabajo.skill}
          empresa={trabajo.empresa}
          lugar={trabajo.lugar}
          salario={trabajo.salario}
          vacantes={trabajo.vacantes}
          publicacion={trabajo.publicacion}
        />
      ))}
    </div>
      </div>
  );
}

export default App;
