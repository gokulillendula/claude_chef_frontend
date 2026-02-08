import React from "react"
import Recipie from "./ClaudeRecipe.jsx"
import IngridentList from "./IngridentsList.jsx"
import {getRecipeFromMistral} from '../ai.js'

export default function Main(){
    const [ingridents,setIngridents]=React.useState([])
    const [recipe,setRecipe]=React.useState('')
    const recipeSection=React.useRef(null)
    
    React.useEffect(()=>{
        if(recipe!="" && recipeSection.current!=null){
            recipeSection.current.scrollIntoView({behavior:'smooth'})
        }
    },[recipe])

    function deleteIngrident(key){
        setIngridents(prev => prev.filter(item => item !== key));
    }

    async function getRecipeButton() {
    try {
        const recipeGenerated = await getRecipeFromMistral(ingridents);
        setRecipe(recipeGenerated);
    } catch (err) {
        console.error("Failed to generate recipe", err);
    }
}


    function submit(formData){
        const newIngrident=formData.get('ingrident')
            if(newIngrident!=""){
                setIngridents(prev=>[...prev,newIngrident])
            }

    }



    return(
        <main>
            <form className="add-ingridents-form" action={submit}>
                <input 
                type="text" 
                placeholder="eg.oregano"
                aria-label="Add ingredents"
                name="ingrident"></input>
                <button > Add ingrident</button>
            </form>
            {ingridents.length>0 &&<IngridentList 
            ref={recipeSection}
            ingridents={ingridents} 
            getRecipeButton={getRecipeButton}
            deleteIngrident={deleteIngrident}
            />}
            
            {recipe&&<Recipie recipe={recipe}/>}

        </main>
    )
}