import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const onFinish = async (values: { email: string; password: string }) => {
        setLoading(true);
        try {
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return {loading, setLoading,navigate,onFinish,handleGoogleLogin }
}

export default useLogin