import React from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  //ESTADO
  const [elementosComprados, setElementosComprados] = React.useState(0);

  //MÉTODOS
  const aumentarCantidad = () => {
    setElementosComprados(elementosComprados + 1);
  };
  //RETURN
  return (
    <div className="App">
      <Cabecera elementosComprados={elementosComprados} />
      <Listado aumentarCantidad={aumentarCantidad} />
    </div>
  );
}

export default App;
