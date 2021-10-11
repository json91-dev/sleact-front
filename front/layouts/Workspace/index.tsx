import {
  Header,
  RightMenu,
  ProfileImg,
  WorkspaceWrapper,
  Workspaces,
  Channels,
  WorkspaceName, Chats, MenuScroll
} from '@layouts/Workspace/styles';
import fetcher from "../../utils/fetcher";
import React, {FC, useCallback} from 'react';
import axios from "axios";
import {Redirect, Route, Switch} from "react-router";
import useSWR from "swr";
import gravatar from 'gravatar';
import loadable from "@loadable/component";

const Channel = loadable(() => import('@pages/Channel/index'));
const DirectMessage = loadable(() => import('@pages/DirectMessage/index'));

const Index: FC = ({children}) => {
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

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(data.email, {s: '28px', d:'retro'})} alt={data.nickname}/>
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
