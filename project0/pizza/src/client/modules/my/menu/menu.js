import { LightningElement } from 'lwc'

export default class Menu extends LightningElement {
    items = [
        {
            id: "01t5f000000SqPmAAK",
            name: "12\" Medium",
            desc: "The classic round",
            price: "$12",
            img: "resources/pizza.jpg",
            count: 0
        },
        {
            id: "01t5f000000Szg4AAC",
            name: "Garlic Bread",
            desc: "For garlic lovers only",
            price: "$6",
            img: "resources/garlic-bread.jpg",
            count: 0
        },
        {
            id: "01t5f000000SzfzAAC",
            name: "Pasta",
            desc: "All beef meatballs",
            price: "$11",
            img: "resources/pasta.jpg",
            count: 0
        }
    ]

    connectedCallback() {
        // getSessions().then(result => {
        //     this.items = this.allItems = result
        // })
    }

    handleChange(event) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == event.detail.id) {
                this.items[i].count = event.detail.count
                break
            }
        }
    }

}
