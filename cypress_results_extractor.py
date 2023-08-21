#Program to extract the json results from the cypress output
import re

# Input block of text
text = input()

# Regular expression pattern to match JSON
pattern = r'\{(?:[^{}]|(?R))*\}'

# Find all occurrences of JSON using the pattern
json_matches = re.findall(pattern, text)

# Print the extracted JSON matches
for match in json_matches:
    print(match)
