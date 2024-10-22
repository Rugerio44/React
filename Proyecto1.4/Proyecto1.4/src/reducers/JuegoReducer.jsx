export const JuegoReducer = (state = [],action) => {

    switch (action.type) {
        
        case 'AGREGAR_JUEGO':
            return [...state, action.payload];
        
        case 'ELIMINAR_JUEGO':
            return state.filter(juego => juego.id!==action.payload);
        
        case 'EDITAR_JUEGO':
            
        default:
            return state;
    }
}
