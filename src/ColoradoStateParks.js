import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees,wildlife,elevation } from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  wildlife();
  elevation()

  return (
  <div>
     <h1>Colorado State Parks!</h1>
     <MesaVerde />
  </div>
 

  );
}
