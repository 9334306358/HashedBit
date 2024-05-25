
const apiUrl = 'https://my-json-server.typicode.com/FreSauce/json-ipl/data';
const apiKey = 'YOUR_API_KEY'; 

fetch(apiUrl, { headers: { 'apikey': apiKey } })
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector('tbody');
    data.forEach((team, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.NRR}</td>
        <td>${team.Points}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
