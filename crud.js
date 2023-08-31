//Imediately Invoked Function Expression(IIFE)
let Library = (() => {
    let students = [
        {id: 1, name: 'Student 1'},
        {id: 2, name: 'Student 2'},
        {id: 3, name: 'Student 3'}
    ];
    let borrowers = [];
    let books = [];
    let records = [];

    return {
        getAllStudents: () => {
            return students
        },
        getStudent: (id) => {
            return students.find(student => student.id === id)
        },
        deleteStudent: (id) => {
            students = students.filter(student => student.id !== id )
        },
        addStudent: (student) => {
            students.push(student)
        },
        updateStudent: (id, updatedData) => {
            let studentToUpdate = Library.getStudent(id)

            if(studentToUpdate) {
                Object.assign(studentToUpdate, updatedData)
            }
        }
    }
})()
Library.updateStudent(1, {name: 'student 10'})
console.log(Library.getAllStudents())