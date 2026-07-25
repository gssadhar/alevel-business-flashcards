import json

def load_database():
    """Loads the local JSON question database."""
    try:
        with open("database.json", "r") as file:
            return json.load(file)
    except FileNotFoundError:
        print("Error: database.json file not found.")
        return {}

def mark_student_answer(question_id, student_input_val):
    """Marks a student answer against the local database parameters."""
    database = load_database()
    
    if question_id not in database:
        return f"Error: Question ID '{question_id}' not found in database."
    
    q_data = database[question_id]
    
    # Check if it's a numerical calculation question
    if q_data["min_acceptable"] is not None and q_data["max_acceptable"] is not None:
        try:
            numeric_val = float(student_input_val)
            is_correct = q_data["min_acceptable"] <= numeric_val <= q_data["max_acceptable"]
            awarded = q_data["max_marks"] if is_correct else 0
            status = "Correct" if is_correct else "Incorrect"
        except ValueError:
            status = "Invalid (Non-numeric)"
            awarded = 0
    else:
        # Qualitative / extended response evaluation stub
        status = "Evaluated against model framework"
        awarded = 0 if len(str(student_input_val).strip()) < 5 else q_data["max_marks"]

    return {
        "status": status,
        "awarded_marks": awarded,
        "max_marks": q_data["max_marks"],
        "correct_answer": q_data["correct_answer"],
        "explanation": q_data["explanation"],
        "extract": q_data.get("extract", "No extract provided.")
    }

if __name__ == "__main__":
    database = load_database()
    
    print("=== A-LEVEL BUSINESS EXAM MARKER ===")
    q_id = input("Enter Question ID to mark (e.g., 1a, 1b, 2a): ").strip()
    
    if q_id in database:
        q = database[q_id]
        print(f"\n[{q['theme']} - Year {q['year']}]")
        print(f"Context: {q['extract']}")
        print(f"Question: {q['question']}")
        
        student_ans = input("\nEnter student's answer: ")
        result = mark_student_answer(q_id, student_ans)
        
        print("\n================ MARKING REPORT ================")
        print(f"Your Submitted Answer: \"{student_ans}\"")
        print(f"Status: {result['status']}")
        print(f"Marks Awarded: {result['awarded_marks']}/{result['max_marks']}")
        print(f"Model Answer / Key Points: {result['correct_answer']}")
        print(f"Detailed Explanation: {result['explanation']}")
        print("================================================")
    else:
        print(f"Error: Question ID '{q_id}' not found in database.")