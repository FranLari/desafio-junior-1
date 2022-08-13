import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core';
import DialogContentText from '@material-ui/core';
import DialogTitle from '@material-ui/core';
import { useState } from 'react';
import Axios from "axios";


export default function FormDialog(props){
    const [editValues, setEditValues] = useState ({
        id: props.id,
        dono: props.dono,
        endereco: props.endereco,
        telefone: props.telefone,
        nome: props.nome,
        idade: props.idade,
        tipo: props.tipo,
        raca: props.raca,

    });
    const handleEditPets = () =>{
            Axios.pull("http://localhost:3001/edit", {
                id: editValues.id,
                dono: editValues.dono,
                endereco: editValues.endereco,
                telefone: editValues.telefone,
                nome: editValues.nome,
                idade: editValues.idade,
                tipo: editValues.tipo,
                raca: editValues.raca,
            });
            handleClose();

    };
    const handleDeletePets = ()=>{
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
        handleClose();
        
    }

    const handleClickOpen = ()=>{
        props.setOpen (true);
    };

    const handleClose = ()=>{
        props.setOpen (false);
    };

    const handleChangeValues = value =>{
        setEditValues(prevValues=>({
            ...prevValues,
            [value.target.id]: value.target.value,
         }))
    }

    return (
  
            <Dialog open={props.open} onClose= {handleClose}
            aria-labelledby = "form-dialog-title">
                <DialogContent>
                    <DialogTitle id="form-dialog-title">Editar</DialogTitle>

                    <TextField
                    autoFocus
                    margin='dense'
                    id ="dono"
                    label = "nome do dono"
                    defaultValue={props.dono}
                    onChange ={handleChangeValues}
                    type = "text"
                    fullWidth
                    />
                     <TextField
                    autoFocus
                    margin='dense'
                    id ="endereco"
                    label = "endereço"
                    defaultValue={props.endereco}
                    onChange ={handleChangeValues}
                    type = "text"
                    fullWidth
                    />
                     <TextField
                    autoFocus
                    margin='dense'
                    id ="telefone"
                    label = "telefone"
                    defaultValue={props.telefone}
                    onChange ={handleChangeValues}
                    type = "text"
                    fullWidth
                    />
                     <TextField
                    autoFocus
                    margin='dense'
                    id ="nome"
                    label = "nome do pet"
                    defaultValue={props.nome}
                    onChange ={handleChangeValues}
                    type = "text"
                    fullWidth
                    />
                     <TextField
                    autoFocus
                    margin='dense'
                    id ="idade"
                    label = "idade do pet"
                    defaultValue={props.idade}
                    onChange ={handleChangeValues}
                    type = "text"
                    fullWidth
                    />
                     <TextField
                    autoFocus
                    margin='dense'
                    id ="tipo"
                    label = "tipo do pet"
                    defaultValue={props.tipo}
                    onChange ={handleChangeValues}
                    type = "text"
                    fullWidth
                    />
                     <TextField
                    autoFocus
                    margin='dense'
                    id ="raca"
                    label = "raça do pet"
                    defaultValue={props.raca}
                    onChange ={handleChangeValues}
                    type = "text"
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick= {handleClose} color= "primary">
                        Cancel
                    </Button>
                    <Button onClick = {handleDeletePets} color= "primary">Excluir</Button>
                    <Button onClick = {handleEditPets} color= "primary">Salvar</Button>
                    
                </DialogActions>
            </Dialog>
    );
}
