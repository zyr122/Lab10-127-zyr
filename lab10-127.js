const imgs = {
    campus: ["images/校门.jpg","images/教学楼.jpg","images/操场.jpg","images/花园.jpg","images/林荫.jpg"],
    tech: ["images/建筑.jpg","images/教室.jpg","images/借阅室.jpg","images/体育馆.jpg","images/校史馆.jpg"],
    yantai: ["images/粉云映湖.jpg","images/湖景.jpg","images/晚霞.jpg","images/喷泉.jpg","images/夜景.jpg"]
};

// 插入5张图片
document.querySelector("#s1 .swiper-wrap").innerHTML = imgs.campus.map(i=>`<div class="swiper-item"><img src="${i}"></div>`).join("");
document.querySelector("#s2 .swiper-wrap").innerHTML = imgs.tech.map(i=>`<div class="swiper-item"><img src="${i}"></div>`).join("");
document.querySelector("#s3 .swiper-wrap").innerHTML = imgs.yantai.map(i=>`<div class="swiper-item"><img src="${i}"></div>`).join("");

const swipers = document.querySelectorAll('.swiper');
let direction = true;

// 30秒切换一次滚动方向
setInterval(() => {
    direction = !direction;
}, 30000);

swipers.forEach(swiper => {
    const wrap = swiper.querySelector('.swiper-wrap');
    const w = 1000;
    const imgNum = 5;
    const total = w * imgNum;
    let offset = 0;

    setInterval(() => {
        direction ? offset += w : offset -= w;

        if (offset >= total) offset = 0;
        if (offset < 0) offset = total - w;

        wrap.style.transform = `translateX(-${offset}px)`;
    }, 2000);
});