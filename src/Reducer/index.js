
const initialState = {
    zapas: [],
    allZapas: [],
    detail: [],
    cart: [],
    users: [],
    user: {},
    userLog: {},
    reviews: [],
    orders: [],
    order: {},
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_ZAPAS':
            return {
                ...state,
                zapas: action.payload,
                allZapas: action.payload
            };

        case 'GET_MODELO_ZAPAS':
            return {
                ...state,
                zapas: action.payload,
            };
        case 'GET_ZAPA_BY_ID':
            return {

                ...state,
                detail: action.payload
            };

        case "GET_FILTERS":
            return {
                ...state,
                zapas: action.payload
            };

        case "POST_PRODUCT":
            return {
                ...state,
            };

        case "ADD_TO_CART":
            const item = action.payload;
            return {
                ...state,
                cart: [...state.cart, item]
            };

        case "REMOVE_TO_CART":
            return {
                ...state,
                cart: state.cart.filter(e => e._id !== action.payload)
            };

        case "CREATE_USER":
            return {
                ...state,
                // users: state.users.push(action.payload)
                users: [...state.users, action.payload]
            };
        case "GET_USER":
            return {
                ...state,
                users: action.payload
            };
        case "LOG_USER":
            return {
                ...state,
                userLog: { userInfo: action.payload }
            };
        case "ERR_LOGEO":
            return {
                ...state,
                userLog: { error: action.payload }
            };
        case "UPDATE_USER":
            return {
                ...state
            };
        case "UPDATE_PRODUCT":
            return {
                ...state
            };
        case "GET_REVIEWS":
            return {
                ...state,
                reviews: action.payload
            };
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.payload
            };
        case "UPDATE_ORDER":
            return {
                ...state
            };
        case "GET_SINGLE_ORDER":
            return {
                ...state,
                order: action.payload
            };
        case "SINGLE_USER":
            return {
                ...state,
                user: action.payload
            };
        case "UPDATE_USER":
            return {
                ...state,
            };

        default:
            return state
    }

}

export default rootReducer;