import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private firestore: Firestore) {}

  // Add employee to Firestore and return a Promise
  addEmployee(employee: Employee): Promise<void> {
    const employeeRef = collection(this.firestore, 'employees');
    return addDoc(employeeRef, { ...employee }).then(() => {
      console.log('Employee added successfully!');
    }).catch(error => {
      console.error('Error adding employee: ', error);
      throw error; // Rethrow the error to be handled in the component
    });
  }
}
