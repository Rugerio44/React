export const JuegoReducer = (state = [],action) => {

    switch (action.type) {
        
        case 'AGREGAR_JUEGO':
            return [...state, action.payload];
        
        case 'ELIMINAR_JUEGO':
            return state.filter(juego => juego.id!==action.payload);
        
        case "EDITAR_JUEGO":
            let indice = state.findIndex (juego => juego.id === action.payload.id);
            state[indice] = action.payload;
            
            console.log(state);

            return [...state];
        default:
        return state;
    }
}
