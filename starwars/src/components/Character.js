// Write your Character component here
import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

// STYLING COMPONENTS
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const Picture = styled.img`
  border-radius: 10px;
  border: 5px solid lime;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 100px;
  width: 40%;
`;

// CHARACTER COMPONENT
const Character = ({ profile, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Profile className="Character">
      <Picture src={profile.image} alt="profile-pic"></Picture>
      <Content className="Info">
        <h3>Name: {profile.name}</h3>
        <h3>Status: {profile.status}</h3>
        <h3>Species: {profile.species}</h3>
        <p>
          Appears in <b>{profile.episode.length}</b> episodes
        </p>
      </Content>
    </Profile>
  );
};

export default Character;
