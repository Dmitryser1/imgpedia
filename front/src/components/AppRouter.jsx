import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const {user}= useContext(Context);


    console.log(user)
    return(
        <Routes>
            {user.isAuth == true && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {console.log(1)}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;