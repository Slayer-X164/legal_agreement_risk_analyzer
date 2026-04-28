from fastapi import APIRouter
from app.routes import analyseRoute

router = APIRouter()
router.include_router(analyseRoute.router,prefix="/analyse",tags=["Analyse"])