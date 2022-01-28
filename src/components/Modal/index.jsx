import React from 'react';

import { Grid, Cell } from "react-foundation";
import Modal from "react-modal";

import "./index.scss"

const ClosingModal = (winner, isOpen) => {
    function closeModal() {
        window.location.reload(false);
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                className="Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
            >
                <Grid className="display GameBoard_container">
                    <Cell small={12}>
                        <button
                            onClick={closeModal}
                            className="Modal_close text-mandalore text-bigger"
                        >
                            close
                        </button>
                        <div className="Modal_container text-center">
                            {winner === "Mando" ? (
                                <>
                                    <h3 className="text-mandalore text-bigger">HAS GANADO</h3>
                                    <img
                                        src="https://nerdist.com/wp-content/uploads/2020/11/Nov-20-2020-08-36-54.gif"
                                        alt="mando wins"
                                        width={1020}
                                    />
                                    <p>
                                        Pero igual podías darle alguna galletita o algo... no sé.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-mandalore text-bigger">HAS PERDIDO</h3>{" "}
                                    <img
                                        src="https://frikinerd.com/wp-content/uploads/2020/03/baby-yoda-mandaloriano.gif"
                                        alt="mando wins"
                                        width={850}
                                    />
                                </>
                            )}
                        </div>
                    </Cell>
                </Grid>
            </Modal>
        </div>
    );
}

export default ClosingModal;