import Home from './Screen/Home/Home';
import Login from './Screen/Auth/Login/Login';
import Register from './Screen/Auth/Register/Register';
import Dashboard from './Screen/Dashboard/Dashboard';
import Cart from './Screen/Cart/Cart';

export const NormalRoutes = [
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
];

export const SellerRoutes = [
    {
        path:'/dashboard',
        exact:true,
        type:'seller',
        header:true,
        component:<Dashboard />
    },
];

export const BuyerRoutes = [
    {
        path:'/cart',
        exact:true,
        type:'buyer',
        header:true,
        component:<Cart />
    }
]