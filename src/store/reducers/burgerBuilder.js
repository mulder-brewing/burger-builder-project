import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const addOrRemoveIngredient = (state, action) => {
    let count = state.ingredients[action.ingredientName];
    let totalPrice = state.totalPrice;
    let ingredientPrice = INGREDIENT_PRICES[action.ingredientName];
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            count++;
            totalPrice = totalPrice + ingredientPrice
            break;
        case actionTypes.REMOVE_INGREDIENT:
            count--;
            totalPrice = totalPrice - ingredientPrice;
            break;
        default:
    } 
    const updatedIngredient = { [action.ingredientName]: count};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: totalPrice,
        building: true
    };
    return updateObject(state, updatedState);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addOrRemoveIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return addOrRemoveIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                totalPrice: 4,
                building: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;