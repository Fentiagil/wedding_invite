import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cover from './cover.js'
import Welcome from './WelcomeSection.js';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Cover />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
