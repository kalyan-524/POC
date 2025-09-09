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
                var bState = oEvent.getParameter("state"); 
                var oVBox4 = this.byId("vbox4");
 
                if (bState) {
                 oVBox4.setVisible(true);   
                } else {
                 oVBox4.setVisible(false);
    }
},
onAddRow:function(){
         var oModel = this.getView().getModel("data");  
        var aItems = oModel.getProperty("/items");
        var iNextSeq = (aItems.length > 0)
        ? parseInt(aItems[aItems.length - 1].seq) + 1
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

    // aItems.unshift(newProductObj);
    aItems.push(newProductObj);
    oModel.setProperty("/items", aItems); 
    oModel.refresh(true); 
} ,
	 onnavback:function(){
          this.getOwnerComponent().getRouter().navTo("homescreen")  
        }
        

        // Handlexlupload:function(oEvent){
        //     var that = this;
        //     var files = oEvent.getParameter("files");
        //     if(files.length > 0)
        //     {
        //         var reader = new FileReader();
        //         reader.onload = function(e){
        //          var data = e.target.result;
        //          var workbook =  XLSX.read(data,{
        //             type : "Binary"
        //          });
        //         var tabledata = [];
        //         workbook.SheetNames.forEach(SheetName =>{
        //             var xl_row_data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[SheetName]);
        //             tabledata = [...tabledata,...xl_row_data];
        //         });

        //         var jmodel = new sap.ui.model.json.JSONModel({result:tabledata});
        //         that.getView().setModel(jmodel,"data1")
        //         }
        //         reader.onerror = function(ex){
        //             console.log(ex);
        //         }

        //         reader.readAsArrayBuffer(files[0]);
        //     }

        // }
                    
    });
});