import React, {FC, useCallback} from 'react';
import useSWR, {mutate} from "swr";
import fetcher from "@utils/fetcher";
import axios from "axios";
import {Redirect} from "react-router";

const Workspace: FC = ({children}) => {
  const { data , error, revalidate, mutate } = useSWR('/api/users', fetcher, {
    dedupingInterval: 2000 // 2초
  });

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null, {
      withCredentials: true,
    })
      .then(() => {
        // revalidate();
        // mutate(false)
        mutate(false, false)
      })
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  )
};

export default Workspace
