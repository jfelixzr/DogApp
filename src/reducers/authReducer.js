import { types } from '../types/types'
const initialState = {
    user: [],
    active: {
        name:"",
        email:"",
        
            password: "",
            img: "",
         
        
    },
    search:[]
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
                image: action.payload.image
            }
        case types.logout:
            return {}

       
        default:
            return state
    }
}