function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (username === 'admin' && password === '12345678') {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'flex';
       document.getElementById('head').style.display = 'flex';

    } else {
        errorMsg.textContent = 'Invalid username or password.';
    }
}

function submitEvent(event) {
    event.preventDefault();

    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const description = document.getElementById('eventDescription').value;

    alert(`Event added:\nTitle: ${title}\nDate: ${date}\nDescription: ${description}`);
    document.getElementById('eventForm').reset();
}

function submitNews(event) {
    event.preventDefault();

    const title = document.getElementById('newsTitle').value;
    const content = document.getElementById('newsContent').value;

    alert(`News added:\nTitle: ${title}\nContent: ${content}`);
    document.getElementById('newsForm').reset();
}

function submitGallery(event) {
    event.preventDefault();

    const title = document.getElementById('galleryTitle').value;
    const image = document.getElementById('galleryImage').value;

    alert(`Gallery item added:\nTitle: ${title}\nImage URL: ${image}`);
    document.getElementById('galleryForm').reset();
}

function submitService(event) {
    event.preventDefault();

    const name = document.getElementById('serviceName').value;
    const description = document.getElementById('serviceDescription').value;

    alert(`Service added:\nName: ${name}\nDescription: ${description}`);
    document.getElementById('serviceForm').reset();
}
