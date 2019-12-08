import { DELETE_COMMENT } from "../actions/actionTypes";
import { ACTIVE_IDS } from '../initialState'

const initialState = {
  activeIds: ACTIVE_IDS,
  reasons: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case DELETE_COMMENT: {
      const { id, reason } = action.payload
      return {
        ...state,
        activeIds: [...state.activeIds.filter(d => d !== id)],
        reasons: [...state.reasons, {id: id, reason: reason}]
      };
    }
    default:
      return state;
  }
}
