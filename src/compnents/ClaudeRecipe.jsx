import React from "react"
import ReactMarkdown from 'react-markdown'
export default function Recipie(props){
    return(
        <section>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}