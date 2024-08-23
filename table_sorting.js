var sortOrderCandidate='asc';

function sort_candidates() {
  const tableBody = document.getElementById('table-body');
  const rows = Array.from(tableBody.getElementsByTagName('tr')); // Convert rows to an array

  rows.sort((rowA, rowB) => {
      const cellA = rowA.getElementsByTagName('td')[0]?.textContent.trim().toLowerCase() || ''; // Get the 5th <td> (status column)
      const cellB = rowB.getElementsByTagName('td')[0]?.textContent.trim().toLowerCase() || ''; // Get the 5th <td> (status column)

      if(sortOrderCandidate==='asc')
      {
        return cellA.localeCompare(cellB);
        
      }
      else
      {
        return cellB.localeCompare(cellA);
      }
      
      

       
  });

 
  rows.forEach(row => tableBody.appendChild(row));

  if(sortOrderCandidate==='asc')
  {
    document.querySelector(".asc_img").style.display = "flex";
    document.querySelector(".desc_img").style.display = "none";
  }
  else{
    document.querySelector(".asc_img").style.display = "none";
    document.querySelector(".desc_img").style.display = "flex";
  }
  sortOrderCandidate=(sortOrderCandidate ==='asc')? 'desc' : 'asc'

}

var sortOrderStatus='asc';
    
    
  
  function sort_status() {
    const tableBody = document.getElementById('table-body');
    const rows = Array.from(tableBody.getElementsByTagName('tr')); 

    rows.sort((rowA, rowB) => {
        const cellA = rowA.getElementsByTagName('td')[4]; 
        const cellB = rowB.getElementsByTagName('td')[4];

        if (!cellA || !cellB) return 0; 

        const statusA = cellA.getElementsByTagName('p')[0]?.textContent.trim().toLowerCase() || '';
        const statusB = cellB.getElementsByTagName('p')[0]?.textContent.trim().toLowerCase() || '';

        if (sortOrderStatus === 'asc') {
          return statusA.localeCompare(statusB); 
      } else {
          return statusB.localeCompare(statusA); 
      } 
    });

    
    rows.forEach(row => tableBody.appendChild(row));
    sortOrderStatus = (sortOrderStatus === 'asc') ? 'desc' : 'asc';
    
}

var sortOrderRole='asc';

function sort_role() {
  const tableBody = document.getElementById('table-body');
  const rows = Array.from(tableBody.getElementsByTagName('tr')); 

  rows.sort((rowA, rowB) => {
      const cellA = rowA.getElementsByTagName('td')[1]?.textContent.trim().toLowerCase() || '';
      const cellB = rowB.getElementsByTagName('td')[1]?.textContent.trim().toLowerCase() || ''; 

      if(sortOrderRole==='asc')
      {
        return cellA.localeCompare(cellB);
      }
      else
      {
        return cellB.localeCompare(cellA);
      }
      
      

      
  });

  
  rows.forEach(row => tableBody.appendChild(row));
  sortOrderRole=(sortOrderRole ==='asc')? 'desc' : 'asc'

}



var sortOrderyears = 'asc';

function sort_years() {
    const tableBody = document.getElementById('table-body');
    const rows = Array.from(tableBody.getElementsByTagName('tr')); // Convert rows to an array

    rows.sort((rowA, rowB) => {
        // Get the numeric values from the cells in the 2nd column (index 1)
        const cellA = parseInt(rowA.getElementsByTagName('td')[2]?.textContent.trim() || '0', 10);
        const cellB = parseInt(rowB.getElementsByTagName('td')[2]?.textContent.trim() || '0', 10);

        if (sortOrderyears === 'asc') {
            return cellA - cellB; // Ascending order
        } else {
            return cellB - cellA; // Descending order
        }
    });

    // Append sorted rows back to the table body
    rows.forEach(row => tableBody.appendChild(row));
    // Toggle sort order
    sortOrderyears = (sortOrderyears === 'asc') ? 'desc' : 'asc';
}



var sortOrderdate = 'asc';

function sort_date() {
    const tableBody = document.getElementById('table-body');
    const rows = Array.from(tableBody.getElementsByTagName('tr')); 

    rows.sort((rowA, rowB) => {
        
        const dateStrA = rowA.getElementsByTagName('td')[3]?.textContent.trim() || '';
        const dateStrB = rowB.getElementsByTagName('td')[3]?.textContent.trim() || '';

        // Convert the date strings to Date objects
        const dateA = new Date(dateStrA);
        const dateB = new Date(dateStrB);

        if (sortOrderdate === 'asc') {
            return dateA - dateB; // Ascending order
        } else {
            return dateB - dateA; // Descending order
        }
    });

    
    rows.forEach(row => tableBody.appendChild(row));
   
    sortOrderdate = (sortOrderdate === 'asc') ? 'desc' : 'asc';
}







