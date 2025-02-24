import json
import os

# Get the current script's directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Load the original JSON file
input_file = os.path.join(current_dir, "all-utc-timezones.json")
with open(input_file, "r", encoding="utf-8") as file:
    data = json.load(file)

# Extract the 'value' field from each entry
timezones = [entry["text"] for entry in data]

# Save the extracted values to a new JSON file
output_file = os.path.join(current_dir, "timezones.json")
with open(output_file, "w", encoding="utf-8") as output_file:
    json.dump(timezones, output_file, indent=4)

print("Timezones extracted and saved successfully.")