import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Artista() {
  const { nome } = useParams();

  const [biografiaArtista, setBiografiaArtista] = useState([]);
  useEffect(() => {
    const todosArtistas = [
      "Caetano Veloso",
      "Gal Costa",
      "Gilberto Gil",
      "Maria Bethania",
      "Doces Bárbaros",
    ];
    const pesquisaIndex = todosArtistas.findIndex((artista) => {
      return nome.toLowerCase() === artista.toLowerCase();
    });
    if (pesquisaIndex < 0) {
      return;
    }

    async function artistaApi() {
      try {
        const chamaApi = await fetch("/search/album?strict=on&q=" + nome);
        const chamaJson = await chamaApi.json();
        console.log(chamaJson);
        setBiografiaArtista(chamaJson.data);
      } catch (error) {
        alert("tente outra vez");
      }
    }
    artistaApi();
  }, [nome]);

  return (
    <div>
      {biografiaArtista.map((album) => {
        return (
          <p key={album.id}>
            <a href={"/#/discografia/" + album.id}>{album.title}</a>
          </p>
        );
      })}
    </div>
  );
}

export default Artista;
