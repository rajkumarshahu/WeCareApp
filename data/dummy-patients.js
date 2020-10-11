import Patient from '../models/patient';

const PATIENTS = [
    new Patient(
        'p1',
        'cp1',
        'John Doe',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'Heart Patient',
        49,
        'High heart rate Needs attention'
    ),
    new Patient(
        'p2',
        'cp1',
        'Jane Doe',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'High BP',
        60,
        'High BP Needs attention'
    ),
    new Patient(
        'p3',
        'cp1',
        'Jane Smith',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'High BP',
        67,
        'High BP Needs attention'
    ),
    new Patient(
        'p4',
        'cp1',
        'Adam Smith',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'Aortic Aneurysm',
        79,
        'High BP Needs attention'
    ),
    new Patient(
        'p5',
        'cp1',
        'Jackie Nolan',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'Arthritis',
        79,
        'Joint Pain'
    ),
];

export default PATIENTS;