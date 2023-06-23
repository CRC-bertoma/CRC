create zip file of functions: `func pack --build-native-deps --output ./visitors-functions`

force recreatin of visitors-app to update functions: `terraform apply -replace="azurerm_linux_function_app.visitors-app"`