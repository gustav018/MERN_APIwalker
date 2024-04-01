
import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from './componentes/Formulario';
import Tarjeta from './componentes/Tarjeta';
import DetalleTarjeta from './componentes/DetalleTarjeta';

function App() {





  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Formulario />} />
        <Route path="/:id/" element={<DetalleTarjeta />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
