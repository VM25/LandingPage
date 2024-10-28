document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    const signUpBtn = document.getElementById('signUpBtn');
    const heroGetStartedBtn = document.getElementById('heroGetStartedBtn');
    const ctaGetStartedBtn = document.getElementById('ctaGetStartedBtn');
    const signUpModal = document.getElementById('signUpModal');
    const closeBtn = signUpModal.querySelector('.close');
    const contactForm = document.getElementById('contactForm');
    const signUpForm = document.getElementById('signUpForm');

    // Sticky header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i data-lucide="x"></i>' 
            : '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });

    // Sign Up Modal
    function openSignUpModal() {
        signUpModal.style.display = 'block';
    }

    function closeSignUpModal() {
        signUpModal.style.display = 'none';
    }

    signUpBtn.addEventListener('click', openSignUpModal);
    heroGetStartedBtn.addEventListener('click', openSignUpModal);
    ctaGetStartedBtn.addEventListener('click', openSignUpModal);

    closeBtn.addEventListener('click', closeSignUpModal);

    window.addEventListener('click', (e) => {
        if (e.target === signUpModal) {
            closeSignUpModal();
        }
    });

    // Smooth scrolling for navigation links and logo
    document.querySelectorAll('a[href^="#"], .logo').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
            lucide.createIcons();
        });
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const contactMessage = document.getElementById('contactMessage');
        contactMessage.textContent = 'Message sent successfully!';
        contactMessage.style.color = 'var(--teal)';
        contactForm.reset();
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const signUpMessage = document.getElementById('signUpMessage');
        signUpMessage.textContent = 'Sign up successful!';
        signUpMessage.style.color = 'var(--teal)';
        signUpForm.reset();
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // // Stock chart
    // const chartData = {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     datasets: [{
    //         label: 'S&P 500',
    //         data: [3800, 3850, 3900, 4000, 4100, 4150, 4200, 4250, 4300, 4350, 4400, 4450],
    //         borderColor: 'rgb(75, 192, 192)',
    //         tension: 0.1
    //     }]
    // };

    // const chartConfig = {
    //     type: 'line',
    //     data: chartData,
    //     options: {
    //         responsive: true,
    //         maintainAspectRatio: false,
    //         scales: {
    //             y: {
    //                 beginAtZero: false
    //             }
    //         }
    //     }
    // };

    // const ctx = document.getElementById('stockChart').getContext('2d');
    // new Chart(ctx, chartConfig);
});