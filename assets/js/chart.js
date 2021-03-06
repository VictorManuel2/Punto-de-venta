const chart1 = document.getElementById('chart1');
const chart2 = document.getElementById('chart2');
const chart3 = document.getElementById('chart3');
if(chart1 || chart2 || chart3){
    chart1.getContext('2d');
    chart2.getContext('2d');
    chart3.getContext('2d');
    const myChart = new Chart(chart1, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# Productos más vendidos',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data2 = {
      labels: labels,
      datasets: [{
        label: 'Ventas de anteriores meses',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    const myChart2 = new Chart(chart2, {
        type: 'line',
        data: data2,
    });
    const myChart3 = new Chart(chart3, {
        type: 'bar',
        data: {
            labels: ['Red', 'Green', 'Yellow', 'Pink', 'Purple', 'Orange'],
            datasets: [{
                label: '# Personal de ventas',
                data: [5, 16, 10, 5, 19, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(28, 116, 85, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(191, 23, 160, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(28, 116, 85, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(121, 23, 160, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}