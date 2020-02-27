(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{332:function(s,t,n){"use strict";n.r(t);var a=n(43),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/about-iot-hub?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure IoT Hub Overview"),n("OutboundLink")],1),s._v(".")])]),s._v(" "),n("h4",{attrs:{id:"easily-send-json-to-iot-hub-with-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#easily-send-json-to-iot-hub-with-c","aria-hidden":"true"}},[s._v("#")]),s._v(" Easily Send JSON to IoT Hub with C#")]),s._v(" "),n("p",[s._v("I recently needed to send JSON that an IoT Hub could receive and display on an AZ3166 device. Once the AZ3166 device receives the message, then it could do a number of things with the data such as open an door.")]),s._v(" "),n("p",[s._v("Part 1:")]),s._v(" "),n("ul",[n("li",[s._v("Create an IoT Hub and provision the MX Chip (AZ3166) as a device. While we could go into the Azure Portal and create a new IoT Hub and walk through the setup of our device, etc. There is an easier way.")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/iot-hub-arduino-iot-devkit-az3166-get-started#prepare-the-development-environment?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Download the tools"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("Open "),n("strong",[s._v("VS Code")]),s._v(", look under "),n("strong",[s._v("Arduino Examples")]),s._v(" and open the "),n("strong",[s._v("GetStarted")]),s._v(" sample and run "),n("code",[s._v("task cloud-provision")]),s._v(" in the VS Code terminal..")])]),s._v(" "),n("img",{attrs:{src:s.$withBase("/files/aziothub1.png")}}),s._v(" "),n("ul",[n("li",[s._v("If you switch over to the Azure Portal, and look under your new IoT, then Devices - you should see your new device.")])]),s._v(" "),n("img",{attrs:{src:s.$withBase("/files/aziothub2.png")}}),s._v(" "),n("p",[s._v("Part 2:")]),s._v(" "),n("ul",[n("li",[s._v("I took the code from the “GetStarted” sample found in VS Code and tweaked the "),n("code",[s._v('Screen.print(0, "Unlock Door");')]),s._v(" lines in the "),n("code",[s._v("GetStarted.ino")]),s._v(" file in the "),n("code",[s._v("Setup")]),s._v(" method.")]),s._v(" "),n("li",[s._v("Now on my deivce it prints the “Unlock Door” message in fancy yellow and displays the IP Address and waits for a message to be sent to IoT Hub.")])]),s._v(" "),n("img",{attrs:{src:s.$withBase("/files/aziothub3.png")}}),s._v(" "),n("p",[s._v("Part 3:")]),s._v(" "),n("ul",[n("li",[s._v("Open Visual Studio and create a console application.")]),s._v(" "),n("li",[s._v("Add NuGet package : Microsoft.Azure.Devices (Service SDK for Azure IoT Hub)")]),s._v(" "),n("li",[s._v("I hardcoded my connection string (found in IoT Hub) and mocked the JSON data.")])]),s._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Collections"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Generic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Linq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Threading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Azure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Devices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" SendMessageToIoTHub\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Program")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceClient")]),s._v(" serviceClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" connectionString "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mykey"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            serviceClient "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ServiceClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("CreateFromConnectionString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("connectionString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SendCloudToDeviceMessageAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Wait")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReadLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Task")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SendCloudToDeviceMessageAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" mockedJsonData "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{ \\"Locked\\":true}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" commandMessage "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ASCII"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetBytes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mockedJsonData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" serviceClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SendAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AZ3166"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" commandMessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("Part 4:")]),s._v(" "),n("ul",[n("li",[s._v("The MX Board receives the message from IoT Hub")]),s._v(" "),n("li",[s._v("It prints the JSON message from the serviceClient code above to the board display.")])]),s._v(" "),n("img",{attrs:{src:s.$withBase("/files/aziothub4.png")}})])},[],!1,null,null,null);t.default=e.exports}}]);