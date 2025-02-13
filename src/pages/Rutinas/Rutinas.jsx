import React, { useState } from "react";
import { BodyPartsData } from "../../components/data/Databody";
import BodyParts from "../../components/BodyPartsData/BodyParts"; // Importa el componente correcto

const Rutinas = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  return (
    <div>
      <h1>Crear Rutina</h1>
      <BodyParts
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
      {selectedBodyPart && <h3>Parte seleccionada: {selectedBodyPart}</h3>}
    </div>
  );
};

export default Rutinas;
