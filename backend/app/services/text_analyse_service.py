from google import genai
from app.core.config import settings

client = genai.Client(api_key=settings.gemini_api_key)

async def analyse_text(text:str):
  response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="explain me python backend in fast api"
  )
  return response