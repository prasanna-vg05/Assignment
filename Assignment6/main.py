import time

def greet(name):
    print(f"Hello, {name}!")
    time.sleep(2) # Simulates a time-consuming operation (blocks execution)
    print(f"Goodbye, {name}!")

print("Starting program...")
greet("Alice")
print("Program finished.")