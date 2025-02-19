import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/listaContactos/list";
import Create from "./components/crearContacto/create";
import Home from "./views/home";
import Layout from "./views/layout";
import Edit from "./components/editarContactos/edit";
import Cerrar from "./views/cerrar";
import Buscar from "./components/buscarContacto/buscar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<List />} />
          <Route path="/crear" element={<Create />} />
          <Route path="/editar" element={<Edit />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/cerrar" element={<Cerrar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
