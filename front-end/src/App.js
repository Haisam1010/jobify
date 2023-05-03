import {Register,Error,Landing} from "../src/screens" 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {
  Stats,
  Shared,
  Profile,
  AllJobs,
  AddJob
  } from '../src/screens/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Shared/>}>
      <Route path="stats" element={<Stats/>}/>
      <Route path="all-jobs" element={<AllJobs/>}/>
      <Route path="add-jobs" element={<AddJob/>}/>
      <Route path="profile" element={<Profile/>}/>
      </Route>
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
