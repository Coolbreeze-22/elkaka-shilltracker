import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShillTrackerContext } from "../context/context";
import "./Result.css";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "@mui/material";

const Result = () => {
  const Dispatch = useDispatch();
  const { setFormData, initial, userPosition, setUserPosition, activeEditButton, setActiveEditButton, currentPage, setCurrentPage, setSnackBar } = useContext(ShillTrackerContext);
  const {user} = useSelector(state => state.users);

  const deduct = () => {
    if (userPosition === "1") {
     return 0
    }
    else if (userPosition === "2") {
      return 0
    }
    else if (userPosition === "3") {
      return 0
    }
    else if (userPosition === "4") {
      return 500
    }
    else if (userPosition === "5") {
      return 500
    }
    else if (userPosition === "6") {
      return 1000
    }
    else if (userPosition === "7") {
      return 1000
    }
    else if (userPosition === "8") {
      return 1500
    }
    else if (userPosition === "9") {
      return 1500
    }
    else if (userPosition === "10") {
      return 2000
    }
  }
  
  const handleUpdate = (u) => {
    if (userPosition.length && userPosition >= 1 && userPosition <=10) {
      const personUpdate = { deduct:deduct(), name:u.name, position:userPosition, amount:u.amount, oldId:u.id, id:uuidv4(), date: new Date().toString()  };
    Dispatch({ type: "UPDATE_USER", payload: personUpdate });
    setUserPosition("");
    setActiveEditButton();
    setSnackBar("Updated successfully");
      setTimeout(() => {
        setSnackBar("");
        // console.log("Timed events, waited 3 seconds")
      }, 4000);
    }
    setFormData(initial);
  };
  
  const first = (currentPage -1) *10;
  const last = currentPage *10;
  const totalPage=Math.ceil(user.length/10)

  return (
    <div>
      <div className="result">
      <center style={{color:"white", fontWeight:"1000", fontSize:"20px" }}>RESULT</center>

        <div className="resultGrid">
          <div className="resultItem">Name</div>
          <div className="resultItem">P</div>
          <div className="resultItem">C/A</div>
          <div className="resultItem">...</div>
          <div className="resultItem">...</div>
        </div>
        {user?.slice(first,last).map((u) => 
        <div className="resultGrid1" key={u.id}>
          <div className="resultItem1">{u.name}</div>
          <div className="resultItem1">{u.position}</div>
          <div className="resultItem1">{u.currentAmount}</div>
          <input type="number" placeholder="P" className="resultInput" onChange={(e) => {setUserPosition(e.target.value); setActiveEditButton(u.id)} } />
          <button type="submit" disabled={u.id===activeEditButton ? false : true} className={u.id===activeEditButton? "activeResultEditButt" : "resultEditButt"} onClick={() => {handleUpdate(u)} }>Edit</button></div>
        )}

        <div className="resultPaginationSmall"><Pagination count={totalPage} page={currentPage} onChange={(e,value)=> setCurrentPage(value)}/></div>
      </div>

      <div className="resultPaginationBig"><Pagination count={totalPage} page={currentPage} onChange={(e,value)=> setCurrentPage(value)}/></div>

    </div>
  );
};

export default Result;
