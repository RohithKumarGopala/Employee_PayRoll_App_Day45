const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHTML = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for (const employeePayrollData of employeePayrollList) {
        innerHTML = `${innerHTML}
   <tr>
     <td><img class="profile"  src="${EmployeePayrollData._profilePic}" alt=""></td>
     <td>${employeePayrollData._name}</td>
     <td>${employeePayrollData._gender}</td>
     <td>${getDeptHtml(employeePayrollData._department)}</td>   
     <td>${employeePayrollData._salary}</td>
     <td>${employeePayrollData._StartDate}</td>
   <td>
    <img name = "${employeePayrollData._id}" onclick="remove(this)" src="./delete-black-18dp.svg" alt="delete">
    <img name = "${employeePayrollData._id}" onclick="update(this)" src="./create-black-18dp (1).svg" alt="edit">
</td>
</tr>
`;
}
document.querySelector('#table-display').innerHTML = innerHTML;
}
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Rohith Kumar Gopala',
            _gender: 'male',
            _department: ['Engineering'],
            _salary: '450000',
            _StartDate: '24 April 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: './Ellipse -3.png'
        },
        {
            _name: 'Rahul Kumar Gopala',
            _gender: 'Male',
            _department: ['Engineer'],
            _salary: '500000',
            _StartDate: '13 August 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: './Ellipse -8.png'  
        }
    ];
    return employeePayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}