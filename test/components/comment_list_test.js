import {renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach( ()=> {
    const props = {comments:['Comment1','Comment2']};
     component = renderComponent(CommentList,null,props);
  });

  it('has comment-list class', () => {
     expect(component).to.have.class('comment-list');
  });

  it('shows an li for each comment', () => {
    // console.log(component);
     expect(component.find('li').length).to.equal(2);
     //expect(component.find('li')).to.exist;
  });

  it('shows each comment by user', () => {
     expect(component).to.contain('Comment1');
     expect(component).to.contain('Comment2');
  });
});
