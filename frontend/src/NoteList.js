import  React, { Component } from  'react';
import  NoteService  from  './NoteService';

const  noteService  =  new  NoteService();

class  NoteList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        notes: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    noteService.getnotes().then(function (result) {
        console.log(result);
        self.setState({ notes:  result.data, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,pk){
    var  self  =  this;
    noteService.deletenotes({pk :  pk}).then(()=>{
        var  newArr  =  self.state.notes.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({notes:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);
    noteService.getnotesByURL(this.state.nextPageURL).then((result) => {
        self.setState({ notes:  result.data, nextPageURL:  result.nextlink})
    });
}

render() {

    return (
        <div  className="notes--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>pk</th>
                <th>title</th>
                <th>note</th>
                <th>date</th>

            </tr>
            </thead>
            <tbody>
            {this.state.notes.map( c  =>
                <tr  key={c.pk}>
                <td>{c.pk}  </td>
                <td>{c.title}</td>
                <td>{c.note}</td>
                <td>{c.date}</td>
                
                <td>
                <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                <a  href={"/notes/" + c.pk}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
  }
}
export  default  NoteList;