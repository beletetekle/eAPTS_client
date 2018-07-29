import * as session from 'browser-session-store';
import Cookies from 'universal-cookie';

class ClientSession {
  static authKey =  "";
  static loggedIn = false;
  static cookies = new Cookies();

  static isLoggedIn() {
    
  }

}

export default ClientSession;
