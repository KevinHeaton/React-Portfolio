import React from "react";

function Modal({onClose, currentProject}) {
  const { name, description, github, deployed, pic } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/images/projects/${pic}.png`)} alt={name} />
        <p>{description}</p>
        <a href={deployed} target="_blank" rel="noreferrer"><button>Deployed Site</button></a>
        <a href={github} target="_blank" rel="noreferrer"><button>GitHub Repo</button></a>
        <button onClick={onClose} type="button">
          Close
        </button>
      </div>
    </div>
  );

}

export default Modal;