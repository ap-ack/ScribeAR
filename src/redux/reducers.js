import { combineReducers } from 'redux';

const textSizeReducer = (state = 48, action) => {
     switch (action.type) {
          case 'INCREMENT_TEXTSIZE':
               return state + 1;
          case 'DECREMENT_TEXTSIZE':
               return Math.max(1, state - 1);
          default:
               return state;
     }
}

const lineWidthReducer = (state = 10, action) => {
     switch (action.type) {
          case 'INCREMENT_LINEWIDTH':
               return state + 1;
          case 'DECREMENT_LINEWIDTH':
               return Math.max(1, state - 1);
          default:
               return state;
     }
}

const numLinesReducer = (state = 4, action) => {
     switch (action.type) {
          case 'INCREMENT_NUMLINES':
               return state + 1;
          case 'DECREMENT_NUMLINES':
               return Math.max(1, state - 1);
          default:
               return state;
     }
}

const lockScreenReducer = (state = true, action) => {
     if (action.type == 'FLIP_LOCKSCREEN')
          return !state;
     else return state;
}

const invertColorsReducer = (state = false, action) => {
     if (action.type == 'FLIP_INVERTCOLORS')
          return !state;
     else return state;
}

const allReducers = combineReducers({
     textSize: textSizeReducer,
     lineWidth: lineWidthReducer,
     numLines: numLinesReducer,
     lockScreen: lockScreenReducer,
     invertColors: invertColorsReducer,
});

export default allReducers;
