const initialState = {
    background: '#ffffff',
    fontColor: '#000000'
}
//functia din reducers primeste doua argumente:
//--state-ul pe care-l va modifica si care trebuie sa aiba o valoare default
//--action care va fi primita de la "actions" prin intermediul functiei dispatch si va contine: type si payload
export function changeColorReducer(state=initialState, action){
    switch (action.type) {
        case 'CHANGE_FONT_COLOR':
            const fontState = {
                ...state,
                fontColor: action.payload.fontColor
            }
            return fontState;
        case 'CHANGE_BACKGROUND_COLOR':
            const backgroundState = {
                ...state,
                background: action.payload.background
            }
            return backgroundState;
        default:
            return state;
    }
}