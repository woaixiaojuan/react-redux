export default function reducer(state = {
  fetching: false,
  fetched: false,
  filter: '',
  items: [{
    videoName: null,
    videoImg: null,
    addDate: null,
    startTime: null,
    duration: null,

    adName:null,
    adContent:null,
    adBrand: null,
    adType: null,
    status: null,

    frameId: null,
    adId:null,
    adBrandId: null,
    adTypeId: null,
  }],
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_TABLE_PENDING':
      {
        //state.name =action.payload;
        return {
          ...state,
          fetching: true,
        }
      }
    case 'FETCH_TABLE_REJECTED':

      {
        //state.name =action.payload;
        return {
          ...state,
          fetching: false,
          error: action.payload,
        }
      }
    case 'FETCH_TABLE_FULFILLED':
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          items: action.payload.data.data,
        }
      }
    case 'EDIT_TABLE_ITEMS_PENDING':{
        return {
          ...state,
          fetching: true,
        }
    }
    case 'DELETE_TABLE_ITEM_FULFILLED':
      {
        const items = state.items
        const itemNeedDelet = action.payload
        return {
          ...state,
          // items: items.filter((item) => {
          //   return itemNeedDelet.frameId !== item.frameId
          // }),
          items: items.map((item) => {
            if (itemNeedDelet.frameId === item.frameId) {
              // return { ...item, ...itemNeedDelet }
              item = { ...item, ...itemNeedDelet }
            }
            return item;
          }),
        }
      }
    case 'ADD_TABLE_ITEM':

      {
        const frameId = state.items[state.items.length - 1].frameId + 1;
        const item = {
          frameId,
          videoName: '',
          startTime: '',
          duration: '',
          addDate: '无',
          adBrand: '无',
          adName: '无',
          adType: '无',
          status: '',
        }
        const _item = { ...item,
          ...action.payload,
        }

        return {
          ...state,
          items: [...state.items, _item],

        }
      }
    case 'EDIT_TABLE_ITEMS_FULFILLED':
      {
        const items = state.items;
        const itemsNeedEdit = action.payload;
       if(itemsNeedEdit){
          const updatedItems = items.map((item) => {
          for (let editItem of itemsNeedEdit) {
            item = item.frameId === editItem.frameId ? { ...item, ...editItem } : item;
          }
          return item;
        })

        return {
          ...state,
          fetching: false,
          items: updatedItems,
        }
       }
      }
    case 'FILTER_TABLE_ITEM':
      {
        return {
          ...state,
          filter: action.payload,
        }
      }
    default: return {
      ...state,
    }
  }
}
