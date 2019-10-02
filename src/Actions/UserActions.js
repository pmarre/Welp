export const UPDATE_USER_LOCATION = 'userLocation:updateUserLocation';
export const UPDATE_SEARCH_ITEM = 'searchItem:updateSearchItem';

export function updateUserLocation(newUserLocation) {
  return {
    type: UPDATE_USER_LOCATION,
    payload: {
      userLocation: newUserLocation
    }
  };
}

export function updateSearchItem(newSearchItem) {
  return {
    type: UPDATE_SEARCH_ITEM,
    payload: {
      searchItem: newSearchItem
    }
  };
}
