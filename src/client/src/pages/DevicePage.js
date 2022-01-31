import React from 'react';
import {Card, Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import bigStar from "../assets/bigStar.png"
import Button from "react-bootstrap/Button";

const DevicePage = () => {
    const device = {
        id: 1,
        name: "Name1",
        price: 1,
        rating: 5,
        img: "https://appleinsider.ru/wp-content/uploads/2020/04/sberbank_app_new.jpg"
    }
    const description = [
        {id: 1, title: " test", description: "vdfgdf"},
        {id: 2, title: " test2", description: "vdfgdf2"},
        {id: 3, title: " test3", description: "3"},
        {id: 4, title: " test4", description: "vdfgdf4"},
    ]
    return (
        <Container className='m-3'>
            <div className='d-flex'>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
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
                {description.map((info, index) =>
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
