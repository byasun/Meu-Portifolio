export const fadeIn = (element, duration = 600, delay = 0) => {
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
    }, 100);
};

export const slideInLeft = (element, duration = 600, delay = 0) => {
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.opacity = 0;
    element.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
    }, 100);
};

export const slideInRight = (element, duration = 600, delay = 0) => {
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.opacity = 0;
    element.style.transform = 'translateX(50px)';
    
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
    }, 100);
};

export const staggerChildren = (container, animationFunction, staggerDelay = 100) => {
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
        animationFunction(children[i], 600, i * staggerDelay);
    }
};

// Animação para as barras de habilidades
export const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 200);
    });
};