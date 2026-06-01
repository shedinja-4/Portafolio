const skills = document.getElementById('skills');

function Aleatorio(min, max){
    const num = Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
    return num;
}

for(let i = 1; i <= 5; i++){
    const item = document.createElement("div");
    
    item.classList.add("skills-parent");

    const img = document.createElement("div");
    const shine = document.createElement("div");

    img.style.backgroundImage = `url(Assets/L${i}.png)`;

    const widthImg = Aleatorio(6, 9);
    const rotateImg = Aleatorio(30, -30)

    shine.style.setProperty("--rot", `${rotateImg}deg`);

    shine.style.width = `${widthImg}vw`;
    shine.classList.add("skills-shine");
    shine.style.maskImage = `url(Assets/L${i}.png)`

    img.style.width = `${widthImg}vw`;
    img.classList.add("skills-item");

    item.style.marginTop = `${Aleatorio(1, 2)}vw`;
    item.style.marginBottom = `${Aleatorio(1, 2)}vw`;

    const light = document.createElement("div");

    light.classList.add("skills-light");

    item.appendChild(light);
    shine.appendChild(img);
    item.appendChild(shine);

    skills.appendChild(item);
}

const mansory = document.getElementById("masonry");
let images = [];

async function loadImages() {
  const container = document.getElementById('masonry');
  const res = await fetch('https://picsum.photos/v2/list?limit=6');
  const data = await res.json();

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add("masonry-item");

    const img = document.createElement('img');
    img.src = `https://picsum.photos/id/${item.id}/50/50`;

    card.appendChild(img);
    container.appendChild(card);
  });
}

loadImages();
