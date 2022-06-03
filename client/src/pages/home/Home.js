import React from 'react';

import ProfileSide from '../../components/profileSide/ProfileSide';

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <div className="postSide">post</div>
        <div className="RightSideSide">Right</div>
    </div>
  )
}

export default Home
