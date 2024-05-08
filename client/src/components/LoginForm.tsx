import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchLogin } from '../redux/redusers/user/ActionLogin';
import { fetchRegistration } from '../redux/redusers/user/ActionRegistration';
import { Link } from 'react-router-dom';

const LoginForm: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className='login-form'>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Пароль"
            />
            <button onClick={() => dispatch(fetchLogin({ email, password }))}>Логин</button>
            <button onClick={() => dispatch(fetchRegistration({ email, password }))}>
                Регистрация
            </button>
            <Link to='/reset'><button style={{color: 'chocolate'}}>Забыли пароль?</button></Link>
        </div>
    );
};

export default LoginForm;
