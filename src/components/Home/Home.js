// import logo from './logo.svg';
import "./Home.css";
import Result from "../Result/Result";
import Main from "../Main/Main.jsx";
import List from "../List/List.jsx";
import { ShillTrackerContext } from "../context/context";
import { useContext } from "react";

function Home() {
  const { snackBar } = useContext(ShillTrackerContext);

  return (
    <div className="appFixed">
      <div className="appNav">
        <center>SHILL TRACKER </center>
        <em style={{fontSize:"15px"}}>Copyright CoolBreeze 2022</em>
        <span className="appSnackBar">{snackBar}</span>
      </div>

      <div className="appGrid">
        <div className="appResultSmall">
          <Result />
        </div>

        <div className="appMainList">
          <div className="appMain">
            <Main />
          </div>
          <div>
            <List />
          </div>
        </div>

        <div>
          <div className="appResultBig">
            <Result />
          </div>
          <h5 className="appTermsBig">TERMS:
            <pre>P = POSITION,  A = AMOUNT,  C/A = CURRENT
              AMOUNT,  D = DATE
            </pre>
          </h5>
        </div>
        
        <h4 className="appTermsSmall">TERMS:
            <pre>P = POSITION,  A = AMOUNT,</pre>
              <pre>C/A = CURRENT, AMOUNT,  D = DATE</pre>
          </h4>

      </div>
    </div>
  );
}

export default Home;
