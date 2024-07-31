
let newURL = document.getElementById("Shorturl");
let copyButton = document.getElementById("copy"); 

copyButton.onclick = () => {
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
}
