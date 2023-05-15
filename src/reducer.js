import { CLEAR_ALL, RESET_ALL, REMOVE_ITEM} from "./action";
import { data } from "./data";

const reducer = (state, action) => {
  if (action.type === CLEAR_ALL) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_ALL) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching "${action.type}" action`);
};

export default reducer;