import React from 'react';
import Post from './Post';
function Posts({ data }) {
  console.log(data);
  return (
    <div>
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
    </div>
  );
}

export default Posts;
