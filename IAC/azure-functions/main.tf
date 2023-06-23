provider "azurerm" {
  features {}
}
resource "azurerm_resource_group" "frg" {
  name     = "CRC-Development-Functions"
  location = "East US"
}

resource "azurerm_storage_account" "visitors-storage-account" {
  name                     = "mbvisitorsstorageaccount"
  resource_group_name      = azurerm_resource_group.frg.name
  location                 = azurerm_resource_group.frg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_service_plan" "visitors-service-plan" {
  name                = "visitors-service-plan"
  location            = azurerm_resource_group.frg.location
  resource_group_name = azurerm_resource_group.frg.name
  os_type             = "Linux"
  sku_name            = "Y1"
}

resource "azurerm_linux_function_app" "visitors-app" {
  name                = "mb-crc-visitors-app8"
  resource_group_name = azurerm_resource_group.frg.name
  location            = azurerm_resource_group.frg.location

  storage_account_name       = azurerm_storage_account.visitors-storage-account.name
  storage_account_access_key = azurerm_storage_account.visitors-storage-account.primary_access_key
  service_plan_id            = azurerm_service_plan.visitors-service-plan.id

  https_only      = true
  zip_deploy_file = "../api/visitors-functions.zip"
  site_config {
    application_stack {
      python_version = 3.10
    }
  }

  app_settings = {
    WEBSITE_RUN_FROM_PACKAGE=1
  }

  #APP SETTINGS -> ENVIRONMENT VARIABLES TO ACCESS COSMOS DB
}