import React from "react";
import "./card.css";
import { Dialog } from "@material-ui/core";


export default function Card (props){
    const[open, setOpen ] = React.useState(false);
    const handleClickCard = ()=>{
        setOpen (true);
    }
    return(
        <>
        <FormDialog open= {open} setOpen={setOpen} dono={props.dono} endereco={props.endereco} telefone={props.telefone} nome={props.nome} idade={props.idade} tipo={props.tipo} raca={props.raca}
        listCard = {props.listCard}
        setListCard = {props.setListCard}
        id = {props.id}
        />
        <div className="card--container" onClick={()=>handleClickCard()}>
            <h1 className="card--title">{props.dono}</h1>
            <h1 className="card--endereco">{props.endereco}</h1>
            <h1 className="card--telefone">{props.telefone}</h1>
            <h1 className="card--nome">{props.nome}</h1>
            <h1 className="card--idade">{props.idade}</h1>
            <h1 className="card--tipo">{props.tipo}</h1>
            <h1 className="card--raca">{props.raca}</h1>
        </div>
        </>
    );
}
