
import { createStore } from 'redux';


interface DisplayState {
  isSignUpShow: boolean;
}

const initialState: DisplayState = {
  isSignUpShow: false,
};

enum ActionType {
  CLICK = 'CLICK',
}

interface ClickAction {
  type : ActionType.CLICK;
}

type Action = ClickAction;

function reducer(state = initialState, action: Action) : DisplayState{
  switch (action.type) {
    case ActionType.CLICK:
      return { isSignUpShow: !state.isSignUpShow };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;



