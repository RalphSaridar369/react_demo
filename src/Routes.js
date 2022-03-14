import Home from './Screen/Home/Home';
import Login from './Screen/Auth/Login/Login';

export const Routes = [
    {
        path:'/login',
        exact:true,
        type:'normal',
        header:false,
        component:<Login />
    },
    {
        path:'/',
        exact:true,
        type:'normal',
        header:true,
        component:<Home />
    }
]