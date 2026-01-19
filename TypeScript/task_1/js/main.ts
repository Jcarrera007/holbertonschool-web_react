interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "Maria",
    lastName: "Gonzalez",
    fullTimeEmployee: true,
    location: "Juncos",
    contract: false
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "Carlos",
    lastName: "Sanchez",
    fullTimeEmployee: true,
    location: "Bayamon",
    numberOfReports: 5
};

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayName(): string {
        return this.firstName;
    }
}
