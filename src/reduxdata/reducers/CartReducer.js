import * as types from '../ActionType'

export default function(state=[],action)
{
    switch(action.type){
        case types.ADD_ITEM : return [...state,{
            product : action.payload.product,
            qty : 1
        }]

        case types.DEL_ITEM : 
                return state.filter(ob=>ob.product.pid!=action.payload.pid)

        case types.INCREASE_QTY :
            return  state.map(ob=>{
                if(ob.product.pid==action.payload.pid){
                    ob.qty +=1
                    return ob;
                }else
                    return ob;
            })   
            
        case types.DECREASE_QTY :
                return  state.map(ob=>{
                    if(ob.product.pid==action.payload.pid){
                        ob.qty -=1
                        return ob;
                    }else
                        return ob;
                })     
        default : return state;
    }
}












// import * as types from '../ActionType'

// export default function(state=[],action)
// {
//     switch(action.type){
//         case types.ADD_ITEM : return [...state,{
//             pid : action.payload.pid,
//             qty : 1
//         }]
//         default : return state;
//     }
// }