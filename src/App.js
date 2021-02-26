import React from 'react'
import Links from './components/Links'
import { ToastContainer } from 'react-toastify'; // import Toastify library
import 'react-toastify/dist/ReactToastify.css'; // importa CSS Toastify styles
// This App use Bootswatch Css Library

function App() {
  return (
    <div className="container py-4">
      <Links />

      {/*This tag is used to the ToastContainer Characters  */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
