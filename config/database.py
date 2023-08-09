import os
from pymongo import MongoClient


client = MongoClient(os.environ.get("MONGODB_CLIENT"))

db = client.luffy_and_friends_app

client_collection = db["clients"]
pet_collection = db["pets"]
