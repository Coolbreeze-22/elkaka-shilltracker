import React from "react";
import "./Main.css";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ShillTrackerContext } from "../context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const {formData, setFormData, initial, setIsSearch, isSearch, setUserPosition} = useContext(ShillTrackerContext);
  let navigate = useNavigate();

  const createPerson = () => {
    // if (formData.name && formData.position && formData.amount && formData.date) {
      
    // };
    const person = { ...formData, id: uuidv4(), currentAmount: formData.amount, oldId: "", deduct: "" };
    dispatch({ type: "ADD_USER", payload: person });
    setFormData(initial);
    }

    useEffect(() => {
      if(isSearch){
        navigate(`/?name=${isSearch}`)
      }
      else{navigate(`/`)}
    
    }, [isSearch, navigate])
    
 
  return (
    <div id="main">
      <div className="mainGrid">
        <div>Name</div> <div>Position</div>
        <input list="browsers" name="browsers" id="browser" value={formData.name} className="name mainForm" onChange={(e) => {setFormData({ ...formData, name: e.target.value }); dispatch({type: "CLEAR_ERROR", payload: false}) }} />
        <datalist id="browsers">
          <option value="Alex" />
          <option value="Amanda" />
          <option value="Benzema" />
          <option value="Elkaka" />
          <option value="Jango" />
          <option value="Justina" />
          <option value="Mikelle" />
          <option value="Oliver" />
          <option value="Oscar" />
          <option value="Pablo" />
        </datalist>

        <input list="browsers1" name="browsers1" id="browser1" type="number" value={formData.position} className="position mainForm"
            onChange={(e) => setFormData({ ...formData, position: e.target.value })} />
        <datalist id="browsers1">
          <option value="1" />
          <option value="2" />
          <option value="3" />
          <option value="4" />
          <option value="5" />
          <option value="6" />
          <option value="7" />
          <option value="8" />
          <option value="9" />
          <option value="10" />
        </datalist>

        <div>Amount</div> <div>Date</div>
        <input
          type="number"
          value={formData.amount}
          placeholder="Amount"
          className="amount mainForm"
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
        <input
          type="date"
          value={formData.date}
          placeholder="date"
          className="date mainForm"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div className="mainGridBut">
        <button className="mainButton mainForm" onClick={createPerson}>Create</button>
        <input className="input" type="text" value={isSearch} placeholder="search" onChange={(e) => setIsSearch(e.target.value)}/>
        <button className="mainButton1 mainForm" onClick={() => {setFormData(initial); setIsSearch(""); setUserPosition(""); dispatch({type: "CLEAR_ERROR", payload: false})}}>Clear</button>
      </div>
    </div>
  );
};

export default Main;
