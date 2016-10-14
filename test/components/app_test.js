import {renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


describe('App', ()=> {
  let component;

  beforeEach( ()=> {
     component = renderComponent(App);
  });

  it('has comment_box class', () => {
     expect(component.find('.comment-box')).to.exist;
  });

  it('has comment_list', () => {
     expect(component.find('.comment-list')).to.exist;
  });
});
