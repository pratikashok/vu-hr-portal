
// Initialize data from local storage if available
let data = JSON.parse(localStorage.getItem('object')) || [
    { id: 1, job_role: "QA", job_type: "Full time", date: "created on 20 feb 2020", location: "bnglr" },
    { id: 2, job_role: "QA", job_type: "Full time", date: "created on 20 feb 2020", location: "bnglr" }
];

function readAll() {
    localStorage.setItem('object', JSON.stringify(data));
    var tabledata = document.querySelector(".job_lists");

    var elements = "";
    data.map(record => {
        elements += `
        <div class="job_cards flex justify-between mx-6 my-8 shadow-[0_4px_8px_rgba(0,_0,_0,_0.2)] p-4 items-center">
            <div class="job_image_info flex gap-x-2 w-[1200px]">
                <div class="image"><img src="./job_icon.svg" alt=""></div>
                <div class="job_name_type ">
                    <p class="applicant_name">${record.job_role}</p>
                    <div class="job_type flex ">
                        <img class="" src="./job_type_icon.svg" alt="">
                        <p class="mx-1">${record.job_type}</p>
                    </div>
                </div>
            </div>
            <div class="job_extra_info ">
                <div class="div ">
                    <div class="job_date text-[16px] leading-[18px]">
                        <p>${record.date}</p>
                    </div>
                    <div class="job_location">
                        <p>Location: ${record.location}</p>
                    </div>
                </div>
            </div>
            <div class="delete_icon ml-[300px]">
                <img src="./delete_icon.svg" class="delete_button" alt="" onclick="showConfirmationPopup(${record.id})">
            </div>
            <div class="view_more">
                <img src="./view_more.svg" alt="">
            </div>
        </div>`;
    });

    tabledata.innerHTML = elements;
}

function add() {
    var job_name = document.getElementById("role").value;
    var job_location = document.getElementById("location").value;
    var job_type = document.getElementById("type").value;
    var date = new Date().toLocaleDateString();

    
    if (!job_name || !job_location || !job_type) {
        alert("Please fill all fields.");
        return;
    }

    
    var newJob = {
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1, // Increment ID based on the last record
        job_role: job_name,
        job_type: job_type,
        date: "created on " + date,
        location: job_location
    };

    data.push(newJob);

    
    localStorage.setItem('object', JSON.stringify(data));

    // Re-render the job list
    readAll();

    // Hide popup
    document.querySelector("#popup").style.display = "none";
}

// Initial call to display data
readAll();




// Elements
const confirmationPopup = document.getElementById('confirm_popup');
const confirmYesButton = document.getElementById('confirm_yes');
const confirmNoButton = document.getElementById('confirm_no');


// Function to show confirmation popup
function showConfirmationPopup(id) {
    
    confirmationPopup.style.display = 'block'; // Show the popup

    confirmYesButton.addEventListener('click', () => {
    deleteJob(id)
    confirmationPopup.style.display = 'none'; // Hide the popup
});

confirmNoButton.addEventListener('click', () => {
    // Clear the job ID
   confirmationPopup.style.display = 'none';
   
});

}

// Function to delete the job
function deleteJob(id) {
    // Event listener for "No" button in the popup
    
    // Retrieve the current data from local storage
    let storedData = JSON.parse(localStorage.getItem('object')) || [];

    // Filter out the job with the specific id
    const updatedData = storedData.filter(record => record.id !== id);

    // Update local storage with the filtered data
    localStorage.setItem('object', JSON.stringify(updatedData));

    // Update the in-memory data array
    data = updatedData;

    // Re-render the job list
    readAll();
}

// Event listener for delete buttons


// Event listener for "Yes" button in the popup



