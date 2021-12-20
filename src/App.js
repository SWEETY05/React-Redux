import "./App.css";
import { connect } from "react-redux";
import myaction from './components/actions/myaction'

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h2>Welcome React-redux App!</h2>
      
      <h3> Hi {props.myname}   {props.myhobbies}</h3>
      <button onClick={()=>{props.chnageName()}}>change name</button>
    </div>
  );
}    

  const mapStateToProps = (state) => {
    return {
      myname: state.name,  

      myhobbies:state.hobbies
    };
  };

  const mapDispatchToProps = (dispatch)=>{
    return{
      chnageName:()=>{dispatch(myaction())}
    }

  }


export default connect(mapStateToProps,mapDispatchToProps)(App);
