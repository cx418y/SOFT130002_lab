const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

const item = new Array();
const box1 = new Array();
const box2 = new Array();
const button = new Array();
const author = new Array();
const lifetime = new Array();
const tips = new Array();
const photos = new Array();

for(let i in works){
    item[i] = document.createElement("div");
    item[i].className = "item";

    tips[i] = document.createElement("h4");
    tips[i].innerText = "Genre：" + works[i].tips;
    item[i].appendChild(tips[i]);

    author[i] = document.createElement("h3");
    author[i].style.display = "inline-block";
    author[i].innerText = works[i].author;

    lifetime[i] = document.createElement("h4");
    lifetime[i].style.display = "inline-block";
    lifetime[i].style.marginLeft = "1em";
    lifetime[i].innerText = "lifetime:"+works[i].lifetime;

    box1[i] = document.createElement("div");
    box1[i].appendChild(author[i]);
    box1[i].appendChild(lifetime[i]);
    box1[i].className = "inner-box";
    item[i].appendChild(box1[i]);

    photos[i] = document.createElement("div");
    for(let j in works[i].photos){
        photos[i][j] = document.createElement("img");
        photos[i][j].className = "photo";
        photos[i][j].src = works[i].photos[j];
        photos[i][j].style.display = "inline-block";
        photos[i].appendChild(photos[i][j]);
    }

    box2[i] = document.createElement("div");
    box2[i].className = "inner-box";
    let popularPhotos = document.createElement("h3");
    popularPhotos.innerText = "Popular Photos";
    box2[i].appendChild(popularPhotos);
    box2[i].appendChild(photos[i]);

    item[i].appendChild(box2[i]);

    button[i] = document.createElement("button");
    button[i].className = "button";
    button[i].innerText = "Visit";
    item[i].appendChild(button[i]);

    document.body.appendChild(item[i]);
}

