create zip file of functions: `func pack --build-native-deps --output ./visitors-functions`

force recreating visitors-app to update functions: `terraform apply -replace="azurerm_linux_function_app.visitors-app"`

Deployment of local zip file: 'az functionapp deployment source config-zip -g <resource_group_name> -n <function_app_name> --src ./myfunctionapp.zip'

publish function: `func azure functionapp publish mb-crc-visitors-app8 --python --build remote`
