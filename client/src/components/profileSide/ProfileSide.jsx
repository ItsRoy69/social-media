import React from 'react';
import "./ProfileSide.css";

import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <ProfileCard />
    </div>
  )
}

export default ProfileSide
