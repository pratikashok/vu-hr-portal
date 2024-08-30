
let data = [
    { "id": 1, "Applicant Name": "Alice Johnson", "Applied Role": "Frontend Developer", "Experience": "5 years", "Date of Application": "2024-07-10", "Status": "Pending" },
    { "id": 2, "Applicant Name": "Bob Smith", "Applied Role": "Backend Developer", "Experience": "7 years", "Date of Application": "2024-07-11", "Status": "Interviewed" },
    { "id": 3, "Applicant Name": "Charlie Davis", "Applied Role": "UI/UX Designer", "Experience": "4 years", "Date of Application": "2024-07-12", "Status": "Hired" },
    { "id": 4, "Applicant Name": "Diana Evans", "Applied Role": "Project Manager", "Experience": "8 years", "Date of Application": "2024-07-13", "Status": "Rejected" },
    { "id": 5, "Applicant Name": "Edward Wilson", "Applied Role": "Data Scientist", "Experience": "6 years", "Date of Application": "2024-07-14", "Status": "Pending" },
    { "id": 6, "Applicant Name": "Fiona Moore", "Applied Role": "DevOps Engineer", "Experience": "5 years", "Date of Application": "2024-07-15", "Status": "Interviewed" },
    { "id": 7, "Applicant Name": "George Taylor", "Applied Role": "Marketing Specialist", "Experience": "3 years", "Date of Application": "2024-07-16", "Status": "Hired" },
    { "id": 8, "Applicant Name": "Hannah Anderson", "Applied Role": "Content Writer", "Experience": "2 years", "Date of Application": "2024-07-17", "Status": "Rejected" },
    { "id": 9, "Applicant Name": "Irene Thomas", "Applied Role": "Sales Executive", "Experience": "4 years", "Date of Application": "2024-07-18", "Status": "Pending" },
    { "id": 10, "Applicant Name": "Jack Harris", "Applied Role": "Product Designer", "Experience": "5 years", "Date of Application": "2024-07-19", "Status": "Interviewed" },
    { "id": 11, "Applicant Name": "Karen Lewis", "Applied Role": "Software Engineer", "Experience": "6 years", "Date of Application": "2024-07-20", "Status": "Hired" },
    { "id": 12, "Applicant Name": "Liam Robinson", "Applied Role": "System Administrator", "Experience": "7 years", "Date of Application": "2024-07-21", "Status": "Rejected" },
    { "id": 13, "Applicant Name": "Mia Walker", "Applied Role": "Business Analyst", "Experience": "4 years", "Date of Application": "2024-07-22", "Status": "Pending" },
    { "id": 14, "Applicant Name": "Noah Wright", "Applied Role": "Web Developer", "Experience": "3 years", "Date of Application": "2024-07-23", "Status": "Interviewed" },
    { "id": 15, "Applicant Name": "Olivia Martinez", "Applied Role": "HR Manager", "Experience": "8 years", "Date of Application": "2024-07-24", "Status": "Hired" },
    { "id": 16, "Applicant Name": "Paul Harris", "Applied Role": "SEO Specialist", "Experience": "5 years", "Date of Application": "2024-07-25", "Status": "Rejected" },
    { "id": 17, "Applicant Name": "Quinn Clark", "Applied Role": "Network Engineer", "Experience": "6 years", "Date of Application": "2024-07-26", "Status": "Pending" },
    { "id": 18, "Applicant Name": "Rachel Adams", "Applied Role": "IT Consultant", "Experience": "7 years", "Date of Application": "2024-07-27", "Status": "Interviewed" },
    { "id": 19, "Applicant Name": "Sam Johnson", "Applied Role": "Technical Writer", "Experience": "4 years", "Date of Application": "2024-07-28", "Status": "Hired" },
    { "id": 20, "Applicant Name": "Tina Scott", "Applied Role": "Customer Support", "Experience": "3 years", "Date of Application": "2024-07-29", "Status": "Rejected" },
    { "id": 21, "Applicant Name": "Ulysses Bell", "Applied Role": "Graphic Designer", "Experience": "5 years", "Date of Application": "2024-07-30", "Status": "Pending" },
    { "id": 22, "Applicant Name": "Victoria Hill", "Applied Role": "Sales Manager", "Experience": "6 years", "Date of Application": "2024-07-31", "Status": "Interviewed" },
    { "id": 23, "Applicant Name": "William Green", "Applied Role": "Front-End Developer", "Experience": "4 years", "Date of Application": "2024-08-01", "Status": "Hired" },
    { "id": 24, "Applicant Name": "Xena Baker", "Applied Role": "Backend Developer", "Experience": "7 years", "Date of Application": "2024-08-02", "Status": "Rejected" },
    { "id": 25, "Applicant Name": "Yara Allen", "Applied Role": "Data Analyst", "Experience": "5 years", "Date of Application": "2024-08-03", "Status": "Pending" },
    { "id": 26, "Applicant Name": "Zachary Young", "Applied Role": "Product Manager", "Experience": "8 years", "Date of Application": "2024-08-04", "Status": "Interviewed" },
    { "id": 27, "Applicant Name": "Anna King", "Applied Role": "Operations Manager", "Experience": "6 years", "Date of Application": "2024-08-05", "Status": "Hired" },
    { "id": 28, "Applicant Name": "Ben Wright", "Applied Role": "Customer Success Manager", "Experience": "3 years", "Date of Application": "2024-08-06", "Status": "Rejected" },
    { "id": 29, "Applicant Name": "Cindy Collins", "Applied Role": "Financial Analyst", "Experience": "7 years", "Date of Application": "2024-08-07", "Status": "Pending" },
    { "id": 30, "Applicant Name": "David Lee", "Applied Role": "Legal Advisor", "Experience": "8 years", "Date of Application": "2024-08-08", "Status": "Interviewed" },
    { "id": 31, "Applicant Name": "Emily Carter", "Applied Role": "Recruiter", "Experience": "5 years", "Date of Application": "2024-08-09", "Status": "Hired" },
    { "id": 32, "Applicant Name": "Frank Martin", "Applied Role": "Executive Assistant", "Experience": "6 years", "Date of Application": "2024-08-10", "Status": "Rejected" },
    { "id": 33, "Applicant Name": "Grace Davis", "Applied Role": "Web Designer", "Experience": "4 years", "Date of Application": "2024-08-11", "Status": "Pending" },
    { "id": 34, "Applicant Name": "Henry Wilson", "Applied Role": "Database Administrator", "Experience": "7 years", "Date of Application": "2024-08-12", "Status": "Interviewed" },
    { "id": 35, "Applicant Name": "Ivy Thomas", "Applied Role": "Content Strategist", "Experience": "5 years", "Date of Application": "2024-08-13", "Status": "Hired" },
    { "id": 36, "Applicant Name": "James Miller", "Applied Role": "Business Development Manager", "Experience": "8 years", "Date of Application": "2024-08-14", "Status": "Rejected" },
    { "id": 37, "Applicant Name": "Katherine Robinson", "Applied Role": "Event Coordinator", "Experience": "3 years", "Date of Application": "2024-08-15", "Status": "Pending" },
    { "id": 38, "Applicant Name": "Leo White", "Applied Role": "E-commerce Specialist", "Experience": "6 years", "Date of Application": "2024-08-16", "Status": "Interviewed" },
    { "id": 39, "Applicant Name": "Maya Hall", "Applied Role": "Training Coordinator", "Experience": "4 years", "Date of Application": "2024-08-17", "Status": "Hired" },
    { "id": 40, "Applicant Name": "Nathan Scott", "Applied Role": "Systems Analyst", "Experience": "5 years", "Date of Application": "2024-08-18", "Status": "Rejected" },
    { "id": 41, "Applicant Name": "Olivia Adams", "Applied Role": "Social Media Manager", "Experience": "3 years", "Date of Application": "2024-08-19", "Status": "Pending" },
    { "id": 42, "Applicant Name": "Paul Garcia", "Applied Role": "Web Developer", "Experience": "6 years", "Date of Application": "2024-08-20", "Status": "Interviewed" },
    { "id": 43, "Applicant Name": "Quinn Lewis", "Applied Role": "Product Owner", "Experience": "7 years", "Date of Application": "2024-08-21", "Status": "Hired" },
    { "id": 44, "Applicant Name": "Rebecca Brown", "Applied Role": "HR Specialist", "Experience": "4 years", "Date of Application": "2024-08-22", "Status": "Rejected" },
    { "id": 45, "Applicant Name": "Steven Moore", "Applied Role": "Technical Support Specialist", "Experience": "6 years", "Date of Application": "2024-08-23", "Status": "Pending" },
    { "id": 46, "Applicant Name": "Tina King", "Applied Role": "Software Tester", "Experience": "5 years", "Date of Application": "2024-08-24", "Status": "Interviewed" },
    { "id": 47, "Applicant Name": "Ulysses Hill", "Applied Role": "Business Systems Analyst", "Experience": "8 years", "Date of Application": "2024-08-25", "Status": "Hired" },
    { "id": 48, "Applicant Name": "Vanessa Adams", "Applied Role": "Graphic Designer", "Experience": "4 years", "Date of Application": "2024-08-26", "Status": "Rejected" },
    { "id": 49, "Applicant Name": "William Carter", "Applied Role": "IT Support Specialist", "Experience": "3 years", "Date of Application": "2024-08-27", "Status": "Pending" },
    { "id": 50, "Applicant Name": "Xena Smith", "Applied Role": "Content Creator", "Experience": "6 years", "Date of Application": "2024-08-28", "Status": "Interviewed" }
]


var tableBody = document.getElementById('table-body');
const selectNumberOfRows = document.getElementById('select_number_of_rows');
const pageButton = document.getElementById('page-button');
let filteredData = data;
let numberOfRows = parseInt(selectNumberOfRows.value, 10);
let totalNumberOfRows = filteredData.length;
renderTable(1,5);

            

            function updateTable() {
                document.getElementById('show_items').innerHTML=  `<p>Show items ${numberOfRows} of ${totalNumberOfRows}`
                totalNumberOfRows = filteredData.length;
                const numberOfPages = Math.ceil(totalNumberOfRows / numberOfRows);
                
                function pagination() {
                    pageButton.innerHTML = '';
                    for (let i = 1; i <= numberOfPages; i++) {
                        const button = document.createElement('button');
                        button.classList.add('pagination_button')
                        button.textContent = i;
                        button.onclick = () => getid(i);
                        pageButton.appendChild(button);
                    }
                    getid(1);
                }

                function getid(b_id) {
                    const endNumberOfRows = numberOfRows * b_id;
                    const startNumberOfRows = numberOfRows * (b_id - 1);
                    renderTable(startNumberOfRows, Math.min(endNumberOfRows, filteredData.length));
                }

                pagination();
            }

            function renderTable(startNoOfRows, endNoOfRows) {
                tableBody.innerHTML = '';
                for (let i = startNoOfRows; i < endNoOfRows; i++) {
                    const row = document.createElement('tr');
                    const delete_cell = document.createElement('td')
                    const delete_cell_img = document.createElement('img')
                    delete_cell.classList.add('delete_row');
                    delete_cell_img.src = './images/delete_icon.svg'
                    
                    row.classList.add('candidate');
                    const nameCell = document.createElement('td');
                    nameCell.textContent = filteredData[i]['Applicant Name'];
                    const RoleCell = document.createElement('td');
                    RoleCell.textContent = filteredData[i]['Applied Role'];
                    const dateCell = document.createElement('td');
                    const experienceCell = document.createElement('td');
                    experienceCell.textContent = filteredData[i]['Experience'];
                    dateCell.textContent = filteredData[i]['Date of Application'];
                    const statusCell = document.createElement('td');
                    const status_div = document.createElement('p')
                    statusCell.appendChild(status_div)
                    status_div.textContent = filteredData[i]['Status'];
                    if (['Pending', 'Hired', 'Interviewed'].includes(status_div.textContent )) {
                        status_div.classList.add('status')
                    } else{
                        status_div.classList.add('status_rejected')
                    }
                    status_div.classList.add('status')
                    row.appendChild(nameCell);
                    row.appendChild(RoleCell);
                    row.appendChild(experienceCell);
                    row.appendChild(dateCell);
                    row.appendChild(statusCell);
                    delete_cell.appendChild(delete_cell_img)
                    row.append(delete_cell)
                    tableBody.appendChild(row);
                    row.classList.add('table_row')
                }
            }


            selectNumberOfRows.addEventListener('change', () => {
                numberOfRows = parseInt(selectNumberOfRows.value, 10);
                updateTable();
            });

           
           
           updateTable();


       
          


