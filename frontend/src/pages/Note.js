import React,{useState,useEffect} from 'react';


function Note({match}) {

let noteId = match.params.id;
console.log(noteId);

const [note,setNote]=useState(null);
useEffect(()=>{
 getNote();
},[noteId]);

let getNote = async ()=>{
    let response = await fetch(`/api/notes/${noteId}`);
   let data = await response.json();
   setNote(data);
}

  return (
  <p>{note?.body}</p>
  )
}

export default Note