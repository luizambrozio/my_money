export default (state = { selected: '' }, action) => {
    switch (action.type) {
        case 'TAB_SELECTED' :
            return { ...state, selected: action.payload } 
            
        default:
            return state;
    }
};