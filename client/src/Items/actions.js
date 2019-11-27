const actions = {
  FETCH_ITEM_LIST: 'FETCH_ITEM_LIST',
  SET_ITEM_LIST: 'SET_ITEM_LIST',
  SET_CURRENT_ITEM: 'SET_CURRENT_ITEM',
  UPDATE_ITEM: 'UPDATE_ITEM',
  CREATE_ITEM: 'CREATE_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',

  fetchItemList: () => {
    return  {
      type: actions.FETCH_ITEM_LIST,
    }
  },
  updateItem: (id, name, description) => {
    return  {
      type: actions.UPDATE_ITEM,
      payload: {id, name, description}
    }
  },
  deleteItem: (id) => {
    return  {
      type: actions.DELETE_ITEM,
      payload: id
    }
  },
  createItem: (name, description) => {
    return  {
      type: actions.CREATE_ITEM,
      payload: {name, description}
    }
  },
  setItemList: () => {
    return  {
      type: actions.SET_ITEM_LIST,
    }
  },
  setCurrentItem: (id) => {
    return  {
      type: actions.SET_CURRENT_ITEM,
      payload: id
    }
  }
}

export default actions
