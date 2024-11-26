import { useState } from 'react';
import './styles.css'

function Modal({textBtn}) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleShow}
            >{textBtn ? textBtn : "OK"}</button>

            {show && (
                <div
                    className="modal fade show"
                    style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content  container-modal">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="ModalLabel">
                                    Nome do Jogo
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={handleClose}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <img src="" alt="Imagem do Jogo" />
                                <p>Breve descrição do Jogo</p>
                            </div>
                            <div className="modal-footer">
                                {/* <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleClose}>
                                    Fechar
                                </button> */}
                                <select className="form-select select-jogo" aria-label="Default select example">
                                    <option selected disabled>Adicionar jogo</option>
                                    <option value="1">Jogando</option>
                                    <option value="2">Quero Jogar</option>
                                    <option value="3">Já Joguei</option>
                                </select>
                                <button
                                    type="button" className="btn btn-secondary">
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
