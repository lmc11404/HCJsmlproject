// 滾動至商品區
document.querySelector('header button').addEventListener('click', () => {
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
});

// 獲取 Hero 區元素
const hero = document.querySelector('.hero');
const snowContainer = document.getElementById('snow-container');

// 隨機生成雪花
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    snowflake.style.left = Math.random() * 100 + 'vw'; // 隨機水平位置
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 隨機動畫時間
    snowflake.style.opacity = Math.random();
    snowflake.style.transform = `scale(${Math.random() * 0.5 + 0.5})`; // 隨機大小

    /*
    const size = Math.random() * 5 + 5; // 隨機大小
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 隨機下落速度
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);
    */
    hero.appendChild(snowflake);

    // 動畫結束後移除雪花
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// 每100ms生成一個雪花
setInterval(createSnowflake, 100);