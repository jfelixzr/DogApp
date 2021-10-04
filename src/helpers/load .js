import { db } from '../firebase/firebase-config'

export const load = async (uid) => {

    const RecipeStore = await db.collection(`/Recipe`).get()
    const recipeList = [];

    RecipeStore.forEach(hijo=>{
        recipeList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return recipeList
}

