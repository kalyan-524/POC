sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    'sap/m/MessageToast',
], (Controller,UIComponent,MessageToast) => {
    "use strict";

    return Controller.extend("ladera.royalenfield.controller.View1", {
        onInit() {
        },
        onlogon:function(){
            this.getOwnerComponent().getRouter().navTo("homescreen")
        }
    });
});