  
//    const myaction=(name)=>{
//       return{
//         type:'CHANGE_NAME',
//         payload:name
//       }
//   };

// const myaction=()=>{
//     return (dispatch)=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res=>res.json())
//         .then(res2=>{
//             dispatch({type:'CHANGE_NAME',payload:res2[1].name})
    
//         })
//     }
// }

export const addwish= ()=>{
    return{
        type:'ADD-WISH',
        payload: 'study'
        
    }
}



 export const myaction=()=>{

    return async (dispatch)=>{
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const res2 = await data.json()
      .then(res2 =>{dispatch({type:'CHANGE_NAME', payload:res2[1].name})

         })
  }
  
}

  

//   export default myaction