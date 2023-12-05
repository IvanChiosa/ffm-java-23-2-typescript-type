import './App.css'

function App() {

    type NumericGrade = 0 | 1 | 2 | 3 | 4 | 5;
    type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

    interface Transcript {
        [subject: string]: NumericGrade | LetterGrade | undefined;
    }


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
        transcript?: Transcript;
    }

    function outputStudent1(student: Student1): void {
        const nameLength = student.firstName.length + student.lastName.length + String(student.age).length;
        const nameSeparator = '='.repeat(nameLength);

        console.log(`${student.firstName} ${student.lastName} (${student.age})`);
        console.log('='.repeat(30));
        console.log('Noten:');

        for (const subject in student.transcript) {
            if (Object.prototype.hasOwnProperty.call(student.transcript, subject)) {
                const grade = student.transcript[subject];
                console.log(`${subject}: ${grade === undefined ? '*' : grade}`);
            }

        }
        console.log(nameSeparator);
    }

    const exampleStudent1: Student1 = {
        firstName: 'Ivan',
        lastName: 'Chiosa',
        age: 35,
        transcript: {
            'Math': 1,
            'English': 4,
            'History': 3,
            'Geography': 1,
            'Physics': 3,
            'Chemistry': 2,
            'Biology': 1,
        }
    }

    outputStudent1(exampleStudent1);


    function printAllStudents(students: Student1[]): void {
        students.forEach(student => outputStudent1(student));
    }

    const studentList: Student1[] = [
        {
            firstName: 'Ivan',
            lastName: 'Chiosa',
            age: 35,
            transcript: {
                'Math': 1,
                'History': 3,
                'Geography': 1,
                'Physics': 3,
                'Chemistry': 2,
            }
        },
        {
            firstName: 'Mario',
            lastName: 'Rossi',
            age: 35,
            transcript: {
                'Math': 1,
                'English': 4,
                'History': 3,
                'Geography': 1,
                'Physics': 3,
                'Biology': 1,
            }
        },
        {
            firstName: 'Natali',
            lastName: 'Dora',
            age: 35,
            transcript: {
                'Math': 1,
                'English': 4,
                'Geography': 1,
                'Physics': 3,
                'Chemistry': 2,
                'Biology': 1,
            }
        }
    ]
    printAllStudents(studentList);


    return (
        <>


        </>
    )
}

export default App
