import { LightningElement, api, track, wire } from 'lwc';

export default class LoginScreen extends LightningElement {
    @track userName = null;
    @track userPass = null;
    @track toggleButton = true;

    handleButtonEnable() {
        if(this.userName == null && this.userPass == null) {
            this.toggleButton = true;
        } else {
            this.toggleButton = false;
        }
    }

    handlePassChange(event) {
        this.userPass = event.target.value;
    }

    handleUserChange(event) {
        this.userName = event.target.value;
    }

    handleLogin(event) {
        console.log(this.userName);
        console.log(this.userPass);
    }
}
