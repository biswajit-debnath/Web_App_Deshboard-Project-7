var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0','16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255, 99, 132,.4)',
            borderColor: 'blue',
            data: [0,500,1000,750,1250,1750,1250,1500,1000,1500,2000,1500,2000]
        }]
    },

    // Configuration options go here
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            },
            point: {
                radius: 5
            }
        },
        
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 2500,
                    suggestedMin: 0,
                    stepSize: 500,
                    
                    labelOffset: 25,
                    //padding: 40
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    labelOffset: -45,
                    //padding: 40
                    suggestedMax: 66,
                    suggestedMin: 0,
                    stepSize: 6,
                }
            }]

        }
    }
});




var ctx2 = document.getElementById('myChart2').getContext('2d');
var myBarChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['S','M','T','W','T','F','S'],
        datasets: [{
            backgroundColor: 'rgba(255, 99, 132,.4)',
            data: [0,50,100,150,200,250]
        }],
    },
    options:{} 
});