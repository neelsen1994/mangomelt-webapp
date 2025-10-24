from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/checkout", tags=["checkout"])

class ArtworkCheckoutIn(BaseModel):
    artwork_id: str
    quantity: int = 1

@router.post("/artwork")
def checkout_artwork(_: ArtworkCheckoutIn):
    # Placeholder endpoint for Stripe Checkout Session
    return {"url": "https://checkout.stripe.com/test_session"}
