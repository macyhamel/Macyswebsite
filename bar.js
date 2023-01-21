// Data retrieved from https://www.yr.no/nb
Highcharts.chart('barcontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column Chart With Negative Values'
    },
    xAxis: {
        categories: ['Peaches', 'Watermelon', 'Kiwi', 'Strawberry', 'Lemon']
    },
    yAxis: {
        title: {
            text: 'Temperature °C'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Macy',
        data: [
            8, 9, 5, 5, 7]
    }, {
        name: 'Jane',
        data: [-8.5, -7.8, -10.8, -6.8, -4.0]
    }, {
        name: 'Joe',
        data: [-6.2, -4.6, 1.7, 2.3, 8.1]
    }]
});
