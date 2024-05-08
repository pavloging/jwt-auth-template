import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

// Функция для обработки ошибок от Axios
export function handleError(error: unknown) {
    if (error instanceof AxiosError) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast('Произошла неизвестная ошибка');
            console.error(error)
        }
    }
}
