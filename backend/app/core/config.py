from pydantic_settings import BaseSettings

class Settings(BaseSettings):
  frontend_url:str = "http://localhost:3000"

  class Config:
    env_vile = ".env"
    env_file_encoding ="utf-8"

settings = Settings()