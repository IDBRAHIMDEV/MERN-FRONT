import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './core/Home';
import Shop from './core/Shop';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Dashboard from './user/Dashboard';
import AdminDashboard from './user/AdminDashboard';
import Menu from './core/Menu';

import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'

import AddCategory from './admin/category/AddCategory'
import AddProduct from './admin/product/AddProduct'
import Product from './core/Product'

const Routes = () => {
    return (
        <BrowserRouter>
           <Menu />
            <Switch>
                <PrivateRoute path='/' exact component={Home} />
                <PrivateRoute path='/shop' exact component={Shop} />
                <PrivateRoute path='/dashboard' exact component={Dashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/category/create' exact component={AddCategory} />
                <AdminRoute path='/product/create' exact component={AddProduct} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/product/:id' exact component={Product} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes
