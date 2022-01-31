import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";

const CreateType = ({show, onHide}) => {
    console.log(show)
    return (
        <Modal show={show} onHide={onHide} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder='Введите название типа'>

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={'outline-danger'}>Закрыть</Button>
                <Button onClick={onHide} variant={'outline-success'}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
