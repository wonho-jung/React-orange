import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';

describe('Post component', () => {
  it('matchs the snapshot', () => {
    const tree = renderer
      .create(
        <Post
          data={'newdata'}
          setNewdata={'setNewdata'}
          key={'id'}
          title={'title'}
          body={'body'}
          author={'author'}
          publishData={'2012'}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
