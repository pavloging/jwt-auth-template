import Main from './pages/Main';
import SignIn from './pages/SignIn';
import Reset from './pages/Reset';
import NotFound from './pages/NotFound';
import Password from './pages/Password';

export const defaultRoutes = [
    {
        path: 'reset',
        element: <Reset />,
    },
    {
        path: 'password',
        element: <Password />
    },
    {
        path: '*',
        element: <SignIn />,
    },
];

export const authRoutes = [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: 'login',
        element: <SignIn />,
    },
    {
        path: 'reset',
        element: <Reset />,
    },
    {
        path: 'password',
        element: <Password />
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
