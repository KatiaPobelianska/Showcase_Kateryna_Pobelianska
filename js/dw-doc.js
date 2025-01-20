const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', (event) => {
    event.preventDefault();

    downloadBtn.innerHTML = 'Laden';
    const dots = document.createElement('span');
    dots.classList.add('dots-container');
    dots.innerHTML = '<span class="dots"></span><span class="dots"></span><span class="dots"></span>';
    downloadBtn.appendChild(dots);

    setTimeout(() => {
        downloadBtn.innerHTML = 'Erfolgreich!';

        const link = document.createElement('a');
        link.href = downloadBtn.href;
        link.download = downloadBtn.getAttribute('download');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 3000);
});