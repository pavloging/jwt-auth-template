import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError } from '../utils/handleError';
import { toast } from 'react-toastify';
import AuthService from '../services/AuthService';

interface IPassword {
    passwordFirst: string;
    passwordSecond: string;
}

const PasswordForm: FC = () => {
    const [password, setPassword] = useState<IPassword>({ passwordFirst: '', passwordSecond: '' });
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const searchParams = new URLSearchParams(location.search);
            const userId = searchParams.get('userId');
            const token = searchParams.get('token');
            if (!userId || !token) throw Error('Нет данных');

            const data = await AuthService.password(userId, token, password.passwordFirst);
            if (!data) throw Error('Произошла ошибка при получении данных. Попробуйте позже');

            navigate('/');
            toast.success('Вы успешно изменили пароль');
        } catch (error) {
            handleError(error);
        }
    };

    const handlePress = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setPassword({ ...password, [name]: value });
    };

    const isDisabled = !(
        password.passwordFirst === password.passwordSecond &&
        password.passwordFirst.length >= 8 &&
        password.passwordSecond.length >= 8
    );

    return (
        <div>
            <input
                onChange={(e) => handlePress(e)}
                value={password.passwordFirst}
                name="passwordFirst"
                type="password"
                placeholder="Password"
            />
            <input
                onChange={(e) => handlePress(e)}
                value={password.passwordSecond}
                name="passwordSecond"
                type="password"
                placeholder="Password"
            />
            <button disabled={isDisabled} onClick={handleClick}>
                Задать новый пароль
            </button>
        </div>
    );
};

export default PasswordForm;
