console.log("Hello World")


// Type Annotation

let stName: string = "Nadeem Hussain";
let rollNo: number = 4462;
let isStudent: boolean = true;
let marks: number[] = [90, 80, 70, 60, 50];

console.log(stName, rollNo, isStudent, marks);

// interfaces
interface Student {
    name: string;
    rollNo: number;
    isStudent: boolean;
    marks: number[];
}

let student: Student = {
    name: "Nadeem Hussain",
    rollNo: 4462,
    isStudent: true,
    marks: [90, 80, 70, 60, 50]
}
let student2: Student = {
    name: "Asif Ahmed",
    rollNo: 4463,
    isStudent: false,
    marks: [0, 0, 0, 0, 0, 0,]
}

// Type Inference
let stName2 = "Nadeem Hussain";
let rollNo2 = 4462;
let isStudent2 = true;

// Union and Intersection Types
// Union
let batch: string | number = "SMIT";
let id: string | number = 4462;

// Intersection
interface Personal {
    name: string;
    fName: string;
    rollNo: number;
    class: string;
}
interface Address {
    city: string;
    country: string;
    postalCode: number;
}
interface Academic {
    marks: number;
    grade: string;
    section: string;
}

let studentDetail = {
    name: "Nadeem Hussain",
    fName: "Nazeer Hussain",
    rollNo: 4462,
    class: "SMIT",
    city: "Karachi",
    country: "Pakistan",
    postalCode: 12345,
    marks: 90,
    grade: "A",
    section: "A"

}