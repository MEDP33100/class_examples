/*
Given an array of students:
1. Filter out students with passing grades.
2. Sort students by their grades.
3. Calculate the average grade of the class.
4. Find the student with the highest grade.
5. Create a new array containing only student names.
*/

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 90 },
    { name: "Eve", grade: 65 }
];

console.log(students);

function getPassingStudents() {
    const passingStudents = students.filter(function (student) {
        // if (student.grade >= 70) {
        //     return true;
        // } else {
        //     return false;
        // }
        return student.grade >= 70;
    });
    console.log('students that are passing', passingStudents);
}

function sortStudentsByGrade() {
    students.sort(function(student1, student2) {
        return student2.grade - student1.grade;
    })
    console.log('sorted students', students);
}

function getAverageGrade() {
    let totalGrade = 0;
    students.forEach(function(student) {
        totalGrade += student.grade;
    })
    console.log('totalGrade', totalGrade);
    let averageGrade = totalGrade / students.length;
    console.log('average grade is', averageGrade);
}

function getTopStudent() {
    let highestGrade = 0;
    students.find((student) => {
        if (student.grade >= highestGrade) {
            highestGrade = student.grade;
        }
    })
    console.log('the highest grade is', highestGrade)
}

function getStudentNames() {
    const studentNames = students.map((student) => {
        return student.name;
    });
    console.log(studentNames);
}


getPassingStudents();
sortStudentsByGrade();
getAverageGrade();
getTopStudent();
getStudentNames();