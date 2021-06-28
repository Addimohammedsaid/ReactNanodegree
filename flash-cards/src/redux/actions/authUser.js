import createAction from '@reduxjs/toolkit'
import { SET_AUTH_USER } from '../constants/actionTypes';

export default function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}
