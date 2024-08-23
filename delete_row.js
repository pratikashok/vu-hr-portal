

document.addEventListener('DOMContentLoaded', () => {

    const attachDeleteListeners = () => {
        const deleteIcons = document.querySelectorAll('.delete_row');

        deleteIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {

                const jobCard = e.target.closest('.candidate');


                if (jobCard) {
                    jobCard.remove();
                }
            });
        });
    };


    attachDeleteListeners();
});