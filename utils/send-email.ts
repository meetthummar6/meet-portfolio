import { FormData } from '@/components/ContactUs';
import toast from 'react-hot-toast';

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            toast.success(response.message);
        })
        .catch((err) => {
            toast.error("Something went wrong. Please try again later.");
        });
}