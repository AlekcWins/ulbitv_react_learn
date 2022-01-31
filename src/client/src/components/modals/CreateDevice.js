import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import {Context} from "../../index";
import Col from "react-bootstrap/Col";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal show={show} onHide={onHide} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите название устройства'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите cтоимость устройства'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>

                    {info.map(i =>
                        <div className='d-flex mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введине название свойства'
                                />

                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введине описание свойства'
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.number)}
                                >Удалить</Button>
                            </Col>
                        </div>
                    )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={'outline-danger'}>Закрыть</Button>
                <Button onClick={onHide} variant={'outline-success'}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
