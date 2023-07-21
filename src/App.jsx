
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState('in')
  console.log(country)

  return (
    <div className=" flex flex-col justify-center ps-[4%] pe-[4%] tablet:ps-[8%] tablet:pe-[8%] tabletlg:ps-[12%] tabletlg:pe-[12%] laptop:ps-[16%] laptop:pe-[16%] overflow-x-hidden">
      <Router>

        <Navbar change={country} setChange={setCountry}/>
          <Routes>
            
            <Route exact path="/" element={
              <NewsSection
                //setProgress={setProgress}
                country={country}
                key="general"
                category="general"
              />
              }
            />

            <Route exact path="/business" element={
              <NewsSection
                //setProgress={setProgress}
                country={country}
                key="business"
                category="business"
              />
              }
            />

             <Route exact path="/technology" element={
              <NewsSection
                //setProgress={setProgress}
                country={country}
                key="technology"
                category="technology"
              />
              }
            />

             <Route exact path="/science" element={
              <NewsSection
                //setProgress={setProgress}
                country={country}
                key="science"
                category="science"
              />
              }
            />

            <Route exact path="/sports" element={
              <NewsSection
                //setProgress={setProgress}
                country={country}
                key="sports"
                category="sports"
              />
              }
            />

            <Route exact path="/entertainment" element={
              <NewsSection
                //setProgress={setProgress}
                country={country}
                key="entertainment"
                category="entertainment"
              />
              }
            />

            <Route exact path="/health" element={
              <NewsSection
                //setProgress={setProgress}
                country={country}
                key="health"
                category="health"
              />
              }
            />

          </Routes>
      </Router>
    </div>
  );
}

export default App;