from sqlmodel import SQLModel, Field
import uuid

class User(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    email: str = Field(index=True, unique=True)
    hashed_password: str
    role: str = Field(default="buyer")  # buyer | artist | host | admin
    is_active: bool = Field(default=True)
