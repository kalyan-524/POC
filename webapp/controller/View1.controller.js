sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    'sap/m/MessageToast',
], (Controller,UIComponent,MessageToast) => {
    "use strict";

    return Controller.extend("ladera.royalenfield.controller.View1", {
        onInit() {
        },

    //      onLogOn: function () {
    //   var user = this.byId("sinnup").getValue();
    //   var pass = this.byId("sinnup").getValue();
    //   MessageToast.show(`Logging in as ${user}`);
    //   // TODO: Add authentication logic here
    // },

    // onSignUp: function () {
    //   MessageToast.show("Redirecting to Sign Up");
    //   // TODO: Implement navigation to sign-up view or popup logic here
    // }


        onlogon : function(evt){
              var sUsername = this.byId("username").getValue().trim(); 
             var sPassword = this.byId("password").getValue().trim(); 


              if (!sUsername || !sPassword) { 
                MessageToast.show("Please enter both username and password."); 
                return; 
            } 

            var oAppModel = this.getView().getModel("credentials"); 
            var aUsers = oAppModel.getProperty("/Users") || [];
            var bValid = false; 

            for (var i = 0; i < aUsers.length; i++) { 

                if (aUsers[i].username === sUsername && aUsers[i].password === sPassword) { 

                    bValid = true; 
                     var oUserData = { 
                        loggedInUser: sUsername, 
                        loggedInUserInitials: sUsername.charAt(0).toUpperCase() 

                    }; 
                     var oUserModel = new sap.ui.model.json.JSONModel(oUserData);
                    sap.ui.getCore().setModel(oUserModel, "userModel"); 

                    //  welcome message
                    MessageToast.show("Welcome " + aUsers[i].role + "!"); 
                    this.getOwnerComponent().getRouter().navTo("homescreen")
                    break; 

                } 

            } 
              if (!bValid) {
                MessageToast.show("Invalid username or password"); 

            } 
            // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);   
               
                  
                        
        }
    });
});