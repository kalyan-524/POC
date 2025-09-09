sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    'sap/m/MessageToast',
    
], (Controller,UIComponent,MessageToast,) => {
    "use strict";

    return Controller.extend("ladera.royalenfield.controller.View1", {
        onInit() {
        },
        onlogon:function(){

            var ousername = this.byId("username").getValue().trim();
            var ouserpass = this.byId("password").getValue().trim();

            if (!ousername || !ouserpass) {
                MessageToast.show("Please enter both username and password ‼");
                return;
            }
            var oAppModel = this.getView().getModel("credentials");
            var oUsers = oAppModel.getProperty("/Users") || [];
            var bValid = false;
            for (var i = 0; i < oUsers.length; i++) {
 
                if (oUsers[i].username === ousername && oUsers[i].password === ouserpass) {
                    bValid = true;
                    MessageToast.show("Welcome " + oUsers[i].role + "! ");
            this.getOwnerComponent().getRouter().navTo("homescreen")
              break;
                }
            }
            if (!bValid) {
                MessageToast.show("Invalid username or password ");
            }
        }
    });
});