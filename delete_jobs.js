document.addEventListener('DOMContentLoaded', () => {

    const jobContainer = document.getElementById('job_lists');

    
    const updateLocalStorage = () => {
        const jobCards = Array.from(document.querySelectorAll('.job_cards'));
        const jobData = jobCards.map(card => {
            const role = card.querySelector('.applicant_name').textContent;
            const location = card.querySelector('.job_location p').textContent.replace('Location: ', '');
            const type = card.querySelector('.job_type p').textContent;
            const date = card.querySelector('.job_date p').textContent.replace('Created on ', '');
            return { role, location, type, date };
        });
        localStorage.setItem('jobCards', JSON.stringify(jobData));
    };

    
    const attachDeleteListeners = () => {
        const deleteIcons = document.querySelectorAll('.delete_icon img'); 

        deleteIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                const jobCard = e.target.closest('.job_cards');
                if (jobCard) {
                    jobCard.remove(); 
                    updateLocalStorage(); 
                }
            });
        });
    };

    
   

    
    const jobForm = document.getElementById('job_form');
    jobForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        
        const role = document.getElementById('role').value;
        const location = document.getElementById('location').value;
        const type = document.getElementById('type').value;

        
        createJobCard(role, location, type, new Date().toLocaleDateString());

        
        jobForm.reset();
        document.querySelector("#popup").style.display = "none";
    });

   
    const loadJobCards = () => {
        const storedJobs = JSON.parse(localStorage.getItem('jobCards') || '[]');
        storedJobs.forEach(job => {
            createJobCard(job.role, job.location, job.type, job.date);
        });
    };

    
    loadJobCards();
});
