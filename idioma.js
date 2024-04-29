let isEnglish = false;


document.getElementById("changeLanguageButton").addEventListener("click", function() {
    
    isEnglish = !isEnglish;

    
    const elementsToTranslate = document.querySelectorAll("[data-es], [data-en]");

    
    elementsToTranslate.forEach(element => {
        const text = isEnglish ? element.dataset.en : element.dataset.es;
        element.textContent = text;
    });
});
