import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class NoteServices{

    constructor(){}


    getnotes() {
        const url = `${API_URL}/notes/`;
        return axios.get(url).then(response => response.data);
    }
    getnotesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getnotes(pk) {
        const url = `${API_URL}/notes/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deletenotes(note){
        const url = `${API_URL}/notes/${note.pk}`;
        return axios.delete(url);
    }
    createnotes(note){
        const url = `${API_URL}/notes/`;
        return axios.post(url,note);
    }
    updatenotes(note){
        const url = `${API_URL}/notes/${note.pk}`;
        return axios.put(url,note);
    }
}