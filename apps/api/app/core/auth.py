from datetime import datetime, timedelta
from typing import Optional
from jose import jwt
from passlib.context import CryptContext
from fastapi import HTTPException, Depends
from pydantic import BaseModel
from sqlmodel import Session, select
from ..db.init import engine
from ..models.user import User
from ..core.settings import settings

pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")
ALGO = "HS256"

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class LoginIn(BaseModel):
    email: str
    password: str

def create_token(sub: str, expires_minutes: int = 60) -> str:
    payload = {"sub": sub, "exp": datetime.utcnow() + timedelta(minutes=expires_minutes)}
    return jwt.encode(payload, settings.jwt_secret, algorithm=ALGO)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd.verify(plain, hashed)

def hash_password(plain: str) -> str:
    return pwd.hash(plain)

def get_session():
    with Session(engine) as s:
        yield s

def get_current_user(token: str | None = None, session: Session = Depends(get_session)) -> User:
    if not token:
        raise HTTPException(status_code=401, detail="Missing token")
    try:
        payload = jwt.decode(token, settings.jwt_secret, algorithms=[ALGO])
        sub = payload.get("sub")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
    user = session.exec(select(User).where(User.email == sub)).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user
