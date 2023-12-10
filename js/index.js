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
determineTheme();
window.addEventListener('resize', determineTheme);
document.addEventListener('DOMContentLoaded', function () {
    const categoriesContainer = document.getElementById('categoriesContainer');
    const categoryContentsContainer = document.getElementById('categoryContentsContainer');
    let categoryElements = [];

    const categories = ['分类1', '分类2'];
    const contents = [
        [
            { title: '这是标题1', description: '这是简介1' },
            { title: '这是标题2', description: '这是简介2' },
            { title: '这是标题3', description: '这是简介3' }
        ],
        [
            { title: '这是标题4', description: '这是简介4' },
            { title: '这是标题5', description: '这是简介5' },
            { title: '这是标题6', description: '这是简介6' }
        ]
    ];
    categories.forEach(function (category, index) {
        const categoryElement = document.createElement('h1');
        categoryElement.classList.add('category');
        categoryElement.textContent = category;
        categoryElement.setAttribute('data-category', 'category' + (index + 1));
        categoryElement.addEventListener('click', function () {
            categoryContentsContainer.innerHTML = '';
            contents[index].forEach(function (content) {
                const contentElement = document.createElement('div');
                contentElement.classList.add('rectangle');
                contentElement.innerHTML = `<h1>${content.title}</h1><p>${content.description}</p>`;
                categoryContentsContainer.appendChild(contentElement);
            });
            categoryElements.forEach(function (element) {
                element.classList.remove('active');
            });
            categoryElement.classList.add('active');
        });

        categoriesContainer.appendChild(categoryElement);
        categoryElements.push(categoryElement);
    });
    categories[0] && categoryElements[0].click();
});
