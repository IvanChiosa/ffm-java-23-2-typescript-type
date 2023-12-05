import './App.css'

function App() {

    type NumericGrade = 0 | 1 | 2 | 3 | 4 | 5;
    type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';


    function outputStudent(student: Student): void {
        console.log('='.repeat(30));
        console.log(`${student.firstName} ${student.lastName} ${student.age}`);
        console.log('='.repeat(30));
        console.log('Grades:', student.grades);
    }

    const exampleStudent: Student = {
        firstName: 'Ivan',
        lastName: 'Chiosa',
        age: 35,
        grades: [1, 4, 3, 1, 3, 2, 1]
    };
    outputStudent(exampleStudent);


    interface Student1 {
        firstName: string;
        lastName: string;
        age: number;
        grades: (NumericGrade | LetterGrade | undefined)[];
    }

    function outputStudent1(student: Student1): void {
        console.log('='.repeat(30));
        console.log(`${student.firstName} ${student.lastName} (${student.age})`);
        console.log('='.repeat(30));
        console.log('Noten:', student.grades.map(grade => (grade === undefined ? '*' : grade)));
    }

    const exampleStudent1: Student1 = {
        firstName: 'Ivan',
        lastName: 'Chiosa',
        age: 35,
        grades: ['A', 2, "F", 3, 1, "B", 2, 5, undefined],
    };
    outputStudent1(exampleStudent1);


    function printAllStudents(students: Student1[]): void {
        students.forEach(student => outputStudent1(student));
    }

    const studentList : Student1[] = [
        {
            firstName: 'Ivan',
            lastName: 'Chiosa',
            age: 35,
            grades: ['A', 2, "F", 3, 1, "B", 2, 5, undefined],
        },
        {
            firstName: 'Mario',
            lastName: 'Rossi',
            age: 35,
            grades: ['A', 2, "F", 3, 1, "B", 2, 5, undefined],
        },
        {
            firstName: 'Natali',
            lastName: 'Dora',
            age: 35,
            grades: ['A', 2, "F", 3, 1, "B", 2, 5, undefined],
        }
    ]
    printAllStudents(studentList);


    return (
        <>


        </>
    )
}

export default App
