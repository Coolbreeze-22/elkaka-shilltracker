// JSON.parse(localStorage.getItem('general'))

const users = (general={user: JSON.parse(localStorage.getItem('user')) || [], history:JSON.parse(localStorage.getItem('history')) || [], error:false}, action) => {

  if (action.type === "ADD_USER") {
    const item = general.user.find((u) => u.name === action.payload.name)
    if(item) {
      const error = { ...general, error: true}
      return error;
    }
    else {
      // const user = { ...general, user:[ ...general.user, {name:action.payload.name, position:action.payload.position, currentAmount:action.payload.currentAmount, amount:action.payload.amount, id:action.payload.id, date:action.payload.date}] };
      // const history = { ...general, history:[ ...general.history, action.payload] };
      // const myGeneral = { ...general, user:[ ...general.user, action.payload], history:[ ...general.history, action.payload] };
      
    const myGeneral = { ...general, user:[ ...general.user, {name:action.payload.name, position:action.payload.position, currentAmount:action.payload.currentAmount, amount:action.payload.amount, id:action.payload.id, date:action.payload.date}], 
    history:[ ...general.history, action.payload] };

    localStorage.setItem("user", JSON.stringify([...general.user,{name:action.payload.name, position:action.payload.position, currentAmount:action.payload.currentAmount, amount:action.payload.amount, id:action.payload.id, date:action.payload.date}]));
    localStorage.setItem("history", JSON.stringify([...general.history,action.payload ]));

    return myGeneral;
  }
}


  else if (action.type === "DELETE_USER") {
    const item = general.user.find((u) => u.id === action.payload.oldId);
    if(item) { item.currentAmount = Number(item.currentAmount) + Number(action.payload.deduct)
    }
    const myGeneral = { ...general, history:general.history.filter((h) => action.payload.id? h.id !== action.payload.id & h.oldId !== action.payload.id:h), user:general.user.filter((u) => u.id !== action.payload.id)}

    localStorage.setItem("history", JSON.stringify(general.history.filter((h) => action.payload.id? h.id !== action.payload.id & h.oldId !== action.payload.id:h)));
    localStorage.setItem("user", JSON.stringify(general.user.filter((u) => u.id !== action.payload.id)));

    return (myGeneral);
  } 


  else if (action.type === "UPDATE_USER") {
    const item = general.user.find((u) => u.id === action.payload.oldId)
    if(item) {item.currentAmount = item.currentAmount - action.payload.deduct; item.position = action.payload.position;
       item.amount=action.payload.amount; item.date=action.payload.date;
      const  { name, position, amount, currentAmount, date }=item;
      const itemHistory={name, position, amount, currentAmount, date, deduct:action.payload.deduct, oldId:action.payload.oldId, id:action.payload.id}
      const myGeneral = { ...general, history:[ ...general.history,  itemHistory] };

      localStorage.setItem("history", JSON.stringify([ ...general.history,  itemHistory] ));
      
      return myGeneral;
    };
  }

  else if (action.type === "CLEAR_ERROR") {
    const error = { ...general, error: action.payload }
     return error
   }

  else {
    return general;
  }
};

export default users;
