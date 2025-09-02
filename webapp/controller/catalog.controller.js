sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    'sap/m/MessageToast',
], (Controller,) => {
    "use strict";

    return Controller.extend("ladera.royalenfield.controller.catalog", {
        onInit() {
        },
        onnavback:function(){
          this.getOwnerComponent().getRouter().navTo("homescreen")  
        },
       handlePopoverPress: function (oEvent) {
    var oButton = oEvent.getSource();

    if (!this.category) {
        this.category = sap.ui.xmlfragment("ladera.royalenfield.view.category", this);
        this.getView().addDependent(this.category);
    }
    if (this.category.isOpen()) {
        this.category.close();
    } else {
        this.category.openBy(oButton);
    }
},

onCategorySelect: function (oEvent) {
    // var oSelectedItem = oEvent.getParameter("item");
     var oSelectedItem = oEvent.getParameter("id");
    var sText = oSelectedItem.getText();

    sap.m.MessageToast.show("You selected: " + sText);

    this.category.close(); 
},
// onSearchCatalog: function (oEvent) {
//     var sQuery = oEvent.getParameter("newValue").toLowerCase(); // typed value
//     var oContainer = this.byId("catalogContainer"); // flexbox
//     var aItems = oContainer.getItems();
    
// }

onSearchCatalog: function (oEvent) {
    var sQuery = oEvent.getParameter("newValue").toLowerCase(); // user input
    var oFlexBox = this.byId("catalogContainer"); // FlexBox id
    var oFlexBox1 = this.byId("catalogContainer1");
    var aItems = oFlexBox.getItems()[0].getContent(); // HorizontalLayout items (tiles)
var aItems1 = oFlexBox1.getItems()[0].getContent();
    aItems.forEach(function (oTile) {
        var sHeader = oTile.getHeader().toLowerCase();
        if (sHeader.includes(sQuery) || sQuery === "") {
            oTile.setVisible(true);
        } else {
            oTile.setVisible(false);
        }
    }),
    aItems1.forEach(function (oTile) {
        var sHeader = oTile.getHeader().toLowerCase();
        if (sHeader.includes(sQuery) || sQuery === "") {
            oTile.setVisible(true);
        } else {
            oTile.setVisible(false);
        }
    });
}



    

// onSearchCatalog: function (oEvent) {
//     var sQuery = oEvent.getParameter("newValue").toLowerCase(); // typed value
//     var oContainer = this.byId("catalogContainer"); // flexbox
//     var aItems = oContainer.getItems();

//     aItems.forEach(function (oItem) {
//         var sText = oItem.getItems()[1].getText().toLowerCase(); // assuming Text is second in VBox
//         if (sText.includes(sQuery) || sQuery === "") {
//             oItem.setVisible(true);
//         } else {
//             oItem.setVisible(false);
//         }
//     } 


    });
});