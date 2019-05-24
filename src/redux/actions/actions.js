import axios from 'axios';

//action types created and exported
export const CREATE = "Add new item";
export const READ = "fetch all items";
export const UPDATE = "update item";
export const DELETE = "delete item";

export const FETCH_ITEMS_BEGIN = "begin fetching items";
export const FETCH_ITEMS_SUCESS = "Items fetched successfully";
export const FETCH_ITEMS_FAILURE = "Failed to fetch items";

//disptached when we fetch items from database
export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
})

//dispatched when items are successfully fetched
export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCESS,
  payload: { items }
})

//dispatched when items are fails to load
export const fetchItemsFailure = errors => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { errors }
})

//dispatched when item needs to be created
export const createItem = (item) => ({
  type: CREATE,
  payload: { item }
})

//dispatched when all the items stored in redux store needs to be read
export const readItems = () => {
  return dispatch => {
    dispatch(fetchItemsBegin());
    return axios.get('/api/menuItems')
      .then(({data}) => {
        console.log(data);
        console.log('success');
        dispatch(fetchItemsSuccess(data));
      })
      .catch(error => dispatch(fetchItemsFailure(error)));
  }
}

//dispatched when certain item needs to be updated
export const updateItem = (item) => ({
  type: UPDATE,
  payload: { item }
})

//dispatched when certain item needs to be removed from redux store 
export const deleteItem = (id) => ({
  type: DELETE,
  payload: { id }
})