provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "CRC-Development"
  location = "East US"
}

resource "azurerm_storage_account" "sa" {
  name                     = "mbcrcstorage"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  static_website {
    index_document = "index.html"
  }
}

resource "azurerm_cdn_profile" "cdn" {
  name                = "mbcrc-cdn"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "Standard_Microsoft"
}

resource "azurerm_cdn_endpoint" "endpoint" {
  name                = "mbcrc-cdn-endpoint"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  profile_name        = azurerm_cdn_profile.cdn.name
  origin_host_header  = azurerm_storage_account.sa.primary_web_host
  is_http_allowed = true
  is_https_allowed = true
  querystring_caching_behaviour = "IgnoreQueryString"

  origin {
    name      = "blobstorage"
    host_name = azurerm_storage_account.sa.primary_web_host
  }
}

output "connection_string" {
  description = "The connection string of the storage account"
  value       = azurerm_storage_account.sa.primary_connection_string
  sensitive   = true
}