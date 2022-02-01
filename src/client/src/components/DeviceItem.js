import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/constants";
import {SERVER_URL} from "../http";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-3" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'Light'}>
                <Image width={150} height={150} src={`${SERVER_URL}/${device.img}`}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div>
                        BRAND name...
                    </div>
                    <div className="d-flex align-items-center mt-1">
                        <div>
                            {device.rating}
                        </div>
                        <Image height={18} width={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
