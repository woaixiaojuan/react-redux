export function searchFilter(word) {
  return {
    type: 'FILTER_TABLE_ITEM',
    payload: word,
  }
}
