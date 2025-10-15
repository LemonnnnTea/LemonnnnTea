document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = 'en'; // 默认语言为英文

    // 检查本地存储中的语言设置
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }

    // 初始化页面语言
    updateLanguage(currentLanguage);

    // 切换语言
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        updateLanguage(currentLanguage);
        localStorage.setItem('language', currentLanguage);
    });

    // CV 下载功能 - 放在 DOMContentLoaded 内部
    document.getElementById('cv-link').addEventListener('click', function(e) {
        e.preventDefault();
        downloadCV(currentLanguage);
    });

    function updateLanguage(lang) {
        // 更新按钮文本
        languageToggle.textContent = lang === 'en' ? '中文' : 'English';

        // 更新所有带有data-en和data-zh属性的元素
        document.querySelectorAll('[data-en], [data-zh]').forEach(element => {
            if (lang === 'en' && element.hasAttribute('data-en')) {
                if (element.tagName === 'A') {
                    // 处理链接
                    element.innerHTML = element.getAttribute('data-en');
                } else {
                    element.innerHTML = element.getAttribute('data-en');
                }
            } else if (lang === 'zh' && element.hasAttribute('data-zh')) {
                if (element.tagName === 'A') {
                    // 处理链接
                    element.innerHTML = element.getAttribute('data-zh');
                } else {
                    element.innerHTML = element.getAttribute('data-zh');
                }
            }
        });
    }

    function downloadCV(language) {
        // 根据当前语言选择对应的简历文件
        let resumeFile;
        let resumeName;

        if (language === "zh") {
            resumeFile = "resume/XinruXue_CV_Chinese.pdf";
            resumeName = "薛新儒_中文简历.pdf";
        } else {
            resumeFile = "resume/XinruXue_CV_English.pdf";
            resumeName = "Xinru Xue_Resume.pdf";
        }

        // 创建下载链接
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = resumeName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});