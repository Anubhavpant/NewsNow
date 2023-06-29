import "./App.css";

import React,{useState} from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=> {

  const pageSize =5;

  const[progress,setProgress] = useState(0);

  const apiKey=process.env.REACT_APP_NEWS_API

 
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress}  apiKey={apiKey} 
                  headlines="Top Headlines"
                  key="general"
                  pageSize={pageSize}
                  country={"in"}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress}  apiKey={apiKey} 
                  headlines="Top Business Headlines"
                  key="business"
                  pageSize={pageSize}
                  country={"in"}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress}  apiKey={apiKey} 
                  headlines="Top Entertainment Headlines"
                  key="entertainment"
                  pageSize={pageSize}
                  country={"in"}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  headlines="Top General Headlines"
                  key="general"
                  pageSize={pageSize}
                  country={"in"}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  headlines="Top Health Headlines"
                  key="health"
                  pageSize={pageSize}
                  country={"in"}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress} apiKey={apiKey}  
                  headlines="Top Science Headlines"
                  key="science"
                  pageSize={pageSize}
                  country={"in"}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress}  apiKey={apiKey} 
                  headlines="Top Sports Headlines"
                  key="sports"
                  pageSize={pageSize}
                  country={"in"}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress}  apiKey={apiKey} 
                  headlines="Top Technology Headlines"
                  key="technology"
                  pageSize={pageSize}
                  country={"in"}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;