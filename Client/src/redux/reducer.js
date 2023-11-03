import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: []
};

 const rootReducer = (state=initialState, action)=>{
  switch (action.type) {
  
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload};

    case REMOVE_FAV:
      return { ...state,
         myFavorites: action.payload
        };


    case "FILTER":
      let copy3= state.allCharacters.filter((char)=>{
        return char.gender === action.payload;
      });
      return {
        ...state,
        myFavorites: copy3,
      };
    case "ORDER":
      let copy4;
      if(action.payload === "A"){
        copy4= state.allCharacters.sort((a,b)=> a.id - b.id)
        
      }
      if(action.payload === "D"){
        copy4= state.allCharacters.sort((a,b)=> b.id - a.id)
      }
      return {
        ...state, myFavorites: copy4
      }
    default:
      return {...state}
  }

};

export default rootReducer;


