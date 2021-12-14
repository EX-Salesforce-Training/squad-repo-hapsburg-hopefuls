import { LightningElement } from 'lwc';

export default class Header extends LightningElement {
    handleNavClickHome() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                bubbles: true,
                composed: true,
                path: '/Menu'
            }
        })
        this.dispatchEvent(navigateEvent);
    }
}
