import { LightningElement, api } from "lwc";

export default class Menu extends LightningElement {
  @api menu;
  
  isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
}