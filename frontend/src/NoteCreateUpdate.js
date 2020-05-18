import React, { Component } from 'react';
import NoteService from './NoteService';

const noteService = new NoteService();

class NoteCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          noteService.getnotes(params.pk).then((c)=>{
            this.refs.title.value = c.title;
            this.refs.note.value = c.note;
            this.refs.date.value = c.date;
          })
        }
      }

      handleCreate(){
        noteService.createnotes(
          {
            "title": this.refs.title.value,
            "note": this.refs.note.value,
            "date": this.refs.date.value,

        }
        ).then((result)=>{
          alert("Note created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        noteService.updatenotes(
          {
            "pk": pk,
            "title": this.refs.title.value,
            "note": this.refs.note.value,
            "date": this.refs.date.value,
        }
        ).then((result)=>{
          console.log(result);
          alert("Note updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              title:</label>
              <input className="form-control" type="text" ref='title' />

            <label>
             note:</label>
              <input className="form-control" type="text" ref='note'/>

            <label>
              date:</label>
              <input className="form-control" type="text" ref='date' hidden = 'true'/>

            


            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }
}

export default NoteCreateUpdate;