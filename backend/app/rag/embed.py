from huggingface_hub import InferenceClient
from app.core.config import settings
import json
client = InferenceClient(
    provider="hf-inference",
    api_key=settings.hf_token,
)

with open("app/rag/data/fair_clauses.json","r") as file:
  fairClauses = json.load(file)
  for clause in fairClauses:
    embedding = client.feature_extraction(
      clause["text"],
      model="BAAI/bge-small-en-v1.5",
    )
    clause["embedding"] = embedding.tolist()
    print(clause)


