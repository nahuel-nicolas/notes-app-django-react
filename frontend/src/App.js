import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import NoteList from './NoteList'
import Note from './Note'

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<NoteList />}>
              <Route path=":note_id" element={<Note />}/>
            </Route>
          </Routes>
        </Router>
  );
}

export default App;
