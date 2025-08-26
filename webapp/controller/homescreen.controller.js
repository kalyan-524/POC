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
		
onlogout:function(){
	MessageToast.show("Logging out..");
    this.getOwnerComponent().getRouter().navTo("RouteView1")
},
onOrdersPress:function(){
this.getOwnerComponent().getRouter().navTo("catalog")
		},

		
	});
});
