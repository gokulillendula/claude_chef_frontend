import React from 'react'
export default function IngridentList(props){
        const inglist=props.ingridents.map((ingrident)=>(
        <li key={ingrident} className='ingridents'>{ingrident}
        <button className='deleteIngrident' onClick={()=>props.deleteIngrident(ingrident)}>Delete</button>
        </li>
    ))
 
    return(
        <section>
                <h2>Ingridents on hand</h2>
                <ul>
                    {inglist}
                </ul>
                {props.ingridents.length>3&&
                <div className="getRecipeSection">
                    <div ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingridents</p>
                    </div>
                    <button className="getRecipeButton" onClick={props.getRecipeButton}>Get a recipe</button>
                </div>}
            </section>
    )
}