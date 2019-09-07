var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255, 99, 132,.4)',
            borderColor: 'blue',
            data: [500,1000,750,1250,1750,1250,1500,1000,1500,2000,1500,2000]
        }]
    },

    // Configuration options go here
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        }
    }
});