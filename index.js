const groupStudents = () => {
  const students = ['andre', 'anisha', 'ash', 'celia', 'davidb', 'davidn', 'keith', 'jennie', 'joanna', 'jared', 'raaya', 'rahul', 'ruslan', 'taine', 'tamari', 'noel']

  //shuffle array
  for (let i = students.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i
    [students[i], students[j]] = [students[j], students[i]] // swap elements
  }

  console.log(students)
}

groupStudents()