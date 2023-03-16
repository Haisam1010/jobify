import { Dashboard,Error,Register,Landing } from "./screens";
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>

   <Routes>
   <Route path="/" element={<Dashboard />}></Route>
   <Route path="/landing" element={<Landing />}></Route>
   <Route path="*" element={<Error />}></Route>
   <Route path="/register" element={<Register />}></Route>
   </Routes>
   
    </BrowserRouter>
  );
}

export default App;
