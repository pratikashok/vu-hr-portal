function search_applicant() {
    const searchbox = document.getElementById("applicant_search_bar").value.toUpperCase();
    const candidates = document.querySelectorAll(".candidate");

    candidates.forEach(candidate => {
        
        const firstCell = candidate.querySelector('td');

        
        if (firstCell) {
            const textValue = firstCell.textContent || firstCell.innerHTML;
            
            if (textValue.toUpperCase().includes(searchbox)) {
                candidate.style.display = "";
            } else {
                candidate.style.display = "none";
            }
        } else {
            
            candidate.style.display = "none";
        }
    });
}


