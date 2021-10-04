import { types } from '../types/types'

const initialState = {
    recipe: [],
    active: {
        name:"",
        shippingCost:0,
        currency: "",
        ingredients: [
          {
            product: "",
            brand: "",
            items: 0,
            quantity: "",
            price:0
          }
        ]
    },
    search:[]
}

export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.recipeAdd:
            return {
                ...state,
                recipe: [action.payload, ...state.recipe]
            }
        case types.recipeGet:
            return {
                ...state,
                recipe: [...action.payload]
            }

        case types.recipeActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
            case types.recipeListar:
                return {
                    state,
                    recipe: [...action.payload]
                }
            case types.recipeListarBusqueda:
                return {
                    ...state,
                    search: [...action.payload]
                }
        case types.LogoutClean:
            return {
                ...state,
                active: {
                    name:"",
                    shippingCost:"",
                    currency: "",
                    ingredients: [
                      {
                        product: "",
                        brand: "",
                        items: "",
                        quantity: "",
                        price:""
                      }
                    ]
                }
            }
        default:
            return state;
    }
}
