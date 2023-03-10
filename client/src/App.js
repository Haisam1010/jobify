import { Dashboard,Error,Register,Landing } from "./screens";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Dashboard />}></Route>
   <Route path="/landing" element={<Landing />}></Route>
   <Route path="/error" element={<Error />}></Route>
   <Route path="/register" element={<Register />}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
