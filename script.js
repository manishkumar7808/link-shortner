let btn = document.getElementById("shorten");
btn.addEventListener('click', short);

async function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("Shorturl"); // Corrected the ID to match the HTML

    try {
        const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`); // Use backticks for template literals and added await
        const data = await result.json();

        if (data.ok) { // Check if the response is successful
            shortURL.value = data.result.short_link2;
            console.log(data.result.short_link2);
        } else {
            console.error('Error shortening URL:', data);
            shortURL.value = 'Error shortening URL';
        }
    } catch (error) {
        console.error('Fetch error:', error);
        shortURL.value = 'Fetch error';
    }
}
