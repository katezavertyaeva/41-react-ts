import { useContext } from 'react'

import { MessageContainer, MessageComponent } from './styles';
import { PostContext } from 'homeworks/Homeworks13/components/BlogManagement/BlogManagement'

function Message() {
  const postMessage = useContext(PostContext)
  
  return (
    <MessageComponent>
      <MessageContainer>{postMessage}</MessageContainer>
    </MessageComponent>
  );
}

export default Message;

