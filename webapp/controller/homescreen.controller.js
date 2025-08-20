sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	
], function(Controller,MessageToast, ) {
	"use strict";

	return Controller.extend("ladera.royalenfield.controller.homescreen", {
		onInit: function () {
			
		},
		OnPurchase: function(){
			this.getOwnerComponent().getRouter().navTo("purchaseorder")

		},
		onAfterRendering: function () {
    var oCarousel = this.byId("mainCarousel");
    var iIndex = 0;
    var aPages = oCarousel.getPages();

    setInterval(function () {
        iIndex = (iIndex + 1) % aPages.length;
        oCarousel.setActivePage(aPages[iIndex]);
    }, 3000); // every 3 seconds
}

		
	});
});
