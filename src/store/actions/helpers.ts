export const createAction = (value: string) => [
    `${value}_REQUEST`,
    `${value}_RECEIVE`,
    `${value}_ERROR`,
    (...args: any): {type: string, args: any} => ({ type: `${value}_REQUEST`, args }),
    (payload: any): {type: string, payload: any} => ({ type: `${value}_RECEIVE`,  payload }),
    (error: any): {type: any, error: any} => ({ type: `${value}_ERROR`, error })
]
