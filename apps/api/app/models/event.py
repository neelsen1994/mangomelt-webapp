from sqlmodel import SQLModel, Field
import uuid
from datetime import datetime

class Event(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str
    date: datetime
    city: str
    venue: str
