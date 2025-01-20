document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contentPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            contentPanes.forEach(pane => {
                pane.classList.remove('active');
            });

            const contentPane = contentPanes[index];
            contentPane.classList.add('active');
        });
    });

    const modalCloseButton = document.getElementById('about-modal-close');
    modalCloseButton.addEventListener('click', () => {
        document.getElementById('about-modal').style.display = 'none';
    });
});