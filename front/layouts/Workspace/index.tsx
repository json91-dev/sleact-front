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
import {Redirect} from "react-router";
import useSWR from "swr";
import gravatar from 'gravatar';

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
        <Chats>chats</Chats>
      </WorkspaceWrapper>
      {/*{children}*/}
    </div>
  )
};

export default Index
