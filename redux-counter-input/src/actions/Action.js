export const ACTIONS = {
    INCREMENT:"INCREMENT",
    DECREMENT: "DECREMENT",
    INCREMENTBYAMOUNT: "INCREMENTBYAMOUNT",
    DECREMENTBYAMOUNT: "DECREMENTBYAMOUNT",
    SAVE: "SAVE",
  };
  
  export const incrementCount = (num) => {
    return { type: "INCREMENTBYAMOUNT", payload:num };
  };

  export const decrementCount = (num) => {
    return { type: "DECREMENTBYAMOUNT", payload:num };
  };

  export const incrementcont = () => {
    return { type: "INCREMENT" };
  };

  export const decrementCont = () => {
    return { type: "DECREMENT" };
  };
  

  