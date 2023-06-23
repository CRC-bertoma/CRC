import azure.functions as func
import datetime
import os
from azure.cosmos import CosmosClient, PartitionKey, exceptions

def main(req: func.HttpRequest) -> func.HttpResponse:
    # Cosmos DB Configuration
    url = os.environ['ACCOUNT_URI']  # Azure Cosmos DB account URI
    key = os.environ['ACCOUNT_KEY']  # Azure Cosmos DB account key
    database_name = 'Visitors'
    container_name = 'visitors'
    
    client = CosmosClient(url, credential=key)
    database = client.get_database_client(database_name)
    container = database.get_container_client(container_name)
    
    # Data to be written
    data = {
        'id' : str(datetime.datetime.now()),  
        'timestamp' : datetime.datetime.now().isoformat()
    }
    
    container.upsert_item(body=data)
    
    return func.HttpResponse("Done", status_code=200)
