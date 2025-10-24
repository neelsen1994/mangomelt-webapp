from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from ..core.auth import get_session
from ..models.workshop import Workshop

router = APIRouter(prefix="/workshops", tags=["workshops"])

@router.get("")
def list_workshops(session: Session = Depends(get_session)):
    items = session.exec(select(Workshop)).all()
    return {"items": items}

@router.post("")
def create_workshop(workshop: Workshop, session: Session = Depends(get_session)):
    session.add(workshop)
    session.commit()
    session.refresh(workshop)
    return workshop
