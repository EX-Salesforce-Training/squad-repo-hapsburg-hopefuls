import { LightningElement, createElement } from 'lwc'
import Navigo from 'navigo'

export default class App extends LightningElement {

    router = new Navigo('/')

    constructor() {
        super()

        // build
        this.router.on({
            '/': () => (async () => {
                const { default: Home } = await import('my/home')
                this.setPage('my-home', Home)
            })(),
            'Menu': () => (async () => {
                const { default: Menu } = await import('my/menu')
                this.setPage('my-menu', Menu)
            })()
        }).resolve()

        // testing
        // this.router.on({
        //     '/': () => (async () => {
        //         const { default: Home } = await import('my/menu')
        //         this.setPage('my-menu', Home)
        //     })()
        // }).resolve()
    }

    setPage(tag, component, data = {}) {
        const el = createElement(tag, {
            is: component,
            fallback: false
        });
        Object.assign(el, data);
        let container = this.template.querySelector('.container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(el);
    }

    handleNavigation(e) {
        if (e.detail) {
            this.router.navigate(e.detail.path);
        }
    }
    renderedCallback() {
        this.router.updatePageLinks();
    }
}
