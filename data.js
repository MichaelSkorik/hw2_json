fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {

        const contentDiv = document.getElementById('content');

        const imageElement = document.createElement('img');
        imageElement.src = 'https://example.com/banana.png';

        const headingElement = document.createElement('h2');
        headingElement.textContent = "Interesting Fact";

        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = data.text;

        const sourceElement = document.createElement('p');
        sourceElement.innerHTML = `Source: <a href="${data.source_url}" target="_blank">${data.source_url}</a>`;

        contentDiv.appendChild(imageElement);
        contentDiv.appendChild(headingElement);
        contentDiv.appendChild(paragraphElement);
        contentDiv.appendChild(sourceElement);
    })
    .catch(error => console.error('Error fetching data:', error));