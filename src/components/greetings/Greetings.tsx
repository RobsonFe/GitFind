function Greetings() {
  return (
    <div
      className="card mb-3 mt-5"
      style={{ maxWidth: "600px", backgroundColor: "#0e1129" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://i.imgur.com/thWBSJX.jpg"
            className="img-fluid rounded-start"
            alt="Autor-Robson"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title h5">
              <strong> Robson Ferreira</strong>
            </h5>
            <p className="card-text">
              Sou um Desenvolvedor de Sistemas com experiência em Java e
              JavaScript. A minha jornada é marcada pela busca constante por
              conhecimento e aprimoramento contínuo das minhas habilidades.
              Iniciei na programação com Java, estudando suas bibliotecas e
              frameworks, o que me levou a aprender HTML, CSS e JavaScript para
              desenvolver ecossistemas completos.
            </p>
            <p className="card-text">
              <small
                className="text-body-secondary"
                style={{ color: "#f8f9fa" }}
              >
                <strong>
                  Java | Node | React | NextJS | Angular | NestJS | Spring Boot.
                </strong>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greetings;
