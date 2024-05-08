import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchLogout } from '../redux/redusers/user/ActionLogout';
import { IUser } from '../types/IUser';
import UserService from '../services/UserService';
import { handleError } from '../utils/handleError';

const Main: FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const [users, setUsers] = useState<IUser[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            handleError(e)
        }
    }

    return (
        <div className="main">
            <h1 className="not-found__title">Main Page</h1>
            <h1>{user.isAuth ? `Пользователь авторизован ${user.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>
                {user.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}
            </h1>
            <button onClick={() => dispatch(fetchLogout())}>Выйти</button>
            <div>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map((user) => (
                <div key={user.email}>{user.email}</div>
            ))}
        </div>
    );
};

export default Main;
