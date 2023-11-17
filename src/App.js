// google keep app
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import CreateNote from "./CreateNote";
import Note from "./Note";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
const App = () => {
    const [notes, setNotes] = useState([]);
    const [expand, setExpand] = useState(false);
    const [id, setId] = useState("");
    const [addnote, setaddnote] = useState({
        title: "",
        content: ""
    });
    const expandit = () => {
        setExpand(true);
    }
    const bToNorm = () => {
        setExpand(false);
    }
    const noteRef = collection(db, 'note');//make firebase cloud database collection named note in which stored multiple documents
    useEffect(() => {
        const getNotes = async () => {
            const data = await getDocs(noteRef); //generate reference(a unique id or location of document or collection)
            console.log(data);
            setNotes(data.docs.map((docs) => ({ ...docs.data(), id:docs.id })))
        }
        getNotes(noteRef);
    }, [])

    // form

    const input_event = (obj) => {
        const { value, name } = obj.target;
        setaddnote((prevdata) => {
            return { ...prevdata, [name]: value };
        })
    }
    const buttonClick = async () => {
        const data = await addDoc(noteRef, addnote);//add a new document in a noteref collection or noteref database
        console.log(addnote);
    }
    const delete_Note = async (id) => {
        console.log(id);
        const deletenote = doc(noteRef, id);
        await deleteDoc(deletenote);
    }
    const update_Note = async (notes) => {
        console.log(notes);
        setaddnote({ title: notes.title , content: notes.content });
        setId(notes.id);
    }

    const updatedNote = async (id) =>{
       console.log(id);
        const updatenote = doc(db, "note" , id);
        await updateDoc(updatenote,addnote);
    }
    // explain in easy words

    return (
        <>
            <Header />
            {/* passNote={Addnote} */}
            <div className="Create_Note" >
                <div className="Create_Note_items">
                    {id || expand ?
                        <input
                            type="text"
                            placeholder="Title"
                            autoComplete="off"
                            name="title"
                            value={addnote.title}
                            onChange={input_event} />
                        : null}
                    <textarea id="" cols="36" rows="5" placeholder="Write a note..."
                        name="content"
                        value={addnote.content}
                        onChange={input_event}
                        onClick={expandit}
                        onDoubleClick={bToNorm}
                    ></textarea>
                    <div style={{ display: "flex", gap:"10px",margin:"10px 5px 10px 10px" }}>

                        <button onClick={buttonClick} className="button plus">
                            <AddIcon className="plus_sign" />
                        </button>
                        <button type="button" onClick={()=>updatedNote(id)}><EditNoteIcon /> </button>
                    </div>
                </div>

            </div>

            {notes.map((val, index) => {
                return <Note
                    key={index}
                    title={val.title}
                    content={val.content}
                    id={val.id}
                    getId={delete_Note}
                    getUpdateNoteId={update_Note}
                />
            })}
            <Footer />
        </>
    );
}
export default App;





//  props.passNote(addnote);
//  addnote({
//     title:"" ,
//     content:""
//  })

// const Addnote = (note) =>{
//     setItem((preData) => {
//       return [...preData,note];
//     })
// }
// const onDelete = (id) => {
//     setItem((oldata) =>
//         oldata.filter((currdata,indx) => {
//             return indx !== id;
//         })
//     );
// };
