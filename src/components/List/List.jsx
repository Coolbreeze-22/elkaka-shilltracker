import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./List.css";
import { useContext } from "react";
import { ShillTrackerContext } from "../context/context";
import moment from "moment";

const List = () => {
  const { isSearch } = useContext(ShillTrackerContext);
  const { history, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  const handleDelete = (h) => {
    dispatch({ type: "DELETE_USER", payload: h });
  };
  const searchUser = history.filter((h) => h.name.toLowerCase().includes(isSearch) || h.name.includes(isSearch))
  const changeHistory = isSearch ? searchUser : history; 

  return (
    <div className="list">
      {error && <div className="listError">User already exist, kindly select another name</div>}
      <h3><center>HISTORY</center></h3>

      <div className="listGrid">
        <div className="listItem">Name</div>
        <div className="listItem">P</div>
        <div className="listItem">A</div>
        <div className="listItem">C/A</div>
        <div className="listItem">Date</div>
      </div>

      <div className="list1">
      {changeHistory?.map((h) => (
        <div key={h.id} >
          <div className="listGrid1">
            <div className="listItem">{h.name}</div>
            <div className="listItem">{h.position}</div>
            <div className="listItem">{h.amount}</div>
            <div className="listItem">{h.currentAmount}</div>
            <div className="listItem">{moment(h.date).format("MM/DD/YYYY")}</div>
            <button className={h?.oldId?.length ? "listButton" : "listButton1" } type="submit" onClick={() => handleDelete(h)} >D</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default List;
