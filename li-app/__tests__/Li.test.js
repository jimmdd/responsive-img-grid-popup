import React from 'react';
//import ImgsContainer from '../src/ImgsContainer';
import Thumbnail from '../src/Thumbnai';
import renderer from 'react-test-renderer';

test('modal is rendered when click on thumbnail', () => {
  const component = renderer.create(
    <Thumbnail 
    id={1}
    title= "accusamus beatae ad facilis cum similique qui sunt"
    url="http://placehold.it/600/92c952"
    thumbnailUrl="http://placehold.it/150/92c952"/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});
