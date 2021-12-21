// const initialstate = {
//   name: "sweety",
//   wish:['drawing','eating','coding']
// };




// hiiii
const nameReducer = (state = '', action) => {
       if(action.type==="CHANGE_NAME"){
            return action.payload
       }
       
              return state;
};



export default nameReducer;
