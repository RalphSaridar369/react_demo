import Home from './Screen/Home/Home';
import Login from './Screen/Auth/Login/Login';
import Register from './Screen/Auth/Register/Register';

export const Routes = [
    {
        path:'/login',
        exact:true,
        type:'normal',
        header:false,
        component:<Login />
    },
    {
        path:'/register',
        exact:true,
        type:'normal',
        header:false,
        component:<Register />
    },
    {
        path:'/',
        exact:true,
        type:'normal',
        header:true,
        component:<Home />
    }
]