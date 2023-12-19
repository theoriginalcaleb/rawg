export    const reducer = (state,action)=>{
    switch(action.type){
        case "GET_PRODUCT":
                return {...state,products:action.payload};
        case "ADD_TO_FOLLOWING":
            // eslint-disable-next-line no-case-declarations
            const isExisted = state.following.find(item=>item.id === action.payload.id)
            if(isExisted){
                return state
            }else{
                return {...state,following:state.following.length>0?[...state.following,action.payload]:[action.payload]};
            }
        case "REMOVE_FROM_FOLLOWING":
                return {...state,following:state.following.filter(item => item.id !== action.payload.id)};
        case "GET_REVIEWS":
               return {...state,reviews:action.payload}              
        default:
                return state;
    }
};

