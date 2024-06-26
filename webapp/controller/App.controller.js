sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onInit: function () {
        let oData = {
          recipient: {
            name: "Allan Krüger",
          },
        };

        let oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        let i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello: function () {
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        let sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
      },
    });
  }
);
