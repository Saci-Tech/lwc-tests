import { LightningElement, api, track, wire } from 'lwc';

export default class App extends LightningElement {
    @api colors = ["red", "yellow", "blue", "white", "gray", "green", "orange", "violet"];
    
}
