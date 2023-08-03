import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Homepage from "./allpages/Homes/Homepage.jsx";
import ProfileSide from "./components/ProfileSide/profileSide"
import LandingPage from "./components/LandingPage";

function App() {
  return (

    /*<LandingPage />*/
         /* <div class="sidedesign" style={{top:'38%',right:'-8rem'}}></div>
      <div class="sidedesign" style={{top:'38%',left:'-8rem'}}></div>*/

    <div className="App">
      <div>

          <Homepage />
          <ProfileSide/ >

        </div>  
    </div>  
  );
}

export default App;