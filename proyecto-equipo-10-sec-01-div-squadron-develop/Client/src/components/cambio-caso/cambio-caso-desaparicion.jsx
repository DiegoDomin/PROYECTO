import React from 'react';

const CambioCasoDesaparicion = () => {
    const handleEnviarClick = () => {
        
        console.log(' Gracias por cambiar el estado de desaparecido');
    };

    return (
        <div className="cambio">
            <div className="title">
                <h1> Cambio de caso de desaparición </h1>
            </div>

            <p className="text">
                Te damos las gracias por confiar en nosotros al colocar a tu ser querido en esta pagina, estamos consientes de que este fue un proceso dificil, esperamos haber sido de ayuda para ti desde brindarte informacion relevante como tambien medio de difusion.
                Estamos muy contentos con que la persona que reportaste ya haya sido encontrada.
            </p>

            <p className="text">
                Ahora que nos has informado,
                pasaremos a retirar a la persona que reportaste para no generar confusion con los demas usuarios.
            </p>


            <button className='btndesaparecidos' onClick={handleEnviarClick}>Enviar</button>
        </div>
    );
};

export default CambioCasoDesaparicion;
