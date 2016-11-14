import axios from 'axios'

export function saveTokens (tokens) {
  return {
    type: 'SAVE_TOKENS',
    payload: tokens
  }
}
