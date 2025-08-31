use("CRUDDB")

// create

// db.createCollection("courses")

// db.courses.insertOne({
//   name: "Micheal's web dev free course",
//   price: 0,
//   assignments: 12,
//   projects: 5
// })

// db.courses.insertMany([
//   {
//     "name": "Python",
//     "price": 20000,
//     "assignments": 15,
//     "projects": 3
//   },
//   {
//     "name": "JavaScript",
//     "price": 15000,
//     "assignments": 12,
//     "projects": 2
//   },
//   {
//     "name": "Java",
//     "price": 18000,
//     "assignments": 14,
//     "projects": 3
//   },
//   {
//     "name": "C++",
//     "price": 17000,
//     "assignments": 10,
//     "projects": 2
//   },
//   {
//     "name": "Data Science with Python",
//     "price": 25000,
//     "assignments": 20,
//     "projects": 5
//   },
//   {
//     "name": "Machine Learning",
//     "price": 30000,
//     "assignments": 22,
//     "projects": 6
//   },
//   {
//     "name": "Web Development (MERN)",
//     "price": 28000,
//     "assignments": 18,
//     "projects": 4
//   },
//   {
//     "name": "Cloud Computing (AWS)",
//     "price": 35000,
//     "assignments": 16,
//     "projects": 4
//   },
//   {
//     "name": "DevOps",
//     "price": 32000,
//     "assignments": 14,
//     "projects": 3
//   },
//   {
//     "name": "Cyber Security",
//     "price": 27000,
//     "assignments": 17,
//     "projects": 4
//   },
//   {
//     "name": "AI Fundamentals",
//     "price": 40000,
//     "assignments": 25,
//     "projects": 7
//   }
// ]
// )


async function run() {   

  // READ
  // below line is for find
  // let cursor = db.courses.find({price: 0}); 
  let cursor = db.courses.findOne({price: 15000});

  const count = await db.courses.countDocuments({price: 15000})
  console.log("Count: " + count);

  // below lines are for find
  // const results = await cursor.toArray();
  // console.log(results);

  console.log(cursor);

  // update single record
  let updateDB = await db.courses.updateOne({price: 20000}, {$set: {price: 20550}})
  console.log(updateDB);

  // udpate multiple records
  let updateMany = await db.courses.updateMany({price: 20000}, {$set: {price: 20550}})
  console.log(updateMany);

  // Delete one record
  let deleteData = await db.courses.deleteOne({price: 0}, {$set: {price: 20550}})
  console.log(deleteData);

  // Delete multiple records
  let deleteDatas = await db.courses.deleteMany({price: 0}, {$set: {price: 20550}})
  console.log(deleteDatas);

  // Find a record with comparison operator
  let record1 = await db.courses.findOne({price: {$eq: 17000}})
  console.log(record1);

  // Find multiple record with comparison operator
  let records = await db.courses.find({price: {$eq: 15000}})
  console.log(records)

  // And operation 
  let item = await db.courses.find( {
   $and: [
      { price: { $gt: 20000 } },
      { assignments: {$lt: 20} }
   ]
  })
  console.log(item)
}

run()