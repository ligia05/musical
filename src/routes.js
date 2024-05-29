import { createHashRouter, RouterProvider } from "react-router-dom";
import Abertura from "./componentes/Abertura";
import Artista from "./componentes/Artista";
import Discografia from "./componentes/Discografia";
import Letras from "./componentes/Letras";

function Routers() {
  const listaDeRotas = createHashRouter([
    { path: "/", element: <Abertura></Abertura> },
    { path: "/artista/:nome", element: <Artista></Artista> },
    { path: "/discografia/:album", element: <Discografia></Discografia> },
    { path: "/letras/:musica", element: <Letras></Letras> },
  ]);
  return <RouterProvider router={listaDeRotas}></RouterProvider>;
}
export default Routers;
