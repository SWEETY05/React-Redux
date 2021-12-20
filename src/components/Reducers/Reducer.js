const initialstate = {
  name: "sweety",
  hobbies:'drawing'
};




// hiiii
const Reducer = (state = initialstate, action) => {
       if(action.type==="CHANGE_NAME"){
            return {
               ...state,
               name:action.payload

            }
       }
              return state;
};

export default Reducer;
