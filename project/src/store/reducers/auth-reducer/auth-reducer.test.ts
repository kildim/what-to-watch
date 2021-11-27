import { AuthorizationStatus } from '../../../const';
import { setAuthorizationStatus } from '../../action';
import { authReducer } from './auth-reducer';

const  INITIAL_STATE = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

describe('Auth-reducer tests:', () => {
  describe('test setAuthorization action', () => {
    it('changes state authorizationStatus', () => {
      const ACTION = setAuthorizationStatus(AuthorizationStatus.NoAuth);
      const RESULT_STATE = { authorizationStatus: AuthorizationStatus.NoAuth };

      expect(authReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
});
