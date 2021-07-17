import React, { useState } from 'react';
import { markdown } from 'markdown';
function Post({ data, title, body, author, publishData }) {
  //Change state of display body content
  const [block, setBlock] = useState('none');

  //get summary
  const summary = body.split('##');
  console.log(summary[0]);

  //After Click, display body on the screen.
  const handleClickDisplay = () => {
    if (block === 'none') {
      setBlock('block');
    } else {
      setBlock('none');
    }
  };
  return (
    <div>
      <h1 onClick={handleClickDisplay}>Title:{title}</h1>
      <h3>Author:{author}</h3>
      <p>Date:{publishData}</p>
      <h4> Summary: {summary && summary[0].substr(1)}</h4>
      <div
        style={{ display: block }}
        dangerouslySetInnerHTML={{
          __html: markdown.toHTML(body),
        }}
      />
    </div>
  );
}

export default Post;
