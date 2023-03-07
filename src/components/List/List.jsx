import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./List.css";
import { useContext } from "react";
import { ShillTrackerContext } from "../context/context";
import moment from "moment";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const List = () => {
  const { isSearch, deleteWarning, setDeleteWarning } = useContext(ShillTrackerContext);
  const { history } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  const handleDelete = (h) => {
    dispatch({ type: "DELETE_USER", payload: h });
  };
  const searchUser = history.filter((h) => h.name.toLowerCase().includes(isSearch) || h.name.includes(isSearch))
  const changeHistory = isSearch ? searchUser : history; 

  return (
    <div className="list">
      <center style={{color:"white", fontWeight:"1000", fontSize:"20px" }}>HISTORY</center>

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
            <IconButton className={h?.oldId?.length ? "listButton" : "listButton1" } type="submit" onClick={() => setDeleteWarning(h.id) } ><Delete className={h?.oldId?.length ? "listButton" : "listButton1"} /></IconButton>
          </div>
          {deleteWarning === h.id && <div className="listWarning" style={{marginTop:"5px", textAlign:"right"}}> <span style={{fontWeight:"bolder", color:"black"}}>Delete?</span>
          <button  type="submit" onClick={()=> setDeleteWarning()} style={{backgroundColor:'green', color:"white", marginLeft: "5px"}}>No</button>
          <button  type="submit" onClick={()=> {handleDelete(h); setDeleteWarning()}} style={{backgroundColor:'red', color:"white", margin: "0px 10px 0px 10px"}}>Yes</button></div>}
            
        </div>
      ))}
      </div>
    </div>
  );
};

export default List;
