import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from '@mui/icons-material/Add';
const CreateNote = ( props) => {
    const [expand,setExpand ]=useState(false);
    const [ note , setnote ]=useState({
        title:"" ,
        content:""
    });
    const input_event = (obj) => {
    const  {  value , name } =obj.target;
    setnote((prevdata) => {
        return { ...prevdata ,[name]:value };
    })
    }
    console.log(note);
    const buttonClick=()=>{
     props.passNote(note);
     setnote({
        title:"" ,
        content:""
     })
    }
    const expandit = () =>{
        setExpand(true);
    }
     const bToNorm = () =>{
        setExpand(false);
    }
    return (<>
  
        <div className="Create_Note" >
            <div className="Create_Note_items">
            {expand?
                <input 
                type="text"
                placeholder="Title" 
                autoComplete="off"
                 name="title" 
                 value={note.title}
                 onChange={input_event} />
            :null}
                <textarea  id="" cols="36" rows="5" placeholder="Write a note..." 
                name="content"
                value = {note.content}
                onChange={input_event}
                onClick={expandit}
                onDoubleClick={bToNorm}
               ></textarea>
                <button onClick={buttonClick} className="button plus">
                    <AddIcon className="plus_sign" />  
                    </button>
            </div>
        </div>
    </>);
}
export default CreateNote;