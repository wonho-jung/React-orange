import React from 'react';
import { markdown } from 'markdown';
function Post({ data, title, body, author, publishData }) {
  console.log(markdown.toHTML(body));
  return (
    <div>
      <h1>Title:{title}</h1>
      <h1>Author:{author}</h1>
      <h1>Date:{publishData}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdown.toHTML(body),
        }}
      />
    </div>
  );
}

export default Post;
