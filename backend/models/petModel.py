from pydantic import BaseModel
from enum import Enum

class Gender(str, Enum):
    male = "male"
    female = "female"
    
class Pet(BaseModel):
    name: str
    age: int
    breed: str
    gender: Gender