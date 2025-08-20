sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    'sap/m/MessageToast',
], (Controller,UIComponent,MessageToast) => {
    "use strict";

    return Controller.extend("ladera.royalenfield.controller.purchaseorder", {
        onInit() {
        },
        onenablebutton:function(oEvent){
                var bState = oEvent.getParameter("state"); // true or false
                var oVBox4 = this.byId("vbox4");
 
                if (bState) {
                 oVBox4.setVisible(true);   // Enable
                } else {
                 oVBox4.setVisible(false);  // Disable
    }
},
onAddRow:function(){
         var oModel = this.getView().getModel("data");  // default model from manifest.json
    
    // if (!oModel) {
    //     console.error("Model not loaded! Check manifest.json");
    //     return;
    // }

    var aItems = oModel.getProperty("/items");
    var iNextSeq = (aItems.length > 0)
        ? parseInt(aItems[aItems.length - 1].seq) + 10
        : 10;

    var newProductObj = {
        seq: iNextSeq.toString(),
        part: "",
        quantity: "0",
        inStock: "",
        eta: "",
        msrp: "0.00",
        dealerPrice: "0.00",
        vat: "0.00",
        amount: "0.00"
    };

    aItems.push(newProductObj);

    oModel.setProperty("/items", aItems); // update array
    oModel.refresh(true); // refresh UI
}  
                        
    });
});