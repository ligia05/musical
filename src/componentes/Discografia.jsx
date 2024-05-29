import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Discografia() {
  const { album } = useParams();
  const [musicaNosAlbuns, setmusicaNosAlbuns] = useState([]);
  useEffect(() => {
    async function musicaApi() {
      try {
        const mostraMusica = await fetch("/album/" + album);
        const musicaJson = await mostraMusica.json();
        setmusicaNosAlbuns(musicaJson.tracks.data);
        console.log(musicaJson);
      } catch (error) {
        alert("não");
      }
    }
    musicaApi();
  }, [album]);

  return (
    <div>
      {musicaNosAlbuns.map((musica) => {
        return (
          <p key={musica.id}>
            <a href={"/#/letras/" + musica.id}>{musica.title}</a>
          </p>
        );
      })}
    </div>
  );
}

export default Discografia;
