import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {check} from './http/userApi'

const App = observer(() => {
        const {user} = useContext(Context);
        const [loading, setLoading] = useState(true)


        useEffect(() => {
            //For test use time out
            // setTimeout(() =>
            check()
                .then(data => {
                    //TODO ?  setUser(true) - what
                    console.log(data)
                    user.setUser(true)
                    user.setIsAuth(true)
                })
                .finally(() => {
                    setLoading(false)
                })
            // , 10000)


        }, [])
        if (loading) {
            //TODO add normal position on center
            return <Spinner style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
                            animation={'grow'}/>
        }

        return (
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        );
    }
)

export default App;
