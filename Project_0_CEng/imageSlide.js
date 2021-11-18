import { api, LightningElement, track } from "lwc";

export default class App extends LightningElement {

  @track
  imageURL="https://i.imgur.com/jowQRAr.png";

  @track
  caption="Our lovely storefront";
  
 toggleImage(){
      if(imageURL=="https://i.imgur.com/jowQRAr.png"){
        imageURL="https://i.imgur.com/GRpm3NT.png";
      }
      else if(imageURL=="https://i.imgur.com/GRpm3NT.png"){
        imageURL="https://i.imgur.com/Wx45lU2.png";
      }
      else if(imageURL=="https://i.imgur.com/Wx45lU2.png"){
        imageURL="https://i.imgur.com/jowQRAr.png";
      }
      else{
        imageURL="https://i.imgur.com/Wx45lU2.png";
      }
   }
 }
