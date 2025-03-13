// 获取canvas元素
const canvas = document.getElementById('line-chart');
const ctx = canvas.getContext('2d');

// 设置canvas大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 生成多个随机过程数据
function generateRandomProcess() {
    const data = [];
    let lastValue = Math.random() * 100 + 50; // 每条曲线的初始值
    for (let i = 0; i < canvas.width; i++) {
        lastValue += Math.random() * 10 - 5;  // 随机波动
        data.push(lastValue);
    }
    return data;
}

// 存储多条曲线的随机过程数据
const processes = [];
const numOfLines = 15;  // 随机生成15条曲线

for (let i = 0; i < numOfLines; i++) {
    processes.push(generateRandomProcess());
}

// 动画函数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布

    // 绘制每条随机过程曲线
    processes.forEach((process, index) => {
        ctx.beginPath();
        ctx.moveTo(0, process[0]); // 每条曲线的起点
        for (let i = 1; i < process.length; i++) {
            ctx.lineTo(i, process[i]); // 连接每个点
        }

        // 设置颜色和线宽
        ctx.strokeStyle = `rgba(30, 58, 138, ${1 - index * 0.05})`; // 颜色渐变
        ctx.lineWidth = 2;
        ctx.stroke(); // 绘制路径
    });

    requestAnimationFrame(draw); // 不断更新
}

// 开始绘制
draw();
