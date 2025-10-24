from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from ..core.auth import get_session
from ..models.event import Event

router = APIRouter(prefix="/events", tags=["events"])

@router.get("")
def list_events(session: Session = Depends(get_session)):
    items = session.exec(select(Event)).all()
    return {"items": items}

@router.post("")
def create_event(event: Event, session: Session = Depends(get_session)):
    session.add(event)
    session.commit()
    session.refresh(event)
    return event
