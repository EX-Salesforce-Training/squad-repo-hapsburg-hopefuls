import { LightningElement, api, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';

export default class BidHistory extends LightningElement {

    @api recordId;

    @wire(MessageContext)
    context

    //fetchBidHistory() {
    //    var payload = {
    //        recordId: event.target.value,
    //        recordData: { value: "Message from lwc" }
    //    }
    //    publish(this.context, SAMPLEMC, payload);
    //}

    fetchBidHistory(event) {
        this.recordId = event.target.value;
        this.publishMessage();
    }

    publishMessage() {
        const message = {
            lmsData: {
                value: this.recordId
            }
        }
        publish(this.context, SAMPLEMC, message);
    }
}