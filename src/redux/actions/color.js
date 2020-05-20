
//reprezinta datele despre actiune de vor fi transmise catre "reducers"
//reprezinta functii care returneaza un obiect cu 2 componente: type si payload ce vor si preluate de "reduers" cand sunt apelate din componente

export function changeFontAction(payload){
    return {
        type: 'CHANGE_FONT_COLOR',
        payload: payload
    }
}

export function changeBackgroundAction(payload){
    return {
        type: 'CHANGE_BACKGROUND_COLOR',
        payload: payload
    }
}