import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navigation from "../utils/navigatation"
function CustomModal({ onClick2, show }) {

    return (
        <>
         

            <Modal show={show} >
                {/* <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>Your order has been placed</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClick2}>
                        <Navigation path={"/"}>
                            home
                        </Navigation>
                    </Button>
                    <Button variant="primary" onClick={onClick2}>
                        <Navigation path={"/orders"}>
                            order details
                        </Navigation>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomModal;