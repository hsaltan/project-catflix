document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.querySelector('.upload-button');

    uploadButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        alert('Get ready to create your cat masterpiece!');
    });
});
