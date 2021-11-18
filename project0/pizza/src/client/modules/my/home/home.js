import { LightningElement, api } from 'lwc'

export default class Home extends LightningElement {
    handleNavClick() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'menu'
            }
        })
        this.dispatchEvent(navigateEvent);
    }

}
