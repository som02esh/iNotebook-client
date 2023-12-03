import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
  const host="http://localhost:5000"
    const notesInitial= []
      
    const [notes,setNotes]=useState(notesInitial)
      //get all note
      const getNotes=async()=>{
        // api call
        const response=await fetch(`${host}/api/notes/fetchallnotes`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            "auth-token":localStorage.getItem("auth-token")
          },
        }) 
        const json=await response.json();
        // console.log(json)
        setNotes(json)
      }

    //Add a note
      const addNote=async(title,description,tag)=>{
        // api call
        const response=await fetch(`${host}/api/notes/addnotes`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            "auth-token":localStorage.getItem("auth-token")
          },
          body:JSON.stringify({title,description,tag})
        }) 
        const json=response.json();
        getNotes()
      }
    //Delete a note
      const deleteNote=async(id)=>{
        // api call
        const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json',
            "auth-token":localStorage.getItem("auth-token")
          },
        }) 
        const json=response.json();
        console.log(json)

        let newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

      }
    // //Edit a note
      const editNote=async(id,title,description,tag)=>{
        // api call
       await fetch(`${host}/api/notes/updatenote/${id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json',
            "auth-token":localStorage.getItem("auth-token")
          },
          body:JSON.stringify({title,description,tag})
        }) 
        // const json= await response.json();
        getNotes()
      }
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    ) 
}

export default NoteState;