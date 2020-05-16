import React from 'react';
import './App.css';
import Header from './Components/landingPageComponents/Header';
import Content from './Components/landingPageComponents/Content';
import Footer from './Components/landingPageComponents/footer';



class App extends React.Component{
  render(){
    return(
     <div className = 'container'>
       <div id = 'note-container'>
          <div id = 'form-wrapper'>

          </div>
          <div id = 'list-wrapper'>

          </div>
       </div>
     </div>
    )
  }
}

{/* <Header/>     
<Content/>
<Footer/> */}

export default App;
