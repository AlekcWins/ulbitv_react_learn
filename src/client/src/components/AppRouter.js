import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Navigate} from "react-router";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
        return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} excact/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} excact/>
            )}
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

export default AppRouter;
