import { FC, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { defaultRoutes, authRoutes } from './routes';
import { fetchAuth } from './redux/redusers/user/ActionAuth';
import { AppDispatch, RootState } from './redux/store';

const App: FC = () => {
    const defaultRoutesElement = useRoutes(defaultRoutes);
    const authRoutesElement = useRoutes(authRoutes);
    const store = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(fetchAuth());
        }
    }, [dispatch]);

    if (store.isLoading) {
        return <div>Загрузка...</div>;
    }

    if (!store.isAuth) {
        return defaultRoutesElement;
    }

    return authRoutesElement;
};

export default App;
