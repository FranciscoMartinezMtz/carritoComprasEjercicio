const templateCard = document.getElementById('template-card').content //.CONTENT para acceder a los elementos
const items = document.getElementById('items');
const FetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        PintarCards(data);
    } catch (err) {
        console.log(err)
    }
};

const miFragment = document.createDocumentFragment();

const PintarCards = (data) => {
    // data.forEach(elementData => {
    //     console.log(elementData);
    // });

     const mapdata = data.map(x => {
        
        templateCard.querySelector('h5').textContent = x.title;
        templateCard.querySelector('p').textContent = x.precio;
        templateCard.querySelector('img').setAttribute('src', x.thumbnailUrl);
        const clone = templateCard.cloneNode(true);
        miFragment.appendChild(clone);
     });
     items.appendChild(miFragment)
    console.log(mapdata);
    // templateCard.querySelector('h5').textContent = elementData;

    // const clone = templateCard.cloneNode(true);
    // miFragment.appendChild(clone);

    // items.appendChild(miFragment)
};


//Ejecute una funcion auto ejecutable para checar funccion. TAMBIEN SE PUEDE HACER MEDIANTE :
// addEventListener('DOMContentLoaded') *Observacion en notas

//(FetchData())();

document.addEventListener('DOMContentLoaded', () => {
    FetchData();
});