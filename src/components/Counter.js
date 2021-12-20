import React from "react";
import connect from "react-redux;";

const Counter = (props) => {
 
//   increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
  return (
    <div>
      {mycount}
      <button onClick={props.INCREMENT}>increment</button>
    </div>
  );

  const mapStateToProps = (state) => {
    return {
      mycount: state.props.count
    };
  };

  const mapDispatchToProps=(dispatch)=>{
      return{
          dispatch({
              action:INCREMENT
          })
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
