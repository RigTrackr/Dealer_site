document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for #welcome-text on page load
    const welcomeText = "Welcome to AllTruck Sales!";
    const welcomeContainer = document.getElementById('welcome-text');
    let welcomeIndex = 0;

    function typeWelcomeText() {
        if (welcomeIndex < welcomeText.length) {
            welcomeContainer.textContent += welcomeText.charAt(welcomeIndex);
            welcomeIndex++;
            setTimeout(typeWelcomeText, 100); // Adjust typing speed here (milliseconds per character)
        }
    }

    typeWelcomeText();

    // Typing effect for #block1-text when scrolled into view
    const block1Text = "At AllTruck Sales, we specialize in providing top-quality semi-trucks to meet all your heavy-duty transportation needs. Whether you are an independent owner-operator, a fleet manager, or a logistics company, we have the perfect truck for you. Our extensive inventory includes a wide range of makes and models from the most trusted manufacturers in the industry.";
    const block1Container = document.getElementById('block1-text');
    let block1Index = 0;

    function typeBlock1Text() {
        if (block1Index < block1Text.length) {
            block1Container.textContent += block1Text.charAt(block1Index);
            block1Index++;
            setTimeout(typeBlock1Text, 50); // Adjust typing speed here (milliseconds per character)
        }
    }

    // Intersection Observer to detect when #block1 is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeBlock1Text();
                observer.unobserve(entry.target); // Stop observing once the text starts typing
            }
        });
    });

    observer.observe(document.querySelector('#block1'));
});
