import { LightningElement, api } from 'lwc';

export default class SessionEditor extends LightningElement {
    @api sessionId

    handleSaveClick() {
        const navObject = {};
        if (this.sessionId) {
            navObject.detail = { state: 'detail' }
        } else {
            navObject.detail = { state: 'list' }
        }
        const navigateEvent = new CustomEvent('navigate', navObject);
        this.dispatchEvent(navigateEvent);
    }

    handleCancelClick() {
        const navObject = {};
        if (this.sessionId) {
            navObject.detail = { state: 'detail' }
        } else {
            navObject.detail = { state: 'list' }
        }
        const navigateEvent = new CustomEvent('navigate', navObject);
        this.dispatchEvent(navigateEvent);
    }
}