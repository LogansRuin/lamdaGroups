const groupStudents = (groupNames, students) => {
  //shuffle array - Fisher-Yates algorithm
  for (let i = students.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [students[i], students[j]] = [students[j], students[i]]; // swap elements
  }
  console.log('Shuffled students: ', students, '\n')

  //Check how many groups there are
  const numOfGroups = groupNames.length
  console.log('Number of groups: ',numOfGroups, '\n')
  
  // how many in each group?
  const numInBase = Math.floor(students.length / numOfGroups)
  const extras = students.length % numOfGroups || 'none'
  console.log(`Base number in each group: ${numInBase} with ${extras} left over`,'\n')

  // Allocate everyone to a group
  const allocate = () => {
    const group = []
    for (let i = 0; i < numInBase; i++) {
    group.push(students.shift())
    }
    return group
  }

  groupNames.map(group => {
    if(extras === 'none'){
      console.log( {
        name: group,
        students: allocate()
      })
    }
  })

console.log(groupNames)
}

const students = ['andre', 'anisha', 'ash', 'celia', 'davidb', 'davidn', 'keith', 'jennie', 'joanna', 'jared', 'raaya', 'rahul', 'ruslan', 'taine', 'tamari', 'noel']

const groupNames = ['1','2','3','4']

groupStudents(groupNames, students)