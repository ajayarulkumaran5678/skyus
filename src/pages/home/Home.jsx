import React from 'react'
import RightSide from '../../components/RightSide/RightSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <RightSide/>
        <PostSide/>
        <ProfileSide/>
    </div>
  )
}

export default Home