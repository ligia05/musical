import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Letras() {
  const { musica } = useParams();
  const [letraMusica, setLetraMusica] = useState("");
  const [urlPrevia, setUrlPrevia] = useState("");
  const [artista, setArtista] = useState("");
  const [nomeMusica, setNomeMusica] = useState("");
  useEffect(() => {
    async function letraApi() {
      try {
        const mostraMusica = await fetch("/track/" + musica);
        const musicaJson = await mostraMusica.json();
        setUrlPrevia(musicaJson.preview);
        setNomeMusica(musicaJson.title);
        setArtista(musicaJson.artist.name);
        const artistaInterno = musicaJson.artist.name;
        const musicaInterno = musicaJson.title;
        const guardaLetra = await fetch(
          `https://api.vagalume.com.br/search.php?art=${artistaInterno}&mus=${musicaInterno}&apikey=8e37bc2c3860c947449c06fb74ee8c9e`
        );
        const guardaResposta = await guardaLetra.json();

        setLetraMusica(guardaResposta?.mus[0]?.text || "");
      } catch (error) {
        alert("não funciona assim");
      }
    }
    letraApi();
  }, [musica]);

  return (
    <div>
      <p>{nomeMusica}</p>
      {urlPrevia && (
        <video controls>
          <source src={urlPrevia} type="audio/mpeg" />
        </video>
      )}
      <p>{letraMusica}</p>
    </div>
  );
}

export default Letras;
