import React,{useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext";

function AddNote() {
  const context=useContext(noteContext)
  const {addNote}=context
  const [note,setNote]=useState({title:"",description:"",tag:""})
  const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
  }
  const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div>
       <div className="container my-3">
      <h2>Add a note</h2>
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={note.title} name="title" aria-describedby="emailHelp" onChange={onchange}/>
          <small id="emailHelp" className="form-text text-muted"> Please enter a suitable title for your note</small>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description"  value={note.description} name="description" onChange={onchange}/>
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input type="text" className="form-control" id="description" name="tag" value={note.tag} onChange={onchange}/>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default AddNote
