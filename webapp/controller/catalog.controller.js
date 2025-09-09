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
    // var oSelectedItem = oEvent.getParameter("id");
      this.category.close(); 
},
ontilesofapress : function(){
            this.getOwnerComponent().getRouter().navTo("sofatile")
        },

onSearchCatalog: function (oEvent) {
    var sQuery = oEvent.getParameter("newValue").toLowerCase(); 
    var oFlexBox = this.byId("catalogContainer"); 
    var oFlexBox1 = this.byId("catalogContainer1");
    var oFlexBox2 = this.byId("catalogContainer2");
    var aItems = oFlexBox.getItems()[0].getContent(); 
var aItems1 = oFlexBox1.getItems()[0].getContent();
var aItems2 = oFlexBox2.getItems()[0].getContent();
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
    }),
    aItems2.forEach(function (oTile) {
        var sHeader = oTile.getHeader().toLowerCase();
        if (sHeader.includes(sQuery) || sQuery === "") {
            oTile.setVisible(true);
        } else {
            oTile.setVisible(false);
        }
    });
}


    });
});