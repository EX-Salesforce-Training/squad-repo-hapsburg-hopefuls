import { LightningElement, api } from "lwc";

export default class Nav extends LightningElement {
  @api nav;

  getLocations(){
    document.getElementById('locations').click(function(){
  var pageId = $(this).attr("data-page");
  $("template").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});
  }
   
}