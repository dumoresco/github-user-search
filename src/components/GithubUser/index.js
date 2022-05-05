import React from "react";

import {
  Container,
  Header,
  UserIcon,
  UserInfo,
  UserData,
  UserList,
} from "./styles";

import { MdLocationOn } from "react-icons/md";

import { CgWebsite } from "react-icons/cg";

import { FaTwitter, FaBuilding } from "react-icons/fa";

function GithubUser({
  userImage,
  name,
  username,
  bio,
  repos,
  followers,
  following,
  twitter,
  city,
  site,
  organization,
}) {
  return (
    <Container>
      <Header>
        <UserIcon src={userImage} alt="User icon" />
        <UserInfo>
          <h1>{name}</h1>
          <h2>@{username}</h2>
        </UserInfo>
      </Header>
      <p className="bio">{bio}</p>
      <UserData>
        <div>
          <p>Repos</p>
          <span>{repos}</span>
        </div>
        <div>
          <p>Followers</p>
          <span>{followers}</span>
        </div>
        <div>
          <p>Following</p>
          <span>{following}</span>
        </div>
      </UserData>
      <UserList>
        <ul>
          <li>
            <MdLocationOn className="icon" />{" "}
            {!city ? <p>Não disponível</p> : city}
          </li>
          <li>
            <CgWebsite className="icon" />{" "}
            {!site ? <p>Não disponível</p> : site}
          </li>
          <li>
            <FaTwitter className="icon" />{" "}
            {!twitter ? <p>Não disponível</p> : twitter}
          </li>
          <li>
            <FaBuilding className="icon" />{" "}
            {!organization ? <p>Não disponível</p> : organization}
          </li>
        </ul>
      </UserList>
    </Container>
  );
}

export default GithubUser;
