# Firebase Setup Guide

## 🔥 Firebase Configuration

This app requires Firebase to work. Follow these steps to set up Firebase:

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Once created, click on the web icon (</>) to add a web app
4. Register your app and copy the configuration

### 2. Set Up Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Firebase configuration values in `.env`:
   ```
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### 3. Enable Authentication

1. In Firebase Console, go to **Authentication**
2. Click **Get Started**
3. Enable **Email/Password** provider
4. Enable **Google** provider and configure OAuth consent screen

### 4. Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Choose **Start in test mode** (for development)
4. Select your preferred location

### 5. Set Up Firestore Security Rules

Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /usersData/{docId} {
      allow read: if request.auth != null && 
                     (request.auth.uid == resource.data.uid || 
                      get(/databases/$(database)/documents/usersData/$(request.auth.uid)).data.role == 'admin');
      allow create: if request.auth != null && request.auth.uid == request.resource.data.uid;
      allow update, delete: if request.auth != null && 
                               (request.auth.uid == resource.data.uid || 
                                get(/databases/$(database)/documents/usersData/$(request.auth.uid)).data.role == 'admin');
    }
  }
}
```

### 6. Enable Firebase Storage

1. In Firebase Console, go to **Storage**
2. Click **Get Started**
3. Use the default security rules for now

### 7. Configure Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🎯 Features Implemented

- ✅ Email/Password Authentication
- ✅ Google Sign-In
- ✅ Password Reset
- ✅ User Profiles with Firestore
- ✅ File Upload to Firebase Storage
- ✅ Role-Based Access Control
- ✅ Real-time Data Updates
- ✅ Protected Routes
- ✅ CRUD Operations

## 🚀 Running the App

```bash
npm install
npm run dev
```

## 📝 Default User Roles

- New users are assigned `role: 'user'` by default
- To create an admin, manually update the Firestore document:
  1. Go to Firestore Console
  2. Find the user document in `usersData` collection
  3. Edit the `role` field to `'admin'`

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use environment-specific configurations for production
- Review and update security rules before deploying to production
- Enable email verification in production
