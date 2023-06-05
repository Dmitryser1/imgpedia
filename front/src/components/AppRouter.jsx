import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const {user}= useContext(Context);
    console.log(user.isAuth())
    return(
        <Routes>
            {user.isAuth() == true && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path={'*'} element={<Navigate to={LOGIN_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;