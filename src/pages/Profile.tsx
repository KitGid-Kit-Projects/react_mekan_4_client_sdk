import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { Layout, Card, Form, Input, Button, Upload, Avatar, message, Spin } from 'antd';
import { UserOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';
import Navbar from '../components/Navbar';
import userProfile from '@/hooks/useprofile';
import ProfileContent from '@/components/ProfileContent';

const { Content } = Layout;

const Profile = () => {
const {user,form,loading, setLoading,uploading, setUploading,profileData, setProfileData,fileList, setFileList,
        handleUpload,onFinish
    }=userProfile()

  if (loading && !profileData) {
    return (
      <Layout className="min-h-screen">
        <Navbar />
        <Content className="flex items-center justify-center">
          <Spin size="large" />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout className="min-h-screen">
      <Navbar />
<ProfileContent profileData={profileData} fileList={fileList} handleUpload={handleUpload} uploading={uploading} form={form} onFinish={onFinish} user={user} loading={loading}/>
    </Layout>
  );
};

export default Profile;
