from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch
import re

MODEL_PATH = "/home/none/Downloads/new/chatbot/api/model/career_bot_gpt2NewEntry" 

tokenizer = GPT2Tokenizer.from_pretrained(MODEL_PATH)
model = GPT2LMHeadModel.from_pretrained(MODEL_PATH)

def generate_response(prompt):
    inputs = tokenizer(prompt, return_tensors="pt", padding=True, truncation=True)
    # attention_mask = inputs.get("attention_mask")

    output = model.generate(
        **inputs,
        # attention_mask=attention_mask,
        max_length=220,
        temperature=0.8,
        top_p=0.9,
        pad_token_id=tokenizer.eos_token_id
    )

    reply = tokenizer.decode(output[0], skip_special_tokens=True)
    match = re.search(r"Kazi:(.*?)(?:User:|Question:|$)", reply, re.S)
    reply = match.group(1).strip() if match else ""
    return reply
