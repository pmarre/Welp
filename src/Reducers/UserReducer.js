import { UPDATE_USER_LOCATION } from '../actions/UserActions';

export default function userReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_USER_LOCATION:
      return payload.userLocation;
    default:
      return state;
  }
}
