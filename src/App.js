import * as React from "react"
import './App.css';
import QR from './pages/QR';
import Start from './pages/Start';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Cookies from "js-cookie";


function App() {

  const [islogin, setIslogin] = React.useState(false);


  React.useEffect(() => {

    const login = Cookies.get("islogin");

    if (login) {
      setIslogin(true);
    }

  }, [islogin])


  return (
    <div className="App">

      {islogin === true ?
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Start />} />
            </Routes>
          </Router>
        </>
        :
        <QR setIslogin={setIslogin} />
      }
    </div>
  );
}

export default App;
