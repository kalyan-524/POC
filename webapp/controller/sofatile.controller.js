sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    'sap/m/MessageToast',
], (Controller,) => {
    "use strict";

    return Controller.extend("ladera.royalenfield.controller.sofatile", {
        onInit: function() {
			const oModel = new sap.ui.model.json.JSONModel("model/Clothing.json");
            // oModel.loadData("model/Clothing.json");
			this.getView().setModel(oModel);
		},
        // onCollapseAll: function() {
		// 	const oTreeTable = this.byId("TreeTableBasic");
		// 	oTreeTable.collapseAll();
		// },

		// onCollapseSelection: function() {
		// 	const oTreeTable = this.byId("TreeTableBasic");
		// 	oTreeTable.collapse(oTreeTable.getSelectedIndices());
		// },

		// onExpandFirstLevel: function() {
		// 	const oTreeTable = this.byId("TreeTableBasic");
		// 	oTreeTable.expandToLevel(1);
		// },

		// onExpandSelection: function() {
		// 	const oTreeTable = this.byId("TreeTableBasic");
		// 	oTreeTable.expand(oTreeTable.getSelectedIndices());
		// },
        onnavback:function(){
          this.getOwnerComponent().getRouter().navTo("catalog")  
        }

    });
});