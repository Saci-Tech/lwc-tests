import { LightningElement, api, track, wire } from 'lwc';

export default class NotificationCard extends LightningElement {
    isClicked = false;
    @api headerLabel;
    @api bodyContent;
    @api bgColor;

    connectedCallback() {
        this.headerLabel = (this.headerLabel == null) ? 'Teste' : this.headerLabel;
        this.bodyContent = (this.bodyContent == null) ? 'ARGH!' : this.bodyContent;
    }

    renderedCallback() {
        let color = 'bg-' + this.bgColor;
        console.log(color);
        this.template.querySelector('article').classList.add(color);
    }

    handleCardClick() {
        this.isClicked = true;
        console.log('is clicked: ', this.isClicked);
    }
}
