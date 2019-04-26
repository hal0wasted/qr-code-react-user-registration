import Types from './Types'

export const test = { type: Types.TEST }

export const scan = data => ({ type: Types.SCAN, payload: data })

export const getUserVals = values => ({ type: Types.USER_VALUES, payload: values })
