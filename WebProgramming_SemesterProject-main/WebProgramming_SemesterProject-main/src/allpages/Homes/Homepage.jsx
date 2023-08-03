import React from "react";
import './Homepage.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Hobbies from "../../components/Hobbies/Hobbies.jsx"

const Homepage=()=>{
    return(

        <Router>
        <div class="thehomepage">

            <div class="person">
                Profile
            </div>

            <div class="posts">
                Posts
            </div>

            <div class="hobbies">
                <Link to={'/my-hobby'}>
                     Hobbies
                </Link>

            </div>

            <div class="communityevents">
                Community Service
            </div>

            <div>
            <Routes>
              <Route path="/my-hobby" element={<Hobbies />} />
            </Routes>
          </div>

        </div>
        </Router>

    )
}
export default Homepage