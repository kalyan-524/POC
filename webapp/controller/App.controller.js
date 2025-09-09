sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("ladera.royalenfield.controller.App", {
      onInit() {
        this.getOwnerComponent().getRouter().attachRouteMatched(this.onRouteMatched, this);
      },
      onRouteMatched: function (oEvent) {
      var sRouteName = oEvent.getParameter("name");
      var oPage = this.byId("barid");
      if (sRouteName == "RouteView1") {
        oPage.setVisible(false);
      } else {
        oPage.setVisible(true);
      }
    },
    
  });
});