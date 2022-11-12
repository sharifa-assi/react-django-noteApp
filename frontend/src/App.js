import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./pages/NotesList";
import Note from "./pages/Note";

function App() {
  return (
    <BrowserRouter>
    <div className="container dark">
      <div className="app">
        <Header />
        <Route path="/" exact component={NotesList} />
        <Route path="/note/:id" component={Note} />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
