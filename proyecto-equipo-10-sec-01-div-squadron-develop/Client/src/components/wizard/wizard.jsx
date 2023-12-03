import { useState } from "react";
import { Button } from "../button/Button";
import PageDisplay from "../displayPage/Displaypage";
import check from "../../assets/icons/icon-check-wizard.png";
import { Validation } from "../../assets/Validation/validaciones/Validation";
function Wizard({
  steps,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  Paginas,
  PAGES1,
  PAGES2,
  PAGES3,
  PAGES4,
  PAGES5,
  PAGES6,
  PAGES7,
  title,
  photo,
  descripcion,
  des1,
  des2,
  des3,
  des4,
  des5,
  des6,
  des7,
  backgroundImage,
  lugarOpcion,
  opcion,
}) {
  const [complete, setComplete] = useState(false);
  const [pages, setPages] = useState(1);
  const { handleSubmit } = Validation();

  const handlePageChange = (newPage) => {
    setPages(newPage);
    setComplete(newPage === steps.length);
  };
  return (
    <div className="Container-wizard">
      {/* FORM POR PASOS */}
      <div className="content-wizard">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`item-wizard ${pages === i + 1 && "active"} ${
              (i + 1 < pages || complete) && "complete"
            }`}
          >
            <div className="item">
              {i + 1 < pages || complete ? (
                <img src={check} className="icon-check-wizard" />
              ) : <img src={img1} className="icon-wizard" /> && i === 1 ? (
                <img src={img1} className="icon-wizard" />
              ) : <img src={img2} className="icon-wizard" /> && i === 2 ? (
                <img src={img3} className="icon-wizard" />
              ) : <img src={img2} className="icon-wizard" /> && i === 3 ? (
                <img src={img4} className="icon-wizard" />
              ) : <img src={img2} className="icon-wizard" /> && i === 4 ? (
                <img src={img5} className="icon-wizard" />
              ) : <img src={img2} className="icon-wizard" /> && i === 5 ? (
                <img src={img6} className="icon-wizard" />
              ) : (
                <img src={img2} className="icon-wizard" />
              )}
            </div>
            <p className="text-wizard">{step}</p>
          </div>
        ))}
      </div>

      {/* FORMULARIO  */}
      {/* <form className="form-crear-cuenta" onSubmit={handleSubmit}> */}

      <form className="form-crear-cuenta" onSubmit={handleSubmit} method="post">
        <div className="container-form-general">
          <div
            className="container-text-Description"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container-title-photo-form">
              <img src={photo} className="icon-account" alt="Crear Cuenta" />
              <h1 className="title-form">{title}</h1>
              <div className="text-paso-y-decripcion">
                <h1 className="text-title-form">PASO {pages}</h1>

                <p className="text-p-form ">
                  {(pages === 1 ? des1 : descripcion) ||
                    (pages === 2 ? des2 : descripcion) ||
                    (pages === 3 ? des3 : descripcion) ||
                    (pages === 4 ? des4 : descripcion) ||
                    (pages === 5 ? des5 : descripcion) ||
                    (pages === 6 ? des6 : descripcion) ||
                    (pages === 7 ? des7 : descripcion)}
                </p>
              </div>
            </div>
          </div>
          <div className="form">
            {/* Renderiza la página correcta según el estado actual */}
            {/* si estamos en la pagina uno, si no estamos entonces vamos a la siguiente pagina */}
            <PageDisplay
              page={
                (pages === 1 ? PAGES1 : Paginas) ||
                (pages === 2 ? PAGES2 : Paginas) ||
                (pages === 3 ? PAGES3 : Paginas) ||
                (pages === 4 ? PAGES4 : Paginas) ||
                (pages === 5 ? PAGES5 : Paginas) ||
                (pages === 6 ? PAGES6 : Paginas) ||
                (pages === 7 ? PAGES7 : Paginas)
              }
            />

            <Button
              steps={steps}
              pages={pages}
              setPages={handlePageChange}
              setComplete={setComplete}
              complete={complete}
              lugarOpcion={lugarOpcion}
              opcion={opcion}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Wizard;
