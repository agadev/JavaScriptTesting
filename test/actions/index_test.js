import {renderComponent , expect } from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('action_test', () => {

  describe('save comment', () => {

    it('has correct action type', () => {
       const action = saveComment();
       expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has correct action payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });

  });
});
