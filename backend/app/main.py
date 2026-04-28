from fastapi import FastAPI
from app.api import router as api_router
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
app = FastAPI(
  title="Contract Risk Analysis and suggestion",
  version="1.0.0"
)

origins = [
  settings.frontend_url
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router,prefix="/api")

if __name__ == "__main__":
  uvicorn.run("app.main:app",host="0.0.0.0",port=8000)