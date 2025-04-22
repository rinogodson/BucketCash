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
    username: localStorage.getItem('bucketcash_user'),
  });


  const createBucket = async (name, money) => {
    const { token } = auth
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const response = await api.post('/api/buckets', { Name: name, initialBalance: money });
    refreshData()
  }

  const transfer = async (fromID, toID, amount) => {
    const { token } = auth
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const response = await api.post('/api/transfer', { fromBucketId: fromID, toBucketId: toID, amount: amount });
    refreshData()
  }

  useEffect(() => {
   // createBucket('A', 2000)
  transfer(16, 15, 300)
  }, [])

  const refreshData = async () => {
    const { token } = auth
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const bucketsResponse = await api.get('/api/buckets');
    const logsResponse = await api.get('/api/logs');
    setValue(prev => ({
      ...prev,
      buckets: bucketsResponse.data.buckets,
      logs: logsResponse.data.logs,
    }));
  }

  useEffect(() => {
    refreshData()
  }, [])

  useEffect(() => {
    console.log(value)
  }, [value])


  return (
    <DashContext.Provider value={value}>{children}</DashContext.Provider>
  )
}

export default DashProvider
