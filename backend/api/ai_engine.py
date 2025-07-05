import os, json
from openai import OpenAI

def get_ai_suggestions(task_data, context_data):
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return { "error": "OPENAI_API_KEY environment variable not set." }

    client = OpenAI(api_key=api_key)
    prompt = f"""You are a smart assistant helping users manage their tasks.
We have the following task data (JSON): {json.dumps(task_data)}
and the following daily context (JSON): {json.dumps(context_data)}

Based on this information, provide:
- A numeric priority score between 0 (low) and 1 (high)
- A short deadline recommendation in ISO8601 date format (YYYY-MM-DD)
- An improved task description that is more detailed and context‑aware
- A recommended category name

Respond strictly as valid JSON with keys: priority_score, deadline, improved_description, category
"""  # noqa: W605

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{{"role": "user", "content": prompt}}],
        temperature=0.3,
    )
    try:
        return json.loads(completion.choices[0].message.content)
    except Exception as e:
        return { "error": str(e), "raw": completion.choices[0].message.content }
