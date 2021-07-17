import React from 'react';
import renderer from 'react-test-renderer';
import Posts from './Posts';

describe('Posts component', () => {
  it('matchs the snapshot', () => {
    const tree = renderer.create(<Posts />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
