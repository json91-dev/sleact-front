import {
  Header,
  RightMenu,
  ProfileImg,
  WorkspaceWrapper,
  Workspaces,
  Channels,
  WorkspaceName, Chats, MenuScroll, ProfileModal, LogOutButton
} from '@layouts/Workspace/styles';
import fetcher from "../../utils/fetcher";
import React, {FC, useCallback, useState} from 'react';
import axios from "axios";
import {Redirect, Route, Switch} from "react-router";
import useSWR from "swr";
import gravatar from 'gravatar';
import loadable from "@loadable/component";
import Menu from "@components/Menu";

const Channel = loadable(() => import('@pages/Channel/index'));
const DirectMessage = loadable(() => import('@pages/DirectMessage/index'));

const Index: FC = ({children}) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { data , error, revalidate, mutate } = useSWR('/api/users', fetcher, {
    dedupingInterval: 2000 // 2초
  });

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null, {
      withCredentials: true,
    })
      .then(() => {

        mutate(false, false)
      })
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev)
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(data.email, {s: '28px', d:'retro'})} alt={data.nickname}/>
            {showUserMenu && (
              <Menu style={{ right: 0, top: 38 }} show={showUserMenu} onCloseModal={onClickUserProfile}>
                <ProfileModal>
                  <img src={gravatar.url(data.email, {s: '28px', d:'retro'})} alt={data.nickname} />
                  <div>
                    <span id="profile-name">{data.nickname}</span>
                    <span id="profile-active">Active</span>
                  </div>
                </ProfileModal>
                <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
              </Menu>
            )}
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll>menu scroll</MenuScroll>
        </Channels>
        <Chats>
          <Switch>
            <Route path="/workspace/channel" component={Channel}/>
            <Route path="/workspace/dm" component={DirectMessage} />
          </Switch>
        </Chats>
      </WorkspaceWrapper>
    </div>
  )
};

export default Index
