import axios from 'axios';

export default class UserService {

  sendRequest() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
  }

}