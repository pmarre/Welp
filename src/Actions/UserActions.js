export const UPDATE_USER_LOCATION = 'userLocation:updateUserLocation';

export function updateUserLocation(newUserLocation) {
  return {
    type: UPDATE_USER_LOCATION,
    payload: {
      userLocation: newUserLocation
    }
  };
}
