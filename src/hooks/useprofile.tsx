
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { Form, message, UploadFile } from 'antd';
const userProfile=()=>{
  const { user } = useAuth();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    loadProfile();
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const docRef = doc(db, 'usersData', user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData(data);
        form.setFieldsValue({
          displayName: data.displayName,
          age: data.age,
          city: data.city
        });
      }
    } catch (error: any) {
      message.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (file: any) => {
    if (!user) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `users/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      const docRef = doc(db, 'usersData', user.uid);
      await updateDoc(docRef, { photoURL: downloadURL });

      setProfileData({ ...profileData, photoURL: downloadURL });
      message.success('Photo uploaded successfully!');
    } catch (error: any) {
      message.error('Failed to upload photo');
    } finally {
      setUploading(false);
    }

    return false;
  };

  const onFinish = async (values: any) => {
    if (!user) return;

    setLoading(true);
    try {
      const docRef = doc(db, 'usersData', user.uid);
      await updateDoc(docRef, {
        displayName: values.displayName,
        age: values.age,
        city: values.city
      });

      message.success('Profile updated successfully!');
      loadProfile();
    } catch (error: any) {
      message.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

    return{user,form,loading, setLoading,uploading, setUploading,profileData, setProfileData,fileList, setFileList,
        handleUpload,onFinish
    }
}
export default userProfile