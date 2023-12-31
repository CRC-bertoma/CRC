import azure.functions as func
import os
import json
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
    
    # Query to get the total count
    query = "SELECT VALUE COUNT(1) FROM c"
    total = 0
    for item in container.query_items(
            query=query,
            enable_cross_partition_query=True):
        total = item

    # Create a dictionary and convert to JSON
    data = {
        'total_entries': total
    }

    return func.HttpResponse(json.dumps(data), status_code=200)