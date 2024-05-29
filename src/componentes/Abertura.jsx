import "../App.css";
function Abertura() {
  return (
    <div>
      <p className="pag_um">
        Doces Bárbaros foi um grupo formado pelos cantores brasileiros{" "}
        <a href="/#/artista/maria bethania">Maria Bethânia</a>,
        <a href="/#/artista/gal costa"> Gal Costa</a>,
        <a href="/#/artista/gilberto gil"> Gilberto Gil</a> e
        <a href="/#/artista/caetano veloso">Caetano Veloso</a>, em 1976, com a
        finalidade de realizar uma turnê pelo Brasil para comemorar os dez anos
        de sucesso em suas carreiras individuais
      </p>
      <p className="pag_um">
        Em 2002,<a href="/#/artista/caetano veloso"> Caetano Veloso</a>,
        <a href="/#/artista/gal costa"> Gal Costa </a>,
        <a href="/#/artista/gilberto gil"> Gilberto Gil</a> e{" "}
        <a href="/#/artista/maria bethania"> Maria Bethânia</a> se reuniram,
        após 26 anos, como “Doces Bárbaros” para dois shows ao ar livre, em São
        Paulo, no Parque Ibirapuera, e no Rio de Janeiro, na Praia de
        Copacabana. A reunião foi registrada em um documentário dirigido e
        produzido por Andrucha Waddington, lançado em 2004, chamado "Outros
        Doces Bárbaros"
      </p>
      <figure>
        <img
          src="https://discografia.discosdobrasil.com.br/storage/capas/DI00711.jpg"
          alt=""
        />
        <figcaption> Album de 1976 </figcaption>
      </figure>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KHmbtpuWIbo?si=L3KXwGzQ1F595DLS"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Abertura;
