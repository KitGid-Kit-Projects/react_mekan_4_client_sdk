import { useState } from "react";

const useForgot=()=>{
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);


  const onFinish = async (values: { email: string }) => {
    setLoading(true);
    try {
      setEmailSent(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
    return{loading, setLoading,emailSent, setEmailSent,onFinish}
}

export default useForgot