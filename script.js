

const flower = document.querySelector('.flower');
const petalCount = 18;

for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    const rotate = i * (360 / petalCount);
    petal.style.setProperty('--rotate', `${rotate}deg`);

    petal.style.transform = `translate(-50%, -50%) rotate(${rotate}deg) scale(0.1)`;
    flower.insertBefore(petal, flower.firstChild);
}

// إنشاء التألق
// --- تعديل قسم النجوم ---
const starCount = 450; // زدنا العدد لملأ الشاشة

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

    // التعديل المهم: الإضافة للـ body مباشرة وليس للـ flower
    document.body.appendChild(star);
}

// فتح الوردة
function bloomFlower() {
    const petals = document.querySelectorAll('.petal');
    const stars = document.querySelectorAll('.sparkle');
    
    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.animation = `bloom 2s ease-out forwards`;
            petal.style.opacity = "1";
        }, index * 120);
    });
    
    stars.forEach(star => {
        star.style.animation = `sparkle 3s ease-in-out infinite`;
    });
}

// إضافة تأثير الطفو للوردة
flower.classList.add('float');

// فتح الوردة تلقائيًا عند تحميل الصفحة
window.addEventListener('load', () => {
    setTimeout(bloomFlower, 500);
});

// تأثيرات إضافية عند التحويم
const center = document.querySelector('.center');
center.addEventListener('mouseover', () => {
    center.style.transform = 'scale(1.15)';
});

center.addEventListener('mouseout', () => {
    center.style.transform = 'scale(1)';
});