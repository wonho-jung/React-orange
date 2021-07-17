import React from 'react';
import Post from './Post';
import styled from 'styled-components';

function Posts({ data }) {
  console.log(data);
  return (
    <PostsContainer>
      test
      {data.map((item) => (
        <Post
          data={data}
          key={item.id}
          title={item.title}
          body={item.body}
          author={item.author.name}
          publishData={item.publishedAt}
        />
      ))}
    </PostsContainer>
  );
}

export default Posts;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
