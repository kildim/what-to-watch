import {StateType} from '../../../types/state';
import {NameSpace} from '../../root-reducer';
import {AuthorizationStatus} from '../../../const';

export const getAuthStatus = (state: StateType): AuthorizationStatus => state[NameSpace.Auth].authorizationStatus;
