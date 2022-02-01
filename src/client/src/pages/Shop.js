import React, {useContext, useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import PagesPagination from "../components/PagesPagination";

const Shop = () => {
    const {device} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, device.limitPerPage).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])


    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limitPerPage).then(data => {
            device.setTotalCount(data.count)
            device.setDevices(data.rows)
        })
    }, [device.page, device.selectedBrand, device.selectedType])
    return (
        <Container>
            <div className="d-flex mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <PagesPagination/>
                </Col>
            </div>
        </Container>
    );
};

export default observer(Shop);
