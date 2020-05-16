import  React, { Component } from  'react';
import NoteServices from './NoteServices';

const NoteServices = new NoteServices();


class  MyNoteBoard  extends  Component {

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
        NoteServices.getCustomers().then(function (result) {
            self.setState({ customers:  result.data, nextPageURL:  result.nextlink})
        });
    }
}
export  default  MyNoteBoard;

