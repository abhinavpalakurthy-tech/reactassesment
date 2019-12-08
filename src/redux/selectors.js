import { COMMENTS } from './initialState'

export const getActiveIds = store => {
  return store.comments.activeIds
}

export const getInActives = store => {
  return store.comments.reasons
}

export const getActiveComments = (store) => {
  const active_ids = getActiveIds(store)
  return COMMENTS.filter(d => active_ids.includes(d.id))
}
 
export const getInActiveComments = (store) => {
  const reasons = getInActives(store)
  const in_actives = []
  reasons.forEach(element => {
    in_actives.push({comment: COMMENTS.filter(d => d.id === element.id), reason: element.reason})
  });
  return in_actives
}

export const getNumOfHate = () => {
  return COMMENTS.filter(d => d.moddy_hates === false).length
}