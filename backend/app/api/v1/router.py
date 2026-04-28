from fastapi import APIRouter
from app.api.v1 import contract
router = APIRouter(prefix="/api")
router.include_router(contract.router,prefix="/analyse",tags=["Analyse"])