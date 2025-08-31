
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "JavaScript",
    "price": 15000,
    "Instructor": "Neha Sharma"
  },
  {
    "name": "Java",
    "price": 18000,
    "Instructor": "Arjun Mehta"
  },
  {
    "name": "C++",
    "price": 17000,
    "Instructor": "Ravi Kumar"
  },
  {
    "name": "Data Science with Python",
    "price": 25000,
    "Instructor": "Priya Iyer"
  },
  {
    "name": "Machine Learning",
    "price": 30000,
    "Instructor": "Aniket Verma"
  },
  {
    "name": "Web Development (MERN)",
    "price": 28000,
    "Instructor": "Simran Kaur"
  },
  {
    "name": "Cloud Computing (AWS)",
    "price": 35000,
    "Instructor": "Rohit Malhotra"
  },
  {
    "name": "DevOps",
    "price": 32000,
    "Instructor": "Sonal Gupta"
  },
  {
    "name": "Cyber Security",
    "price": 27000,
    "Instructor": "Abhishek Joshi"
  },
  {
    "name": "AI Fundamentals",
    "price": 40000,
    "Instructor": "Tanvi Kapoor"
  }
]);

// Print a message to the output window.
console.log(`Done Inserting data!`);

