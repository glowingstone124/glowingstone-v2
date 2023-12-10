const themeLink = document.getElementById('stylesheet');

// 根据 UA 和屏幕宽度判断应该使用的主题
function determineTheme() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const screenWidth = window.innerWidth;

    if (isMobile) {
        themeLink.href = 'styles/main-mobile.css';
    } else if (screenWidth <= 768) {
        themeLink.href = 'styles/main-mobile.css';
    } else {
        themeLink.href = 'styles/main.css';
    }
}

// 初始加载时调用一次
determineTheme();

// 在窗口大小变化时重新检测主题
window.addEventListener('resize', determineTheme);