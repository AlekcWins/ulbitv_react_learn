import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandIsVisible, setBrandVisible] = useState(false);
    const [typeIsVisible, setTypeVisible] = useState(false);
    const [deviceIsVisible, setDeviceVisible] = useState(false);
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'}
                    className={'mt-4 p-2'}
                    onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button variant={'outline-dark'}
                    className={'mt-4 p-2'}
                    onClick={() => setBrandVisible(true)}
            >
                Добавть бренд
            </Button>
            <Button variant={'outline-dark'}
                    className={'mt-4 p-2'}
                    onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            {typeIsVisible}
            {brandIsVisible}
            {deviceIsVisible}
            <CreateType show={typeIsVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandIsVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceIsVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;
