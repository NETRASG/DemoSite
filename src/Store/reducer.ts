
import { createStore } from 'redux';


interface DisplayState {
  isSignUpShow?: boolean;
  isExplorePageShow?:boolean;
}

const initialState: DisplayState = {
  isSignUpShow: false,
  isExplorePageShow:false
};

enum ActionType {
  CLICK = 'CLICK',
  MOUSE_ENTER = 'MOUSE_ENTER',
  MOUSE_LEAVE = 'MOUSE_LEAVE'
}

interface ClickAction {
  type : ActionType.CLICK;
}

interface MouseEnterAction {
  type : ActionType.MOUSE_ENTER;
}

interface MouseLeaveAction {
  type : ActionType.MOUSE_LEAVE;
}

type Action = ClickAction|MouseEnterAction|MouseLeaveAction;

function reducer(state = initialState, action: Action) : DisplayState{
  switch (action.type) {
    case ActionType.CLICK:
      return { isSignUpShow: !state.isSignUpShow };
    case ActionType.MOUSE_ENTER:
      
      return { isExplorePageShow: !initialState.isExplorePageShow };
    case ActionType.MOUSE_LEAVE:
      return { isExplorePageShow: initialState.isExplorePageShow };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;



