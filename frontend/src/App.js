import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./pages/NotesList";
import Note from "./pages/Note";

function App() {
  return (
    <BrowserRouter>
     
        <Header />
     
        <Route path="/" exact component={NotesList} />
        <Route path="/note/:id" component={Note} />
   
    </BrowserRouter>
  );
}

export default App;
