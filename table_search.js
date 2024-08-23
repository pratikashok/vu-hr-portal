function search() {
    const searchbox = document.getElementById("search_bar").value.toUpperCase();
    const candidates = document.querySelectorAll(".candidate");

    candidates.forEach(candidate => {
        const cells = candidate.querySelectorAll('td');
        let foundMatch = false;

        cells.forEach(cell => {
            const textValue = cell.textContent || cell.innerHTML;
            if (textValue.toUpperCase().includes(searchbox)) {
                foundMatch = true;
            }
        });

        if (foundMatch) {
            candidate.style.display = "";
        } else {
            candidate.style.display = "none";
        }
    });
}

