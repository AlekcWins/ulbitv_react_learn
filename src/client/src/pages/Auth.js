import React from 'react';
import {Button, Card, Container, Form, FormControl} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-4"
                        placeholder="Введите почту"
                    />
                    <FormControl
                        className="mt-4"
                        placeholder="Введите пароль"
                    />
                    <div className="d-flex justify-content-between mt-4">
                        {isLogin ?
                            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> зарегистрироваться</NavLink></div>
                            :
                            <div>Eсть аккаунт? <NavLink to={LOGIN_ROUTE}> войти</NavLink></div>
                        }

                        <Button
                            variant={"outline-success"}
                        >
                            {isLogin ?
                                'Войти'
                                :
                                'Регистрация'
                            }
                        </Button>

                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
