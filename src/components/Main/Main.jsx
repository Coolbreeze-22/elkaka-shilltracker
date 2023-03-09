import React from "react";
import "./Main.css";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ShillTrackerContext } from "../context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.users);
  const {formData, setFormData, initial, setIsSearch, isSearch, setUserPosition, formError, setFormError, setActiveEditButton, setSnackBar } = useContext(ShillTrackerContext);
  let navigate = useNavigate();

  const handleCreate = () => {
    if (!formData.name) {
      setFormError("Add name")
    }
    else if (formData.position <1 || formData.position >10) {
      setFormError("Add position from 1 to 10")
    }
    else if (!formData.amount) {
      setFormError("Add amount")
    }
    else if (!formData.date) {
      setFormError("Add date")
    }
    else if (formData.name && formData.amount && formData.date && formData.position >=1 && formData.position <=10) {
      const person = { ...formData, id: uuidv4(), currentAmount: formData.amount, oldId: "", deduct: "" };
      dispatch({ type: "ADD_USER", payload: person });
      setFormData(initial);
      setSnackBar("Created successfully");
      setTimeout(() => {
        setSnackBar("");
        // console.log("Timed events, waited 3 seconds")
      }, 4000);
      }

    };

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
        <input list="browsers" name="browsers" id="browser" value={formData.name} className="mainForm" onChange={(e) => {setFormData({ ...formData, name: e.target.value }); setFormError(); dispatch({type: "CLEAR_ERROR", payload: false}) }} />
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
            onChange={(e) => {setFormData({ ...formData, position: e.target.value }); setFormError()}} />
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
          onChange={(e) => {setFormData({ ...formData, amount: e.target.value }); setFormError()}}
        />
        <input
          type="date"
          value={formData.date}
          placeholder="date"
          className="date mainForm"
          onChange={(e) => {setFormData({ ...formData, date: e.target.value }); setFormError()}}
        />
      </div>
      <div className="mainGridBut">
        <button className="mainButton mainForm" onClick={handleCreate}>Create</button>
        <input className="input" type="text" value={isSearch} placeholder="search" onChange={(e) => setIsSearch(e.target.value)}/>
        <button className="mainButton1 mainForm" onClick={() => {setFormData(initial); setIsSearch(""); setUserPosition(); setFormError(); setActiveEditButton(); dispatch({type: "CLEAR_ERROR", payload: false})}}>Clear</button>
      </div>

      <center>{formError}</center>
      {error && <center>User already exist, kindly select another name</center>}

    </div>
  );
};

export default Main;
