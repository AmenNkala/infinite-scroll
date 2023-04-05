const count = 10;
const apiKey = 'weZFUmB6Po0gIwzag7MQqKuZdytidSBbxK57MGwWWKo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {

    }
}
