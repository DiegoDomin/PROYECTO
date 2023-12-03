
import { useModal } from "../../assets/hooks/useModal";
import Modal from "./Modal";
import icon_editar from "../../assets/icons/icon-editar.png";
import { NavLink } from "react-router-dom";

const Modals = ({nombre,titulo,parrafo}) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <div>
      <button onClick={openModal1} className="btn-editar" > <img src={icon_editar} className="icon-editar" />Editar</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1} nombre={nombre}>
        <h3 className="title-modal">{titulo}</h3>
        <p className="p-modal">{parrafo}</p>
        <p className="name-modal">Nombre completo: {nombre}</p>
      <div className="buttons-model">
      <button className="btn-next-model" >
      <NavLink to="/reportar-caso-usuario-form-editar"> Cambiar caso de desapación</NavLink>
    
      </button>
      <button  className="btn-back-model">
        Cambiar Informacion
      </button>
    </div>
      </Modal>
      
      
    </div>
  );
};

export default Modals;

