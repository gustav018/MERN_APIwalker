import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './componentes/Home';
import Numero from './componentes/Numero';
import Hello from './componentes/Hello';


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:id" element={<Numero />} />
          <Route path='/:texto/:textoColor/:textoFondo' element={<Hello />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
