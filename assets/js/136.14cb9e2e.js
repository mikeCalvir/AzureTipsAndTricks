(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{431:function(e,a,s){"use strict";s.r(a);var r=s(43),t=Object(r.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/mysql/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MySQL"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://azure.microsoft.com/en-us/blog/happy-birthday-to-managed-open-source-rdbms-services-in-azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Managed Open Source RDBMS Databases in Azure"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("This post was brought to you by "),s("strong",[s("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),s("OutboundLink")],1)]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"azure-database-for-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-database-for-mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Database for MySQL")]),e._v(" "),s("p",[e._v("Azure Database for MySQL provides fully managed, enterprise-ready community MySQL database as a service. The MySQL Community edition helps you easily lift and shift your on-prem MySQL Database to the Azure Cloud, using languages and frameworks of your choice. On top of that, you get built-in high availability and dynamic scaling, helping you easily adjust to changes in customer demands.")]),e._v(" "),s("p",[e._v("In few simple steps we will learn to create Azure managed MySQL database using az CLI")]),e._v(" "),s("h4",{attrs:{id:"learn-how-to-setup-azure-database-for-mysql-using"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn-how-to-setup-azure-database-for-mysql-using","aria-hidden":"true"}},[e._v("#")]),e._v(" Learn how to setup Azure Database for MySQL using")]),e._v(" "),s("ul",[s("li",[e._v("Azure CLI")]),e._v(" "),s("li",[e._v("Azure Portal")])]),e._v(" "),s("h4",{attrs:{id:"azure-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("- az login\n- az account set --subscription <subscription-id>\n- az extension add --name db-up\n- az mysql up\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v('The above az CLI commands will create a MySQL Database with system defaults, firewall rule, an empty database "sampledb". Refer to the screenshot below')]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('az account set --subscription xxxx-xxxx-xxxx-xxxx\naz extension add --name db-up\naz mysql up\n\nCreating Resource Group \'group1799424947\'...\nCreating MySQL Server \'server623497231\' in group \'group1799424947\'...\nConfiguring wait timeout to 8 hours...\nConfiguring server firewall rule, \'azure-access\', to accept connections from all Azure resources...\nCreating MySQL database \'sampledb\'...\nChecking your ip address...\nConfiguring server firewall rule, \'devbox\', to allow for your ip address: 167.220.26.66\nIf MySQL server declines your IP address, please create a new firewall rule using:\n    `az mysql server firewall-rule create -g group1799424947 -s server623497231 -n {rule_name} --start-ip-address {ip_address} --end-ip-address {ip_address}`\nSuccessfully Connected to MySQL.\nRan Database Query: `CREATE USER \'root\' IDENTIFIED BY \'Sampledb1\'`\nRan Database Query: `GRANT ALL PRIVILEGES ON sampledb.* TO \'root\'`\n{\n  "connectionStrings": {\n    "ado.net": "Server=server623497231.mysql.database.azure.com; Port=3306; Database=sampledb; Uid=eatableKitten3@server623497231; Pwd=f70ea0e1-b0ae-4819-aec3-02017460c70f;",\n    "jdbc": "jdbc:mysql://server623497231.mysql.database.azure.com:3306/sampledb?user=eatableKitten3@server623497231&password=f70ea0e1-b0ae-4819-aec3-02017460c70f",\n    "jdbc Spring": "spring.datasource.url=jdbc:mysql://server623497231.mysql.database.azure.com:3306/sampledb  spring.datasource.username=eatableKitten3@server623497231  spring.datasource.password=f70ea0e1-b0ae-4819-aec3-02017460c70f",\n    "mysql_cmd": "mysql sampledb --host server623497231.mysql.database.azure.com --user eatableKitten3@server623497231 --password=f70ea0e1-b0ae-4819-aec3-02017460c70f",\n    "node.js": "var conn = mysql.createConnection({host: \'server623497231.mysql.database.azure.com\', user: \'eatableKitten3@server623497231\', password: f70ea0e1-b0ae-4819-aec3-02017460c70f, database: sampledb, port: 3306});",\n    "php": "host=server623497231.mysql.database.azure.com port=5432 dbname=sampledb user=eatableKitten3@server623497231 password=f70ea0e1-b0ae-4819-aec3-02017460c70f",\n    "python": "cnx = mysql.connector.connect(user=\'eatableKitten3@server623497231\', password=\'f70ea0e1-b0ae-4819-aec3-02017460c70f\', host=\'server623497231.mysql.database.azure.com\', port=3306, database=\'sampledb\')",\n    "ruby": "client = Mysql2::Client.new(username: \'eatableKitten3@server623497231\', password: \'f70ea0e1-b0ae-4819-aec3-02017460c70f\', database: \'sampledb\', host: \'server623497231.mysql.database.azure.com\', port: 3306)",\n    "webapp": "Database=sampledb; Data Source=server623497231.mysql.database.azure.com; User Id=eatableKitten3@server623497231; Password=f70ea0e1-b0ae-4819-aec3-02017460c70f"\n  },\n  "host": "server623497231.mysql.database.azure.com",\n  "password": "f70ea0e1-b0ae-4819-aec3-02017460c70f",\n  "username": "eatableKitten3@server623497231"\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br")])]),s("p",[e._v("Pls go to the Azure Portal and check the provisioned Azure MySQL database. Refer to the screenshot below")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/file1-mysql.jpg")}}),e._v(" "),s("p",[e._v("You can install the "),s("a",{attrs:{href:"https://dev.mysql.com/downloads/workbench/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL workbench"),s("OutboundLink")],1),e._v(" in your desktop and connect to the provisioned MySQL database in Azure Cloud. Use the connection string shown in the above screenshot i.e. "),s("code",[e._v("server623497231.mysql.database.azure.com")])]),e._v(" "),s("p",[e._v("Once you are done playing with the MySQL database, pls delete the database to clean up the resources in your subscription.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("az mysql down --delete-group \nAre you sure you want to perform this operation? (y/n): y\nDeleting Resource Group 'group1799424947'...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("If you want to create Azure MySQL database with detailed steps pls refer to "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/mysql/quickstart-create-mysql-server-database-using-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL-Azure CLI"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"azure-portal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-portal","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Portal")]),e._v(" "),s("p",[e._v("To setup MySQL database from Azure portal, pls follow this workflow [MySQL].")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/mysql.gif")}}),e._v(" "),s("h4",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("Azure Database for MySQL is a relational database service based on the open-source MySQL Server engine. It's a fully managed database as a service offering that can handle mission-critical workloads with predictable performance and dynamic scalability. In this article, we only scratched the surface of Azure managed databases. You can further explore the advanced features of Azure managed databases like Scale In/Out, High Availability, Data-in replication, Read replicas, Advanced Threat Protection, VNet integration etc.. You can follow similar steps to configure PostgreSQL and MariaDB databases as well.")]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/mysql?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MySQL"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/postgresql?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for PostgreSQL"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/mariadb?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MariaDB"),s("OutboundLink")],1)])])])])},[],!1,null,null,null);a.default=t.exports}}]);