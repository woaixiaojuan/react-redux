import axios from 'axios';

//uasage examples:
// import * as user from './userActions';

// user.setUserName('lyn');
// import { setUserName } from './userActions'
// setUserName('lyn');

//thunk need return function


export function fetchTable() {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_TABLE',
      payload: axios.get(`${ENV.api}/frame/list.do?pageNum=1&pageSize=3000`),
      // payload: axios.get('/api/tables'),
    });
  }
}

export function searchTable(searchWord) {
  let type = 0;
  for (const item of ENV.typeData) {
    if (searchWord == item.adType) {
      type = item.typeId;
      break;
    }
  }
  return function (dispatch) {
    dispatch({
      type: 'FETCH_TABLE',
      payload: axios.get(`${ENV.api}/frame/search.do?pageNum=1&pageSize=3000&typeId=${type}`),
      // payload: axios.get('/api/tables'),
    });
  }
}

export function addTableItem(item) {
  return {
    type: 'ADD_TABLE_ITEM',
    payload: item,
  }
}

export function delTableItem(item) {
  return function (dispatch) {
    dispatch({
      type: 'EDIT_TABLE_ITEMS',
      payload: axios({
        method: 'post',
        url: `${ENV.api}/frame/delete.do`,
        params: { frameId: item.frameId },
      }).then((res) => {
        dispatch({
          type: 'DELETE_TABLE_ITEM_FULFILLED',
          payload: item,
        })
      }),
    });
  }
}


export function editTableItems(item) {
  const _item = { ...item };
  delete _item.adBrandTitle;
  delete _item.adContent;
  delete _item.adImage;
  delete _item.adTypeTitle;
  delete _item.adTitle;

  const frameIds = item.frameIds;
  const lists = [];
  for (let i = 0; i < frameIds.length; i++) {
    const list = { ...item, frameId: frameIds[i] };
    delete list.frameIds;
    lists.push(list);
  }

  return function (dispatch) {
    dispatch({
      type: 'EDIT_TABLE_ITEMS_PENDING',
    });
    axios({
      method: 'post',
      url: `${ENV.api}/frame/update.do`,
      params: _item,
      paramsSerializer(params) {
        let paramStr = '';
        for (const p in params) {
          if (Array.isArray(params[p])) {
            paramStr += `${p}=[${params[p]}]&`;
          } else if (params[p]) {
            const _params = encodeURIComponent(params[p]);
            paramStr += `${p}=${_params}&`;
          }
        }
        return paramStr
      },
    }).then((res) => {
      dispatch({
        type: 'EDIT_TABLE_ITEMS_FULFILLED',
        payload: lists,
      })
    });
  }
}
