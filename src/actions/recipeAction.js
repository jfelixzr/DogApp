import { db } from '../firebase/firebase-config'
import {types} from '../types/types'
import Swal from 'sweetalert2'
import {load} from '../helpers/load '
import  {fileUpload} from '../helpers/fileUpload'
let fileUrl=[]
//Crear los datos
export const recipeNew = (recipes) => {
    console.log(recipes)
    return async (dispatch) => {
      
        const newRecipe= {
           
            name: recipes.name,
            shippingCost: recipes.shippingCost,
            currency:recipes.currency,
            ingredients:[
                {
                    product:recipes?.product,
                    brand:recipes?.brand,
                    items:recipes?.items,
                    quantity:recipes?.quantity,
                    price:recipes?.price
                }
            ]
        }

        try {
           await db.collection(`/Recipe`).doc().set(newRecipe)
            Swal.fire({
                position: 'top-end',
                text: 'Receta Creada',
                icon: 'success',
                title: recipes.name ,
                showConfirmButton: false,
                timer: 1500
              })
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: e,
                footer: ''
              })
        }
        dispatch(addNewRecipes(newRecipe))
        dispatch(Listar())

    }
}



export const startUploadingImage = (file) => {
    return async (dispatch) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await fileUpload(file)
        console.log(fileUrl)
        Swal.close()
       return fileUrl
    }
}


export const addNewRecipes = (recipe ) => ({
    type: types.recipeAdd,
    payload: {
        ...recipe
    }
})

//Listar los datos

export const Listar = (uid) => {
    return async (dispatch) =>{
        const recipeList =  await load(uid)
        dispatch(setRecipe(recipeList))
    }
}

export const setRecipe = (recipe) => {
    return {
        type: types.recipeGet,
        payload: recipe
    }
}

//Borrar
export const Delete = (id) => {
    return async (dispatch) => {

        await db.doc(`Recipe/${id}`).delete();
        dispatch(deleteRecipe(id));

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Receta eliminada',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(Listar())
    }
}

export const deleteRecipe= (id) => ({
    type: types.recipeDelete,
    payload: id
});

//Editar
export const activeRecipe = (recipe) => {
    return{
        type:types.recipeActive,
        payload:{
            ...recipe
        }
    }
}


export const Edit = (recipes) => {
    return async (dispatch) => {
        
        console.log('Recipe',recipes)
        if (!recipes.url) {
            delete recipes.url;
        }

        const Editrecipe = {
           
            name: recipes.name,
            shippingCost: recipes.shippingCost,
            currency:recipes.currency,
            ingredients:[
                {
                    product:recipes?.product,
                    brand:recipes?.brand,
                    items:recipes?.items,
                    quantity:recipes?.quantity,
                    price:recipes?.price
                }
            ]
        }

        const recipeFire = { ...Editrecipe  }
        delete recipeFire.id

        console.log(recipes.id)

        Swal.fire({
            title: 'Actualizando...',
            text: 'Por favor espere...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })
           console.log(recipes.id)
           await db.doc(`Recipe/${recipes.id}`).update(Editrecipe)
           
        Swal.fire('Saved', recipes.name, 'success');
        dispatch(Listar())
        dispatch(clearCard())
    }
}

export const clearCard = () => {
    return {
        type: types.LogoutClean
    }
}




export const listaSearch = (searchText) => {

    return async(dispatch) => {
        const data = await db.collection(`/Recipe`).where('name','==',searchText).get();
        const recipe = [];
    
        data.forEach(recipes=>{
            recipe.push({
                uid: recipes.id,
            ...recipes.data()
           })
        })
        console.log(recipe)
        dispatch(listarSe(recipe));

    }
}

export const listarSe = (recipes) => {
    return {
        type: types.recipeListarBusqueda,
        payload: recipes
    }
}