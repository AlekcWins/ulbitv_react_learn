import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, FormControl} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const click = async () => {
        let data;
        try {
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            //TODO data or user
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }

    }
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-4"
                        placeholder="Введите почту"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-4"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <div className="d-flex justify-content-between mt-4">
                        {isLogin ?
                            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> зарегистрироваться</NavLink></div>
                            :
                            <div>Eсть аккаунт? <NavLink to={LOGIN_ROUTE}> войти</NavLink></div>
                        }

                        <Button
                            variant={"outline-success"}
                            onClick={click}
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
});

export default Auth;
