import Types from './Types'

export const test = { type: Types.TEST }

export const scan = data => ({ type: Types.SCAN, payload: data })
