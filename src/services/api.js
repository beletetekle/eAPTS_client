import axios from 'axios';
import ClientSession from './client-session.js';

let API_BASE = 'http://localhost:9000/api/';

export default class Api{

  static API_BASE = API_BASE;

  //POST
  static create(endPointName, data, filter){
    let url = API_BASE+endPointName;
    if(filter) {
      url = url+'?'+filter;
    }

    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });

  }

  static createRelated(parentName, parentId, childName, data) {
   
  }

  //GET
  static find(endPointName, id, filter){
    let url = API_BASE+endPointName;
    if(id) url = url + '/' + id;
    if(filter) {
      url = url+'?'+filter;
    }

    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static findRelated(parentName, parentId, childName, filter){

  }

  //PATCH
  static update(endPointName, id, data){
    let url = API_BASE+endPointName + '/' +id;

    return new Promise((resolve, reject) => {
      axios({
        method: "patch",
        url,
        data
      }).then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static updateRelated(parentName, parentId, childName, childId, data) {

  }

  //DELETE
  static destroy(endPointName, id){
    let url = API_BASE+endPointName + '/' +id;

    return new Promise((resolve, reject) => {
      axios({
        method: "delete",
        url
      }).then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static destroyAll(endPointName, filter){

  }

  static upload(container, files, progressCallback){
    
  }

  static deleteFile(container, file){
    
  }

  static deleteFiles(container, files){
    
  }

  //PUT
  static replace(endPointName, data){

  }

}
