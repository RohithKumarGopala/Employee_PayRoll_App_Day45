window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
const innerHTML= `${headerHtml}
<tr>
<td><img class="profile" alt="" src="./Ellipse -3.png">
</td>
<td>Rohith Kumar Gopala</td>
<td>Male</td>
<td><div class='dept-label'>Engineering</div></td>
<td>450000</td>
<td>24 April 2022</td>
<td>
    <img id = "1" onclick="remove(this)" alt="delete" src="./delete-black-18dp.svg">
    <img id = "1" alt="edit" onclick="update(this)" src="./create-black-18dp (1).svg">
</td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHTML;
}