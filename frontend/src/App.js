import React from 'react';
import './App.css';
// import Header from './Components/landingPageComponents/Header';
// import Content from './Components/landingPageComponents/Content';
// import Footer from './Components/landingPageComponents/footer';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      noteList:[],
      activeItem:{
        id:null,
        title:'',
        note:'',
        completed:false,     
      },
      editing:false,
    }
    this.fetchTasks = this.fetchTasks.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  };
  componentWillMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    fetch('http://127.0.0.1:8000/mynotes/')
    .then(response => {
      this.setState({
        noteList : response.data
       })
      })
  }
  handleChange(e){
    // var name = e.target.name;
    var value = e.target.value;
    console.log(value)
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        title:value,
        note:value
      }
    })

  }

  handleSubmit(e){
    e.prevetDefault()
    alert('ITEM: ', this.state.activeItem)
    var url = '127.0.0.1:8000/note-create/'

    if(this.state.editing === true){
      url = `127.0.0.1:8000/note-update/${ this.state.activeItem.id}/`
      this.setState({
        editing:false
      })
    }



    fetch(url, {
      method:'POST',
      headers:{
        'Content-type':'application/json',
        // 'X-CSRFToken':csrftoken,
      },
      body:JSON.stringify(this.state.activeItem)
    }).then((response)  => {
        this.fetchTasks()
        this.setState({
           activeItem:{
          id:null, 
          title:'',
          note:'',
          completed:false,
        }
        })
    }).catch(function(error){
      console.log('ERROR:', error)
    })
  }

  render(){
    var  notes  = this.state.noteList;
    return(
     <div className = 'container'>
       <div id = 'note-container'>
          <div id = 'form-wrapper'>
            <form onSubmit = {this.handleSubmit} id="form">
              <div className="flex-wrapper">

                <div style={{flex: 6}}>
                  <input onChange={this.handleChange} className="form-control" id="title"type="text" name="title" placeholder="Add note title.." />
                </div>

                <div className = 'input-spacing' style={{flex: 6}}>
                  <input onChange={this.handleChange} className="form-control input-text-area" id="text" type="text" name="text" placeholder="Add note text.." />
                </div>

                <div style={{flex: 1}}>
                  <input  id="submit" className="btn btn-warning" type="submit" name="Add" />
                </div>

              </div>
            </form>

          </div>
          <div id = 'list-wrapper'>
            {this.noteList.map(function(note, index){

              return (
                <div key = {index} className = "task-wrapper flex-wrapper">
                  <span>
                    <h3>{note.title}</h3>
                  </span>
                  <span>
                    {note.note}
                  </span>
                  
                  
                  <div className = 'flex-wrapper-2'>
                    <div style = {{flex:1}}>
                      <button className = 'btn btn-sm btn-outline-info'>Edit</button>
                    </div>

                    <div style = {{flex:8}}>
                    <button className = 'btn btn-sm btn-outline-danger'>-</button>
                    </div>
                  </div>


                </div>
                )
          }
            )}

          </div>
       </div>
     </div>
    )
  }
}



export default App;


{/* <Header/>     
<Content/>
<Footer/> */}
