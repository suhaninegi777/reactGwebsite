// google keep app
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
    const [item,setItem]=useState([]);
    const Addnote = (note) =>{
        setItem((preData) => {
          return [...preData,note];
        })
    }
    const onDelete = (id) => {
        setItem((oldata) =>
            oldata.filter((currdata,indx) => {
                return indx !== id;
            })
        );
    };
return (
<>
<Header />
<CreateNote passNote={Addnote} />
{item.map((val,index) =>{
    return <Note
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    delete_item={onDelete}
    />
})}
<Footer />
</>
);
}
export default App;
