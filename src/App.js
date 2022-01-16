import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CreatorsAccount from "./Pages/CreatorsAccount/CreatorsAccount";
import Spinner from "react-spinners";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/CreatorsAccount"
            element={
              <Suspense fallback={<Spinner />}>
                <CreatorsAccount />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
