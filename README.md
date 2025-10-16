# Career Insight Bot

## Overview

Career Insight Bot is an AI-powered chatbot that helps users explore career roles, understand their requirements, and get guidance on potential career paths. Unlike traditional career advisors, this bot leverages a fine-tuned GPT-2 model trained on a Career Role Q&A dataset to generate insightful, domain-specific responses.

The bot supports questions about various industries including Computer Science, Business, Engineering, Medicine, Education, Arts, Law, Finance, Marketing, and Nursing.

## Features

* Interactive conversational interface.
* Answers questions about career roles, skills, responsibilities, and career progression.
* Provides realistic, structured career guidance based on Q&A dataset.
* Human-friendly text generation using a fine-tuned GPT-2 model.

## Tech Stack

* **Frontend:** React
* **Backend:** FastAPI
* **Model:** GPT-2 (Hugging Face Transformers)
* **Libraries:** torch, transformers, uvicorn, pydantic

## Setup Instructions

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/Cchancee/careerInsightBot.git
   cd careerInsightBot/api
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run FastAPI backend:

   ```bash
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run React app:

   ```bash
   npm start
   ```

The frontend will run at `http://localhost:3000` and communicate with the backend API.

## Model

The GPT-2 model was fine-tuned on the Career Role Q&A Dataset. The dataset contains detailed Q&A pairs for multiple career roles, including responsibilities, required skills, tools, career growth paths, and day-to-day tasks.

### Training Hyperparameters

| Hyperparameter | Value |
| -------------- | ----- |
| Epochs         | 3     |
| Batch Size     | 4     |
| Learning Rate  | 5e-5  |
| Weight Decay   | 0.01  |
| Warmup Steps   | 100   |
| Optimizer      | AdamW |
| Max Length     | 256   |

### Evaluation Metrics

* **Perplexity:** Placeholder (to be added)
* **BLEU Score:** 0.0214 (for generative response quality)
* **Qualitative Testing:** Human evaluation of chatbot conversations

## Example Conversation

```text
User: What skills are required to become a Data Analyst?
Bot: Essential skills include proficiency in SQL, Excel, Python or R, data visualization tools like Tableau or Power BI, and strong analytical thinking.
```

## Folder Structure

```
careerInsightBot/
│
├─ frontend/
│  ├─ src/
│  ├─ public/
│  └─ package.json
│
├─ backend/          
│  ├─ main.py
│  ├─ requirements.txt
│  └─ model/          # 
```

## Future Improvements

* Expand dataset to cover more career roles.
* Incorporate larger models for better generative responses.
* Add multilingual support.
* Build more advanced evaluation metrics for conversational quality.
* Implement caching to reduce latency for repeated queries.

## License

MIT License
