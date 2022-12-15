import * as types from '../ActionType'

export const ACTION_ADD_ITEM = {
    type : types.ADD_ITEM,
    payload :  {
        product : undefined,
        qty : undefined
    }
}

export const ACTION_DEL_ITEM = {
    type : types.DEL_ITEM,
    payload :  {
        pid : undefined
    }
}

export const ACTION_INCREASE_QTY = {
    type : types.INCREASE_QTY,
    payload :  {
        pid : undefined
    }
}

export const ACTION_DECREASE_QTY = {
    type : types.DECREASE_QTY,
    payload :  {
        pid : undefined
    }
}















// import * as types from '../ActionType'

// export const ACTION_ADD_ITEM = {
//     type : types.ADD_ITEM,
//     payload :  {
//         pid : undefined
//     }
// }