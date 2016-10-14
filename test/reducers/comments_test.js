import {expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer ', () => {

  it('handles action with unknown types', () => {

     expect(commentReducer([],{})).to.eql([]);
  });

  it('handles action with SAVE_COMMENT', () => {
      const action= {type:SAVE_COMMENT, payload:'new comment'};
      expect(commentReducer([],action)).to.eql(['new comment']);
  });
});
