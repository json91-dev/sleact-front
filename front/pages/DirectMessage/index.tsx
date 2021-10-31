import React, {useCallback} from 'react';

import {Header, Container} from "@pages/DirectMessage/styles";
import gravatar from 'gravatar'
import fetcher from "@utils/fetcher";
import { useParams } from 'react-router';
import useSWR from 'swr';
import ChatBox from "@components/ChatBox";
import useInput from "@hooks/useInput";
import axios from 'axios';
import {IDM} from "@typings/db";

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string}>();
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);
  const [chat, onChangeChat, setChat] = useInput('');

  // 채팅을 받아오는 API
  const { data: chatData, mutate: mutateChat, revalidate } = useSWR<IDM[]>(
    `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=1`,
    fetcher,
  );

  // 채팅을 등
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (chat?.trim()) {
      axios
        .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
          content: chat,
        })
        .then(() => {
          revalidate(); // 채팅 등록후 채팅을 받아옴
          setChat('');
        })
        .catch(console.error)
    }
  }, []);

  if (!userData || !myData) {
    return null;
  }

  return <Container>
    <Header>
      <img src={gravatar.url(userData.email, {s: '24px', d: 'retro'})} alt={userData.nickname} />
      <span>{userData.nickname}</span>
    </Header>
    {/*<ChatList />*/}
    <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
  </Container>
};

export default DirectMessage;

