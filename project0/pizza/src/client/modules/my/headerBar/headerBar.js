import { LightningElement } from 'lwc'

export default class HeaderBar extends LightningElement {
    handleNavClickHome() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'home'
            }
        })
        this.dispatchEvent(navigateEvent);
    }
    handleNavClickOrder() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'menu'
            }
        })
        this.dispatchEvent(navigateEvent);
    }
}
