import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeGETrequest } from '../../Redux/Actions/home'

function Home() {
const dispatch = useDispatch()


  useEffect(() => {
    dispatch(makeGETrequest())
  }, [])
  return (
    <div>
      home
    </div>
  )
}

export default Home
