import React, { useState } from 'react';
import { markdown } from 'markdown';
import styled from 'styled-components';

function Post({ data, title, body, author, publishData }) {
  //Change state of display body content
  const [block, setBlock] = useState('none');

  //get summary
  const summary = body.split('##');

  //After Click, display body on the screen.
  const handleClickDisplay = () => {
    if (block === 'none') {
      setBlock('block');
    } else {
      setBlock('none');
    }
  };
  return (
    <PostContainer>
      <h1 onClick={handleClickDisplay} className="fontWhite cursor">
        Title:{title}
      </h1>
      <h3 className="fontWhite cursor">Author:{author}</h3>
      <p className="fontWhite">Date:{publishData}</p>
      <h4 className="fontWhite"> Summary: {summary && summary[0].substr(1)}</h4>
      <div
        style={{ display: block }}
        dangerouslySetInnerHTML={{
          __html: markdown.toHTML(body),
        }}
      />
    </PostContainer>
  );
}

export default Post;
const PostContainer = styled.div`
  .cursor {
    cursor: pointer;
  }
  .fontWhite {
    line-height: 2.5rem;
    color: #fff;
  }
  overflow-x: scroll;
  overflow-y: scroll;
  height: 500px;
  margin: 1rem;
  padding: 1rem;
  width: 350px;
  background: #ff6263;
  h1: 2rem;
  border-radius: 1rem;
`;
