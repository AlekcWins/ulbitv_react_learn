import React, {useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import bigStar from "../assets/bigStar.png"
import Button from "react-bootstrap/Button";
import {useParams} from "react-router-dom"
import {fetchDevice} from "../http/deviceApi";
import {SERVER_URL} from "../http";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchDevice(id).then(data =>  setDevice(data))
    }, [])
    return (
        <Container className='m-3'>
            <div className='d-flex'>
                <Col md={4}>
                    <Image width={300} height={300} src={`${SERVER_URL}/${device.img}`}/>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64,

                            }}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </div>
            <div className="d-flex flex-column mt-3">
                <h1>Характиристики:</h1>
                {device.info.map((info, index) =>
                    <div key={info.id} className='d-flex'
                         style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default DevicePage;
