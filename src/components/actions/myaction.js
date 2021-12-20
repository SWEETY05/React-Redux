  
//    const myaction=(name)=>{
//       return{
//         type:'CHANGE_NAME',
//         payload:name
//       }
//   };

const myaction=()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res2=>{
            dispatch({type:'CHANGE_NAME',payload:res2[1].name})
    
        })
    }
}

  export default myaction