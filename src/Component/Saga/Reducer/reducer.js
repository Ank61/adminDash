let initialState={
    data:[]
}
export default function reducer( state=initialState,action){
    switch (action.type){
        case 'FETCH':
            return {
                ...state,
                data: state.data.concat(action.payload)
              };
            default :
            return state;
    }

}