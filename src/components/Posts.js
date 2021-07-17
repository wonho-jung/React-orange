import React, { useState } from 'react';
import Post from './Post';
import styled from 'styled-components';

function Posts({ data }) {
  // get newdata array from post components filter function
  const [newdata, setNewdata] = useState(data);

  return (
    <PostsContainer>
      {data &&
        newdata.map((item) => (
          <Post
            data={newdata}
            setNewdata={setNewdata}
            key={item.id}
            title={item.title}
            body={item.body}
            author={item.author.name}
            publishData={item.publishedAt}
          />
        ))}
      {!data && <h1>Sorry Refresh your page :(</h1>}
    </PostsContainer>
  );
}

export default Posts;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
