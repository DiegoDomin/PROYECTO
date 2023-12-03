import pilares from "../../assets/img/pilares.jpeg";
import pilarestitulo from "../../assets/img/pilartitulo.jpeg";

const QuienesSomos = () => {
    return (
        <div className="quienes_somos">
            <div className="title">
                <h1>¿Quiénes somos?</h1>
                <h2> MIRAME</h2>
            </div>
            <div className="video">
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6aPfrs6J490?si=gb2Ft_d9w58C-avZ" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                </iframe>
            </div>
            <img src={pilarestitulo} alt="pilares titulo" className="banner" />
            <p className="texto">
                Somos una asociación que busca tener un monitoreo de todas las zonas del
                país con el fin de lograr informar a la población el estado actual de la
                región, esto gracias a las alertas y el rastreo de la policía en conjunto
                con las familias afectadas y todas las personas que brindan su ayuda,
                queremos brindar motivación y aliento para encontrar su ser querido que
                se encuentra desaparecido.
            </p>

        <img src={pilares} alt="pilares" className="pilares" />


        </div>
    );
};

export default QuienesSomos;
