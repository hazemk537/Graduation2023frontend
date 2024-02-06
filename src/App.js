// import MainLandingPage from './components/MainLandingPage';
// import Button from './components/Button';
// import Create_Account from './components/Create_Account';
// import Login from './components/Login';
import Nav_Bar from './components/Nav_Bar';

// class  App extends Component {
//     render() {
//         return (
//         <BrowserRouter>
//             <div className="App">
//                 <Nav_Bar/>
         
//             </div>
            
//                  <Routes>

//                 {/* <Route path="/" EXACT Component={MainLandingPage}></Route> */}
//                 {/* <Route path="/About" Component={About}></Route> */}
//                 <Route path="/Login" EXACT Component={Login}></Route>
//                 {/* <Route path="/Create_Account" Component={Create_Account}></Route> */}
//                 {/* <Route path="/Register" Component={Register}></Route> */}
//                 {/* <Route path="/Reset_Password" Component={Reset_Password}></Route> */}

//             </Routes>
            
//         </BrowserRouter>

//         );
//     }
// }



function App() {
  return (
 
    <div className="App">
      <Nav_Bar />
  
    </div>
  
  
  );
}

export default App;
