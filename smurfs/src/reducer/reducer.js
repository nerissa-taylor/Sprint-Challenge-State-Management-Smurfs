const initialState = {
    "name": "Brainey",
    "age": 200,
    "height": "5cm",
    "id": 0
};

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_SMURF":
            return {
                ...state,
                name: state.name,
                age: state.age,
                height: state.height,
                id: state.id
            };

        default:
            return state;
    }
};
