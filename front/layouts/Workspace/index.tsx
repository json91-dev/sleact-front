import {
  Header,
  RightMenu,
  ProfileImg,
  WorkspaceWrapper,
  Workspaces,
  Channels,
  WorkspaceName, Chats, MenuScroll, ProfileModal, LogOutButton, WorkspaceButton, AddButton
} from '@layouts/Workspace/styles';
import fetcher from "../../utils/fetcher";
import React, {FC, useCallback, useState} from 'react';
import axios from "axios";
import {Redirect, Route, Switch} from "react-router";
import useSWR from "swr";
import gravatar from 'gravatar';
import loadable from "@loadable/component";
import Menu from "@components/Menu";
import {Link} from "react-router-dom";
import {IUser} from '@typings/db';
import Modal from "@components/Modal";
import {Button, Input, Label} from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import {toast} from 'react-toastify';

const Channel = loadable(() => import('@pages/Channel/index'));
const DirectMessage = loadable(() => import('@pages/DirectMessage/index'));

const Index: FC = ({children}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');


  const { data: userData , error, revalidate, mutate } = useSWR<IUser | false>('/api/users', fetcher, {
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

  const onCloseUserProfile = useCallback(e => {
    e.stopPropagation();
    setShowUserMenu(false);
  },[]);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev)
  }, []);

  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModal(true)
  }, []);

  const onCreateWorkspace = useCallback((e) => {
    e.preventDefault();
    if (!newWorkspace || !newWorkspace.trim()) return;
    if (!newUrl || !newUrl.trim()) return;

    axios.post('/api/workspaces', {
      workspace: newWorkspace,
      url: newUrl,
    }, {
      withCredentials: true,
    })
      .then(() => {
        revalidate();
        setShowCreateWorkspaceModal(false);
        setNewWorkspace('');
        setNewUrl('');
      })
      .catch((error) => {
        console.dir(error);
        toast.error(error.response?.data, { position: 'bottom-center' })
      })
  }, [newWorkspace, newUrl]);

  const onCloseModal= useCallback(() => {
    setShowCreateWorkspaceModal(false)
  }, []);

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(userData.email, {s: '28px', d:'retro'})} alt={userData.nickname}/>
            {showUserMenu && (
              <Menu style={{ right: 0, top: 38 }} show={showUserMenu} onCloseModal={onCloseUserProfile}>
                <ProfileModal>
                  <img src={gravatar.url(userData.email, {s: '28px', d:'retro'})} alt={userData.nickname} />
                  <div>
                    <span id="profile-name">{userData.nickname}</span>
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
        <Workspaces>{userData?.Workspaces.map((ws) => {
          return (
            <Link key={ws.id} to={`/workspace/${123}/channel/일반`}>
              <WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</WorkspaceButton>
            </Link>
          )
        })}
          <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
        </Workspaces>
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
      <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>
        <form onSubmit={onCreateWorkspace}>
          <Label id="workspace-label">
            <span>워크스페이스 이름</span>
            <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace}/>
          </Label>
          <Label id="workspace-url-label">
            <span>워크스페이스 url</span>
            <Input id="workspace" value={newUrl} onChange={onChangeNewUrl}/>
          </Label>
          <Button type="submit">생성하기</Button>
        </form>
      </Modal>
    </div>
  )
};

export default Index
