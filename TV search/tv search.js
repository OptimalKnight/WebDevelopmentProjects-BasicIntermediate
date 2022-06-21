const base = 'http://api.tvmaze.com/search/shows?';
const form = document.querySelector('#searchForm');
const container = document.querySelector('#container');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    const response = await getShows(userInput);
    addToList(response.data);
})

async function getShows(userInput) {
    const config = { params: { q: userInput } };
    try {
        const response = await axios.get(base, config);
        return response;
    } catch (e) {
        console.log("Something went wrong!", e);
    }
}

function addToList(shows) {
    removeItems();
    const ul = document.createElement('ul');
    for (let item of shows) {
        if (item.show.image) {
            const li = makeTab(item);
            ul.append(li);
        }
    }
    container.append(ul);
}

function makeTab(item) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.show.image.medium;
    img.classList.add('image');
    li.append(img);
    const label = document.createElement('span');
    label.innerText = item.show.name;
    label.innerHTML += '<b>';
    li.append(label);
    li.classList.add('item');
    return li;
}

function removeItems() {
    const ul = document.querySelector('ul');
    ul.remove();
}