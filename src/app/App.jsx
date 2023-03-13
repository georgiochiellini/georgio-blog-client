import React, { useContext, useEffect, useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Context } from '../index'
import './App.scss'
import AppRouter from '../routes/AppRouter'
import { check } from '../api/userAPI'
import {observer} from 'mobx-react-lite'
import Navbar from '../modules/navbar/Navbar'
// import Footer from '../modules/footer/Footer'
import Messages from '../components/messages/Messages'
import Loader from '../UI/loader/Loader'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    check().then((data) => {
      user.setUser(data)
      user.setIsAuth(true)
    }).catch((e) => {
      console.log(e);
    }).finally(() => {
      isLoading(false)
    })
  }, [])


  if (loading) {
    return <Loader main />
  }
   
  return (
    <BrowserRouter>
      <Messages />
      <Navbar />
      <AppRouter />
      {/* <Footer /> */}
    </BrowserRouter>
  )
})

export default App;
