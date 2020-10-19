var faker = require('faker');
import Patient from '../models/patient';
const PATIENTS = [
    new Patient(
        'p1',
        'cp1',
        `${faker.name.findName()}`,
        `${faker.image.avatar()}`,
        'Heart Patient',
        49,
        'High heart rate Needs attention. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        false
    ),
    new Patient(
        'p2',
        'cp1',
        `${faker.name.findName()}`,
        `${faker.image.avatar()}`,
        'High BP',
        60,
        'High BP Needs attention. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        true
    ),
    new Patient(
        'p3',
        'cp1',
        `${faker.name.findName()}`,
        `${faker.image.avatar()}`,
        'High BP',
        67,
        'High BP Needs attention. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        false
    ),
    new Patient(
        'p4',
        'cp1',
        `${faker.name.findName()}`,
        `${faker.image.avatar()}`,
        'Aortic Aneurysm',
        79,
        'High BP Needs attention. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        false
    ),
    new Patient(
        'p5',
        'cp1',
        `${faker.name.findName()}`,
        `${faker.image.avatar()}`,
        'Arthritis',
        79,
        'Joint Pain. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        true
    ),
];

export default PATIENTS;