import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    state = 'home'

    handleNavigate(event) {
        console.log('navigate event fired')
        this.state = event.detail.state
    }

    get isStateHome() {
        return this.state === 'home'
    }
    get isStateMenu() {
        return this.state === 'menu'
    }
}
