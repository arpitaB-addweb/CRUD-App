const initial={
    counter:0,
}
const reducer = (state=initial,action) =>{

    switch(action.type)
    {
        case 'INCREMENTBYAMOUNT':
              return{
                  ...state,
                  counter:Number(state.counter)+ Number(action.payload)
              }
              case 'DECREMENTBYAMOUNT':
                return{
                    ...state,
                    counter:Number(state.counter)- Number(action.payload)
                }
              case 'INCREMENT':
                return{
                    ...state,
                    counter:state.counter+1
                }
        case 'DECREMENT':
            return{
                ...state,
                counter:state.counter-1
            }
        default:
            return state;
    }
}

export default reducer;