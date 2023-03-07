

const users = (general={user:[], history:[], error:false}, action) => {

  if (action.type === "ADD_USER") {
    const item = general.user.find((u) => u.name === action.payload.name)
    if(item) {
      const error = { ...general, error: true}
      console.log(error);
      return error;
    }
    else {
      // const user = { ...general, user:[ ...general.user, {name:action.payload.name, position:action.payload.position, currentAmount:action.payload.currentAmount, amount:action.payload.amount, id:action.payload.id, date:action.payload.date}] };
      // const history = { ...general, history:[ ...general.history, action.payload] };
      // const all = { ...general, user:[ ...general.user, action.payload], history:[ ...general.history, action.payload] };
    const all = { ...general, user:[ ...general.user, {name:action.payload.name, position:action.payload.position, currentAmount:action.payload.currentAmount, amount:action.payload.amount, id:action.payload.id, date:action.payload.date}], 
    history:[ ...general.history, action.payload] };
    // localStorage.setItem("user", JSON.stringify(user));
    return all;
  }
}

  // else if (action.type === "DELETE_USER") {
  //   const item = general.user.find((u) => u.id === action.payload.oldId);
  //   if(item) { item.currentAmount = Number(item.currentAmount) + Number(action.payload.deduct)
  //   }
  //   else if (general.history.find((h) => h.id === action.payload.id) {
  //     const history = { ...general, history:general.history.filter((h) => h.id !== action.payload.id)};
  //     return history;
  //   }
  //   else if (general.user.find((u) => u.oldId === action.payload.id) {
  //     const history = { ...general, history:general.history.filter((h) => h.oldId !== action.payload.id),
  //                                   user:general.user.filter((u) => u.id !== action.payload.id)}
  //     return history;
  //   }
  //   // localStorage.setItem("user", JSON.stringify(user));
    
  // } 


  else if (action.type === "DELETE_USER") {
    const item = general.user.find((u) => u.id === action.payload.oldId);
    if(item) { item.currentAmount = Number(item.currentAmount) + Number(action.payload.deduct)
    }
    const all = { ...general, history:general.history.filter((h) => action.payload.id? h.id !== action.payload.id & h.oldId !== action.payload.id:h),
      user:general.user.filter((u) => u.id !== action.payload.id)}
    // localStorage.setItem("user", JSON.stringify(user));
    return (all);
  } 


  else if (action.type === "UPDATE_USER") {
    const item = general.user.find((u) => u.id === action.payload.oldId)
    if(item) {item.currentAmount = item.currentAmount - action.payload.deduct; item.position = action.payload.position;
       item.amount=action.payload.amount; item.date=action.payload.date;
      const  { name, position, amount, currentAmount, date }=item;
      const itemHistory={name, position, amount, currentAmount, date, deduct:action.payload.deduct, oldId:action.payload.oldId, id:action.payload.id}
      const history = { ...general, history:[ ...general.history,  itemHistory] };
      // localStorage.setItem("users", JSON.stringify(item));
      return history;
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
