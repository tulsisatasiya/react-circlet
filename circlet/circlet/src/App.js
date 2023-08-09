import logo from './logo.svg';
import './App.css';

function App() {

  const employeeData = [
    {
      id: 1,
      name: 'riya',
      gender: 'Male',
      salary: 60000,
      age: 28,
    },
    {
      id: 2,
      name: 'niya',
      gender: 'Female',
      salary: 55000,
      age: 32,
    },
    {
      id: 3,
      name: 'ram',
      gender: 'male',
      salary: 20000,
      age: 20,
    },
    {
      id: 4,
      name: 'karina',
      gender: 'Female',
      salary: 25000,
      age: 22,
    },
    {
      id: 5,
      name: 'shyam',
      gender: 'male',
      salary: 30000,
      age: 42,
    },
    {
      id: 6,
      name: 'neha',
      gender: 'Female',
      salary: 56000,
      age: 18,
    },
    {
      id: 7,
      name: 'kalu',
      gender: 'male',
      salary: 10000,
      age: 32,
    },
    {
      id: 6,
      name: 'vidhi',
      gender: 'Female',
      salary: 15000,
      age: 45,
    },
    {
      id: 7,
      name: 'varun',
      gender: 'male',
      salary: 34000,
      age: 22,
    },
    {
      id: 8,
      name: 'sirat',
      gender: 'Female',
      salary: 75000,
      age: 52,
    },
    {
      id: 9,
      name: 'sirat',
      gender: 'male',
      salary: 24000,
      age: 42,
    },
    {
      id: 10,
      name: 'mena',
      gender: 'Female',
      salary: 55000,
      age: 32,
    },
    {
      id: 11,
      name: 'vijay',
      gender: 'male',
      salary: 5000,
      age: 65,
    },
    {
      id: 12,
      name: 'ramya',
      gender: 'Female',
      salary: 37000,
      age: 23,
    },
    {
      id: 13,
      name: 'mohan',
      gender: 'male',
      salary: 54000,
      age: 65,
    },
    {
      id: 14,
      name: 'priya',
      gender: 'Female',
      salary: 3000,
      age: 20,
    },
    {
      id: 15,
      name: 'aaryan',
      gender: 'male',
      salary: 47000,
      age: 24,
    },
    {
      id: 16,
      name: 'tisha',
      gender: 'Female',
      salary: 43000,
      age: 32,
    },
    {
      id: 17,
      name: 'mukesh',
      gender: 'male',
      salary: 20000,
      age: 22,
    },
    {
      id: 18,
      name: 'virti',
      gender: 'female',
      salary: 30000,
      age: 25,
    },
    {
      id: 19,
      name: 'virat',
      gender: 'male',
      salary: 40000,
      age: 34,
    },
    {
      id: 20,
      name: 'malini',
      gender: 'female',
      salary: 50000,
      age: 56,
    }
  ]

  const EmployeesAbove50K = employeeData.filter(function(emp) {
    return emp.salary > 50000;
  });
  const FemaleEmployees = employeeData.filter(function(emp) {
    return emp.gender === 'Female';
  });
  
  const EmployeesAbove30 = employeeData.filter(function(emp) {
    return emp.age > 30;
  });
  
  const increasedSalary = employeeData.filter(function(emp) {
    return emp.salary * 1.1 > 25000 && emp.age > 25;
  });

  const filteredFemaleSalary = employeeData.filter(function(emp) {
    return emp.gender === 'Female' && emp.salary >= 20000 && emp.salary <= 30000;
  });
  
  
  
  
  return (
    <div className="App">
       <h1>Employee List</h1>
      <center>
      <table style={{ border: '4' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>

      {/* 1. Display all employee List Above 50000 RS. */}

      <h2>1. Employees Above 50000 RS:</h2>
      <center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {EmployeesAbove50K.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>

      {/* 2. Display only Female Employee List  */}
      <h2>2. Female Employee List </h2>
      <center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {FemaleEmployees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>

      {/* Display Employee List whose age is greater then 30  */}
      <h2>3.Employee List whose age is greater then 30  *:</h2>
      <center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {EmployeesAbove30.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>

        {/* Display Employee List with  Name and salary increase by 10 percent and age should be above 25. */}
      <h2>4.Employee List with  Name and salary increase by 10 percent and age should be above 25.</h2>
      <center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {increasedSalary.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
      
      {/* Display Employee List Only  Female Name And salary ,age should be  20k to 30K Between   */}
      <h2>5.Employee List Only  Female Name And salary ,age should be  20k to 30K Between</h2>
      <center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredFemaleSalary.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;
