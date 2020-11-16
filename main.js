(() => {
    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0]; 
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        console.log(entries[0].target.dataset.index);
        ioIndex = entries[0].target.dataset.index * 1;
    });

    for(let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activate() {
        currentItem.classList.add('visible');
    }

    function inactivate() {
        currentItem.classList.remove('visible');
    }
    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;
        let temp++;
            
        for (let i = ioIndex -1; i < ioIndex + 2; i++) {
            step = stepElems[i];
            if (!step) continue;
            boundingRect = step.getBoundingClientRect();
            
            temp++;

            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {

                    inactivate();
                    currentItem = graphicElems[step.dataset.index];
                    activate();
                }
            }

            console.log(temp);
        });
        activate();
})();