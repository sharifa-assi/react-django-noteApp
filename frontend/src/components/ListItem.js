import React from 'react';
import { Link } from "react-router-dom";

function ListItem({note}) {
  return (
    <Link to={`notes/${note.id}`}><h3>{note.body}</h3></Link>
  )
}

export default ListItem