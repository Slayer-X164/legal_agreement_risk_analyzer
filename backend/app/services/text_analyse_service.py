from openai import OpenAI
from app.core.config import settings
import json
client = OpenAI(
  api_key=settings.openrouter_api_key,
  base_url="https://openrouter.ai/api/v1"
)

async def analyse_text(text:str):

  prompt = f"""You are a contract law analyst. Analyse the following contract and identify risky clauses.
    For each risky clause, return a JSON object with this exact structure:
  {{
    "overall_score": "<integer 0-100, where 0 is extremely dangerous and 100 is perfectly fair>",
    "summary": "<2-3 sentence overall assessment>",
    "clauses": [
      {{
        "id": "<unique string like c1, c2>",
        "text": "<exact clause text copied from the contract>",
        "risk": "<high | medium | low>",
        "category": "<e.g. Termination, IP Ownership, Non-Compete>",
        "reason": "<plain English explanation of why this is risky>",
        "suggestion": "<a fairer rewrite of this clause>"
      }}
    ]
  }}
  Return ONLY the JSON. No markdown, no backticks, no explanation outside the JSON.
  CONTRACT:
  {text}"""

  response = client.chat.completions.create(
    model="google/gemini-2.5-flash-lite",
    messages=[
      {"role": "user", "content": prompt}
    ],
    temperature=0.2,
    max_tokens=4000
  )
  raw = response.choices[0].message.content

  cleaned = raw.strip()
  if cleaned.startswith("```"):
    cleaned = cleaned.split("```")[1]
    if cleaned.startswith("json"):
        cleaned = cleaned[4:]
  cleaned = cleaned.strip()

  data = json.loads(cleaned)
  return data