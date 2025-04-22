import React, { createContext, useState, useEffect, useContext } from 'react'
import api from '../services/api';
import AuthContext from './AuthContext';

const DashContext = createContext(null)


function DashProvider({ children }) {

  const auth = useContext(AuthContext)
  const [value, setValue] = useState({
    buckets: null,
    logs: [],
    isSelecting: false,
    trModal: false,
    crModal: false,
    username: auth.user.name,
  });
  

  const createBucket = async (name, money) => {
    const { token } = auth
    console.log(localStorage.getItem('bucketcash_user'))
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const response = await api.post('/api/buckets', { name, money });
  }

  useEffect(() => {
    createBucket('test', 0)
  }, [])

  const refreshData = async () => {
    const { token } = auth
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const bucketsResponse = await api.get('/api/buckets');
    const logsResponse = await api.get('/api/logs');
    setValue(prev => ({
      ...prev,
      buckets: bucketsResponse.data.buckets, // Adjust based on your API response structure
      logs: logsResponse.data.logs, // Adjust based on your API response structure
    }));
  }

  useEffect(() => {
    refreshData()
  }, [])

  useEffect(() => {
  }, [value])


  return (
    <DashContext.Provider value={value}>{children}</DashContext.Provider>
  )
}

export default DashProvider
