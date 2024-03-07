sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("helloworld.controller.App", {
            onInit: function () {
                const oData = {
                     name : "World"
                 };
                 const oModel = new JSONModel(oData);
                 this.getView().setModel(oModel);
            },
            onPress: function (evt) {

                var oTest = this.getView().getModel();

                MessageToast.show(evt.getSource().getId() + " Pressed" + oTest.getData());
            }
        });
    });
