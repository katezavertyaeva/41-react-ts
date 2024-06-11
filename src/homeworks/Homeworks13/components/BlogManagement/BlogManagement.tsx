import { ChangeEvent, createContext, useState } from 'react';

import { BlogManagerContainer, ButtonContainer } from './styles';
import Button from 'components/Button/Button';
import Card from '../Card/Card';
import Input from 'components/Input/Input';

export const PostContext = createContext<string>('')

function BlogManagement() {
  const [postValue, setPostValue] = useState<string>('');
  const [post, setPost] = useState<string>('');

  const onChangePostValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPostValue(event.target.value)
  }

  const onPost = () => {
    setPost(postValue)
  }

  return (
    <PostContext.Provider value={post}>
      <BlogManagerContainer>
        <Input name='post' value={postValue} onChange={onChangePostValue} placeholder='Post' />
        <ButtonContainer>
          <Button name="Post" onClick={onPost} />
        </ButtonContainer>
        {post && <Card />}
      </BlogManagerContainer>
    </PostContext.Provider>
  );
}

export default BlogManagement;

