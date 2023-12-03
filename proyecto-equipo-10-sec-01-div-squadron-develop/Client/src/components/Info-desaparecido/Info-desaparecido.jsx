import { useState } from "react";
import img_prueba from "../../assets/img/img-perfil.png";
const Info_desaparecidos = () => {
  const [pestanaActual, setPestanaActual] = useState("descripcion");

  const cambiarPestana = (nuevaPestana) => {
    setPestanaActual(nuevaPestana);
  };

  return (
    <div>
          <h1 className="title-descripcion-general">Persona como: desaparecido/a</h1>

      <div className="container-info-desaparecido">
        <div className="paginacion">
          <div className="pestanas">
            <div className="descripcion">
              {/* Paginacion */}
              <button
                className={
                  pestanaActual === "descripcion" ? "pestaña-activa" : ""
                }
                onClick={() => cambiarPestana("descripcion")}
              >
                Descripción General
              </button>
              <button
            
                className={
                  pestanaActual === "caracteristicas" ? "pestaña-activa" : ""
                }
                onClick={() => cambiarPestana("caracteristicas")}
              >
                Características Físicas
              </button>
              <button
                className={
                  pestanaActual === "discapacidad" ? "pestaña-activa" : ""
                }
                onClick={() => cambiarPestana("discapacidad")}
              >
                Discapacidad
              </button>
              <button
                className={
                  pestanaActual === "informacionExtra" ? "pestaña-activa" : ""
                }
                onClick={() => cambiarPestana("informacionExtra")}
              >
                Información Extra
              </button>
            </div>
          </div>

          {/* descripcion */}
          <section className="container-descripcion">
            {pestanaActual === "descripcion" && (
              <div className="descripcion-desaparecido">
                <figure>
                  <img src={img_prueba} />
                </figure>
                <section className="container-datos">
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Nombre Completo
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Fecha de nacimiento:
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Fecha de nacimiento:
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                </section>
              </div>
            )}
          </section>

          {/* caracteristicas */}
          <section className="container-descripcion">
            {pestanaActual === "caracteristicas" && (
              <div className="descripcion-desaparecido">
                <figure>
                  <img src={img_prueba} />
                </figure>

                <section className="container-datos">
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Color de cabello:
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Altura
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Forma del rostro
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                  <div>
                    <span className="p-text-descripcio-desaparecido">Tez:</span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                </section>
              </div>
            )}
          </section>

          {/* discapacidad */}
          <section className="container-descripcion">
            {pestanaActual === "discapacidad" && (
              <div className="descripcion-desaparecido">
                <figure>
                  <img src={img_prueba} />
                </figure>
                <section className="container-datos">
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Discapacidad
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                  <div>
                    <span className="p-text-descripcio-desaparecido">
                      Informacion de la discapacidad
                    </span>
                    <p className="p-text2-descripcio-desaparecido">
                      insertar nombre
                    </p>
                  </div>
                </section>
              </div>
            )}
          </section>

          {/* informacionExtra */}
          <section className="container-descripcion">
            {pestanaActual === "informacionExtra" && (
              <div className="descripcion-desaparecido">
                <figure>
                  <img src={img_prueba} />
                </figure>
                <section className="container-datos">

                <div>
                  <span className="p-text-descripcio-desaparecido">
                    Ultima vez donde fue visto
                  </span>
                  <p className="p-text2-descripcio-desaparecido">
                    insertar nombre{" "}
                  </p>
                </div>
                <div>
                  <span className="p-text-descripcio-desaparecido">
                    Vestimenta que llevaba puesta{" "}
                  </span>
                  <p className="p-text2-descripcio-desaparecido">
                    insertar nombre{" "}
                  </p>
                </div>
                </section>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Info_desaparecidos;
