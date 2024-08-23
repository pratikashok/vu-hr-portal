const search = () => {
    const searchbox = document.getElementById("search_job").value.toUpperCase();
    const jobCards = document.querySelectorAll(".job_cards");

    jobCards.forEach(jobCard => {
        const paragraphs = jobCard.querySelectorAll('p'); 

        let foundMatch = false;

        paragraphs.forEach(p => {
            const textValue = p.textContent || p.innerHTML;

            if (textValue.toUpperCase().includes(searchbox)) {
                foundMatch = true; 
            }
        });
        if (foundMatch) {
            jobCard.style.display = ""; // Show the job card
        } else {
            jobCard.style.display = "none"; // Hide the job card
        }
    });
};
