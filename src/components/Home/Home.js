// import logo from './logo.svg';
import "./Home.css";
import Result from "../Result/Result";
import Main from "../Main/Main.jsx";
import List from "../List/List.jsx";

function Home() {
  return (
    <div className="appGrid">
      <div className="appResultSmall">
        <Result />
      </div>

        <div className="appMainList">
          <div className="appMain"><Main /></div>
          <div><List /></div>
        </div>

      <div className="appResultBig">
        <Result />
      </div>
    </div>
  );
}

export default Home;
