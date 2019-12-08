import { DELETE_COMMENT } from "./actionTypes";

export const deleteComment = data => ({
  type: DELETE_COMMENT,
  payload: {
    id: data.id,
    reason: data.reason
  }
})

