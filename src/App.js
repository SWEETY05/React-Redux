import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h2>Welcome React-redux App!</h2>
      
      <h3> Hi {props.myname}   {props.myhobbies}</h3>
    </div>
  );
}    

  const mapStateToProps = (state) => {
    return {
      myname: state.name,  

      myhobbies:state.hobbies
    };
  };


export default connect(mapStateToProps)(App);
