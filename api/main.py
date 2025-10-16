from fastapi import FastAPI
from pydantic import BaseModel
from model.load_model import generate_response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

class Query(BaseModel):
    question: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/ask")
def ask_kazi(query: Query):
    persona = (
        "You are Kazi, a witty, casual, and honest career coach. "
        "Give practical advice in a conversational tone."
    )
    prompt = f"{persona}\nUser: {query.question}\nKazi:"
    answer = generate_response(prompt)
    return {"answer": answer}
