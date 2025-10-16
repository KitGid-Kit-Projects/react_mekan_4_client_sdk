import { useAuth } from "@/context/AuthContext";
import { Form, message } from "antd";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../firebase';
const useAddUser=()=>{
  // Access the authenticated user
  const { user } = useAuth();
  // Initialize the navigate function for page redirection
  const navigate = useNavigate();
  // Initialize Ant Design form instance
  const [form] = Form.useForm();
  // State for tracking loading status
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const onFinish = async (values: any) => {
    // Exit if user is not authenticated
    if (!user) return;

    setLoading(true); // Start loading indicator
    try {
      // Create or overwrite document with user's UID as ID
      await setDoc(doc(db, 'usersData', user.uid), {
        uid: user.uid, // Unique user ID
        displayName: values.displayName, // User name
        age: values.age, // User age
        city: values.city, // User city
        photoURL: values.photoURL || '', // Optional photo URL
        createdAt: new Date(), // Store timestamp for creation
      });

      // Notify success and navigate to user list
      message.success('User data added successfully!');
      navigate('/users');
    } catch (error: any) {
      // Log error for debugging and show UI message
      console.error(error);
      message.error('Failed to add user data');
    } finally {
      // Stop loading indicator
      setLoading(false);
    }
  };

return {user,navigate,form,loading,setLoading,onFinish}
}

export default useAddUser