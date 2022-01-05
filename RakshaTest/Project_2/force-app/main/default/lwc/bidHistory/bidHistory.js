import { LightningElement, api, wire, track } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { publish, MessageContext, createMessageContext } from 'lightning/messageService';

export default class BidHistory extends LightningElement {

    @track recordId;    
    context = createMessageContext();

    publishMessage(event) {
        this.recordId = event.target.value;
        const message = { lmsData: this.recordId }
        publish(this.context, SAMPLEMC, message);
    }
}