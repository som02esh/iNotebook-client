import React,{useContext, useState,useEffect,useRef} from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
function Notes(props) {
  const navigate=useNavigate()
    const context=useContext(noteContext)
  const {notes,getNotes,editNote}=context
  const ref= useRef(null)

  useEffect(()=>{
    if(localStorage.getItem("auth-token")){
      getNotes();
  }
  else{
    navigate("/login")
  }
// eslint-disable-next-line
  },[])

  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})

  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}
const handleClick=(e)=>{
  editNote(note.id,note.etitle,note.edescription,note.etag)
  
  ref.current.click()
}
  const updateNote=(currentNote)=>{
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }

  return (
    <>
    <div>
      <AddNote/>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
       Launch demo modal
      </button>
 <div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="etitle">Title</label>
          <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" onChange={onchange}/>
          <small id="emailHelp" className="form-text text-muted"> Please enter a suitable title for your note</small>
        </div>
        <div className="form-group">
          <label htmlFor="edescription">Description</label>
          <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onchange}/>
        </div>
        <div className="form-group">
          <label htmlFor="etag">Tag</label>
          <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onchange}/>
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
         <h2>Your notes</h2>
         <center style={notes.length===0?{display:"contents"}:{display:"none"}}><p>No Notes to display!!</p></center>
      <div className="row my-3">  
      {notes.map((note)=>{
        return <NoteItem key={note._id} updateNote={updateNote} note={note}/>
      })}
      </div>
    </div>
    </>
  )
}

export default Notes
