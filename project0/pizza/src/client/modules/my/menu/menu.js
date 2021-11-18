import { LightningElement } from 'lwc'

export default class Menu extends LightningElement {
    items = [
        {
            id: "1",
            name: "Pizza",
            img: "resources/pizza.jpg"
        },
        {
            id: "2",
            name: "Garlic Bread",
            img: "resources/garlic-bread.jpg"
        },
        {
            id: "3",
            name: "Pasta",
            img: "resources/pasta.jpg"
        }
    ]
    connectedCallback() {
        // getSessions().then(result => {
        //     this.items = this.allItems = result
        // })
    }

    handleSessionClick(event) {
        const index = event.currentTarget.dataset.index
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'details',
                sessionId: this.items[index].id
            }
        })
        this.dispatchEvent(navigateEvent)
    }

}
