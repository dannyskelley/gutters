// Keep initial viewport content visible immediately; animate only later sections.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const initialized = new WeakSet();
    const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (!initialized.has(entry.target)) {
                initialized.add(entry.target);
                // The observer supplies layout data asynchronously; don't force
                // layout while the document and hero image are still loading.
                if (entry.boundingClientRect.top > innerHeight && !entry.isIntersecting) {
                    entry.target.setAttribute('data-reveal', '');
                } else {
                    observer.unobserve(entry.target);
                    continue;
                }
            }
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        }
    }, { rootMargin: '0px 0px 40px 0px' });
    document.querySelectorAll('[data-aos]').forEach(element => observer.observe(element));
}
