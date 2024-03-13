const ThemeReducer = (state,action) =>{

    switch(action.type){
        case "CHANGE_THEME":
            return{
                ...state,
                theme : state.theme ? false : true,
            };
    }

}
export default ThemeReducer;