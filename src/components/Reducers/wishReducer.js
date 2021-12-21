
const wishReducer = (state = [], action) => {
    if(action.type==="ADD-WISH"){
        return  action.payload;
    }
           return state;
    
};



export default wishReducer ;
