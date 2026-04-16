const container = document.querySelector('.flower-container');
const totalFlowers = 30; // عدد الورود المطلوب

for (let i = 0; i < totalFlowers; i++) {
    // 1. إنشاء حاوية الوردة الصغيرة
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // 2. توزيع عشوائي في الشاشة باستخدام vw و vh
    flower.style.left = `${Math.random() * 95}vw`;
    flower.style.top = `${Math.random() * 95}vh`;

    // 3. تأخير عشوائي للأنيميشن لكي لا تظهر كلها في وقت واحد
    flower.style.animationDelay = `${Math.random() * 5}s`;

    // 4. إنشاء قلب الوردة
    const center = document.createElement('div');
    center.classList.add('center');
    flower.appendChild(center);

    // 5. إنشاء البتلات داخل هذه الوردة (مثلاً 10 بتلات لكل وردة)
    const petalsPerFlower = 10;
    for (let j = 0; j < petalsPerFlower; j++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        const rotate = j * (360 / petalsPerFlower);
        petal.style.transform = `rotate(${rotate}deg)`;
        flower.appendChild(petal);
    }

    // 6. إضافة الوردة المكتملة إلى الحاوية الرئيسية
    container.appendChild(flower);
}

// كود النجوم (النجوم تظل كما هي في الخلفية)
const starCount = 150; // زدنا العدد لملأ الشاشة

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('sparkle');
    
    // التعديل الجوهري هنا: نشر النجوم على كامل مساحة الشاشة (Viewport)
    star.style.left = `${Math.random() * 100}vw`; 
    star.style.top = `${Math.random() * 100}vh`;
    
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    // جعل الأحجام متنوعة لتبدو كالنجوم الحقيقية
    const size = Math.random() * 2 + 1; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animation = `sparkle 3s ease-in-out infinite`;

    // التعديل المهم: الإضافة للـ body مباشرة وليس للـ flower
    document.body.appendChild(star);
}


// زر الرجوع
const closeBtn = document.querySelector('.close-btn');
closeBtn.style.opacity = "0"; // اجعله مخفياً في البداية

function bloomFlower() {
    // ... كود الورود القديم ...

    // إظهار الزر بعد ثانية واحدة من بدء تفتح الورود
    setTimeout(() => {
        closeBtn.style.opacity = "1";
        closeBtn.style.transition = "opacity 1s ease";
    }, 1000);
}