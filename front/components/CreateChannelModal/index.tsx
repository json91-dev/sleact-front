import Modal from '@components/Modal';
import React, {useCallback, VFC} from 'react';
import {Button, Input, Label} from "@pages/SignUp/styles";
import axios from "axios";
import { useParams } from "react-router";
import { toast  } from "react-toastify";
import useSWR from "swr";
import {IChannel, IUser} from "@typings/db";
import fetcher from "@utils/fetcher";
import useInput from "@hooks/useInput";


interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowCreateChannelModal: (flag: boolean) => void;
}

const CreateChannelModal: VFC<Props> = ({ show, onCloseModal, setShowCreateChannelModal }) => {
  const [newChannel, onChangeNewChannel, setNewChannel] = useInput('');
  const { workspace  } = useParams<{ workspace: string, channel: string }>();
  const { data: userData , error, revalidate, mutate } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000 // 2초
  });

  const { data: channelData, revalidate: revalidateChannel } = useSWR<IChannel[]>(
    userData? `http://localhost:3095/api/workspaces/${workspace}/channels`: null,
    fetcher
  );

  const onCreateChannel = useCallback((e) => {
    e.preventDefault();
    if (!newChannel || !newChannel.trim()) {
      return;
    }
    axios.post(`http://localhost:3095/api/workspaces/${workspace}/channels`, {
      name: newChannel,
    }, {
      withCredentials: true,
    }).then(() => {
      revalidateChannel(); // 생성하자마자 채널 리스트 다시 불러오기
      setShowCreateChannelModal(false);
      setNewChannel('')
    }).catch((error) => {
      console.dir(error);
      toast.error(error.response?.data, {position: 'bottom-center'})
    })
  }, [newChannel]);

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <Label id="channel-label">
          <span>채널 이름</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </Label>
        <Button>생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;


