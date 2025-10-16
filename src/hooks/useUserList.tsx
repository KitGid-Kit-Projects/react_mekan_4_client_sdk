// Import React hooks for managing component state and lifecycle
import { useState, useEffect } from 'react';
// Import navigation hook for page redirection
import { useNavigate } from 'react-router-dom';
// Import custom authentication context
import { useAuth } from '../context/AuthContext';
// Import Firestore functions for querying, deleting, and listening to data
import { collection, query, where, onSnapshot, deleteDoc, doc, getDocs } from 'firebase/firestore';
// Import configured Firestore database
import { db } from '../firebase';
import { message } from 'antd';
const useUserList=()=>{
  // Get user and their profile data from AuthContext
  const { user, userProfile } = useAuth();
  // Initialize navigation hook
  const navigate = useNavigate();
  // State for all user documents fetched from Firestore
  const [users, setUsers] = useState<any[]>([]);
  // State for users filtered by search input
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  // Loading state for data fetching
  const [loading, setLoading] = useState(true);
  // State for storing current search text
  const [searchText, setSearchText] = useState('');

  // useEffect hook runs when user or userProfile changes
  useEffect(() => {
    // Exit early if no authenticated user
    if (!user) return;

    // Determine if logged-in user is an admin
    const isAdmin = userProfile?.role === 'admin';

    // Query Firestore: admin sees all users; non-admin sees only their data
    const q = isAdmin 
      ? query(collection(db, 'usersData'))
      : query(collection(db, 'usersData'), where('uid', '==', user.uid));

    // Subscribe to live updates (real-time listener)
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        // Map snapshot documents to a usable array
        const userData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Update both full and filtered data states
        setUsers(userData);
        setFilteredUsers(userData);
        setLoading(false);
      },
      (error) => {
        // Handle and display errors
        message.error('Failed to load users');
        setLoading(false);
      }
    );

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [user, userProfile]);

  // Function to filter user data by search text
  const handleSearch = (value: string) => {
    setSearchText(value);

    // Reset if search box is cleared
    if (!value) {
      setFilteredUsers(users);
      return;
    }

    // Filter by displayName, email, or city (case-insensitive)
    const filtered = users.filter(user => 
      user.displayName?.toLowerCase().includes(value.toLowerCase()) ||
      user.email?.toLowerCase().includes(value.toLowerCase()) ||
      user.city?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  // Function to delete a user document from Firestore
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'usersData', id));
      message.success('User deleted successfully!');
    } catch (error: any) {
      message.error('Failed to delete user');
    }
  };

  // Function to manually refresh user data from Firestore
  const handleRefresh = async () => {
    setLoading(true);
    try {
      const isAdmin = userProfile?.role === 'admin';
      const q = isAdmin 
        ? query(collection(db, 'usersData'))
        : query(collection(db, 'usersData'), where('uid', '==', user?.uid));

      const snapshot = await getDocs(q);
      const userData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(userData);
      setFilteredUsers(userData);
      message.success('Users refreshed!');
    } catch (error) {
      message.error('Failed to refresh users');
    } finally {
      setLoading(false);
    }
  };
    return {user, userProfile,users, setUsers,navigate,filteredUsers, setFilteredUsers,loading,setLoading,
        searchText, setSearchText,handleSearch,handleDelete,handleRefresh
     }
}

export default useUserList