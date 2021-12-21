import "./App.css";
import { connect } from "react-redux";
import {myaction} from './components/actions/myaction'
import {addwish} from './components/actions/myaction'

function App(props) {
  console.log(props);

    const mywishlist = props.mywishes.map( (itm)=>{  return <h3 key={Math.random()}>{itm}</h3> } )

    
  return (
    <div className="App">
      <h2>Welcome React-redux App!</h2>
      
      <h3> Hi {props.myname}  and { mywishlist}</h3>
      <button onClick={()=>{props.chnageName()}}>change name</button>
      <button onClick={()=>{props.addWish()}}>Add wish</button>
     
    </div>
  );
}    

  const mapStateToProps = (state) => {
    return {
      myname: state.name,  

      mywishes:state.wish
    };
  };

  const mapDispatchToProps = (dispatch)=>{
    return{
      chnageName:()=>{dispatch(myaction())},
      addWish:()=>{ dispatch(addwish())}

    }

  }


export default connect(mapStateToProps,mapDispatchToProps)(App);
