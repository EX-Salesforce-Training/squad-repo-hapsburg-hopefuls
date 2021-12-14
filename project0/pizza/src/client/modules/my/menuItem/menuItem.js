import { LightningElement, api } from 'lwc';

export default class MenuItem extends LightningElement {
    @api item

    handleCountChange(e) {
        const changeCountEvent = new CustomEvent('changecount', {
            detail: {
                id: e.target.getAttribute('index'),
                count: e.target.value
            }
        })
        this.dispatchEvent(changeCountEvent)
    }

    handleOrderSubmit(e) {
        fetch('http://localhost:3002/test')
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

        // fetch('http://localhost:3002/test')
        //     .then(result => result.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error(error))

        const submitOrderEvent = new CustomEvent('submitorder', {
            detail: {
                id: e.target.getAttribute('index'),
                count: e.target.value
            }
        })
        this.dispatchEvent(submitOrderEvent)
    }
}
