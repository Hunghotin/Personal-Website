// 创建一个随机过程指数折线图
const canvas = document.getElementById('line-chart');
const ctx = canvas.getContext('2d');

// 随机生成数据
function generateRandomData() {
    const data = [];
    let lastValue = 100;
    for (let i = 0; i < 100; i++) {
        lastValue += Math.random() * 10 - 5;  // 每次变化 +- 5
        data.push(lastValue);
    }
    return data;
}

// Chart.js 配置
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: 100 }, (_, i) => i), // X轴标签为时间点
        datasets: [{
            label: 'Random Process Index',
            data: generateRandomData(),
            borderColor: '#1e3a8a',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
});
