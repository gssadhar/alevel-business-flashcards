import json

def load_database():
    """Loads the local JSON question database."""
    try:
        with open("database.json", "r") as file:
            return json.load(file)
    except FileNotFoundError:
        print("Error: database.json file not found.")
        return {}

def mark_student_answer(question_id, student_value):
    """Marks a student answer against the local database parameters."""
    database = load_database()
    
    if question_id not in database:
        return f"Error: Question ID '{question_id}' not found in database."
    
    q_data = database[question_id]
    
    # Evaluate if numerical answer falls within the acceptable range
    if q_data["min_acceptable"] <= student_value <= q_data["max_acceptable"]:
        return {
            "status": "Correct",
            "awarded_marks": q_data["max_marks"],
            "max_marks": q_data["max_marks"],
            "correct_answer": q_data["correct_answer"]
        }
    else:
        return {
            "status": "Incorrect",
            "awarded_marks": 0,
            "max_marks": q_data["max_marks"],
            "correct_answer": q_data["correct_answer"],
            "explanation": q_data["explanation"]
        }

if __name__ == "__main__":
    database = load_database()
    
    print("=== A-LEVEL BUSINESS EXAM MARKER ===")
    q_id = input("Enter Question ID to mark (e.g., 1a): ").strip()
    
    if q_id in database:
        print(f"\nQuestion: {database[q_id]['question']}")
        try:
            student_input = float(input("Enter student's numerical answer: "))
            result = mark_student_answer(q_id, student_input)
            
            print("\n--- MARKING REPORT ---")
            print(f"Status: {result['status']}")
            print(f"Marks: {result['awarded_marks']}/{result['max_marks']}")
            print(f"Correct Answer: {result['correct_answer']}")
            if "explanation" in result:
                print(f"Explanation: {result['explanation']}")
                
        except ValueError:
            print("Error: Please enter a valid number for the student's answer.")
    else:
        print(f"Error: Question ID '{q_id}' not found in database.")