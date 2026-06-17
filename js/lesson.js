// const hideBlocks = () => {
//   tabBlocks.forEach((tab) => {
//     tab.classList.remove("tab_content_block_active");
//   });
//   tabBlocks.forEach((block) => {
//     block.computedStyleMap.display = none;
//   });
// };

// const showBlock = (index = 0) => {
//     tabBtns[index].classList.add("tab_content_item_active");
//     tabBlocks[index].computedStyleMap.display = "block";
// }

// hideBlocks();
// showBlock();

// tabsParent.onclick = (event) => {
//     if(event.target.tagName.toLowerCase() === 'button'){
//         tabBtns.forEach((btn, index) => {
//             if(event.target === btn ){
//                 hideBlocks();
//                 showBlock(index);
//             }
//         })
//     };
// }

// const tabsParent = document.querySelector(".tab_content_items");
// const tabBtns = document.querySelectorAll(".tab_content_item");
// const tabBlocks = document.querySelectorAll(".tab_content_block");

// const selectTab = (index = 0) => {
//   tabBlocks.forEach((block, i) => block.classList.toggle("active", index == i));
//   tabBtns.forEach((btn, i) => btn.classList.toggle("active", index === i));
// };

// tabsParent.onclick = (event) => {
//   const selected = event.target.closest(".tab_content_item");
//   if (!selected) return;

//   const selectedIndex = [...tabBtns].indexOf(selected);

//   selectTab(selectedIndex);
//   tabI = selectedIndex+1

//   if (tabI >= tabBtns.length) {
//     tabI = 0;
//   }
// };

// setTimeout(() => selectTab(), 5000);

// let tabI = 0;

// const slider = () => {
//   setInterval(() => {
//     selectTab(tabI);
//     tabI++;
//     if (tabI >= tabBtns.length) {
//       tabI = 0;
//     }
//   }, 3000);
// };

// slider();

const tabsParent = document.querySelector(".tab_content_items");
const tabBtns = document.querySelectorAll(".tab_content_item");
const tabBlocks = document.querySelectorAll(".tab_content_block");

const selectTab = (index = 0) => {
  tabBlocks.forEach((block, i) =>
    block.classList.toggle("active", index === i),
  );

  tabBtns.forEach((btn, i) => btn.classList.toggle("active", index === i));
};

tabsParent.addEventListener("click", (event) => {
  const selected = event.target.closest(".tab_content_item");

  if (!selected) return;

  const selectedIndex = [...tabBtns].indexOf(selected);
  tabI = selectedIndex;
  selectTab(selectedIndex);
});

let tabI = 0;

const slider = () => {
  setInterval(() => {
    selectTab(tabI);

    tabI++;

    if (tabI === tabBtns.length) {
      tabI = 0;
    }
  }, 3000);
};

slider();

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");
const errorText = document.querySelector("#error");

// somInput.oninput = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "../data/current.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();

//   request.onload = () => {
//     const {usd} = JSON.parse(request.response);
//     usdInput.value = (somInput.value / usd).toFixed(2);
// }

const converter = (element, otherElement) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const { usd, eur } = JSON.parse(request.response);
      if (element.value == "") {
        otherElements.forEach((input) => (input.value = ""));
        return;
      }

      if (element.id === "som") {
        usdInput.value = (element.value / usd).toFixed(2);
        eurInput.value = (element.value / eur).toFixed(2);
      } else if (element.id === "usd") {
        somInput.value = (element.value * usd).toFixed(2);
        eurInput.value = ((element.value * usd) / eur).toFixed(2); // Перевод USD -> SOM -> EUR
      } else if (element.id === "eur") {
        somInput.value = (element.value * eur).toFixed(2);
        usdInput.value = ((element.value * eur) / usd).toFixed(2); // Перевод EUR -> SOM -> USD
      }
    };
  };
};

converter(somInput, [usdInput, eurInput]);
converter(usdInput, [somInput, eurInput]);
converter(eurInput, [somInput, usdInput]);

const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
const cardTodo = document.querySelector(".card");

let cardId = 1;
const MAX = 200;

btnNext.onclick = () => {
  cardId++;
  if (cardId > MAX) {
    cardId = 1;
  }
  fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      const { id, title, completed } = data;
      const color = completed ? "green" : "red";
      cardTodo.style.borderColor = color;
      cardTodo.innerHTML = `
    <p>${id}</p>
    <p>${title}</p>
    <p style='color: ${color}'>${completed ? "Complited" : "Not complited"}</p>`;
    });
};

btnPrev.onclick = () => {
  cardId--;
  if (cardId < 1) {
    cardId = MAX;
  }
  fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      const { id, title, completed } = data;
      const color = completed ? "green" : "red";
      cardTodo.style.borderColor = color;
      cardTodo.innerHTML = `
    <p>${id}</p>
    <p>${title}</p>
    <p style='color: ${color}'>${completed ? "Complited" : "Not complited"}</p>`;
    });
};

fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
  .then((response) => response.json())
  .then((data) => {
    const { id, title, completed } = data;
    const color = completed ? "green" : "red";

    cardTodo.style.borderColor = color;

    cardTodo.innerHTML = `
      <p>${id}</p>
      <p>${title}</p>
      <p style='color: ${color}'>
        ${completed ? "Completed" : "Not completed"}
      </p>`;
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });


const cityInput = document.querySelector('.cityName')
const searchBtn = document.querySelector('#search')
const cityText = document.querySelector('.city')
const tempText = document.querySelector('.temp')

const BASE_API = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '83b3ebd39b878f8be8acd104821aa61a';

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
        try {
            const response = await fetch(`${BASE_API}?q=${city}&units=metric&lang=ru&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Город не найден');
            }
            const data = await response.json();
            const {name, main: {temp}} = data;
            cityText.innerHTML = name;
            tempText.innerHTML = `${Math.round(temp)}°C`;
        } catch (error) {
            console.error("Weather fetch error:", error);
            cityText.innerHTML = 'Укажите правильный город';
            tempText.innerHTML = '';
        }
    } else {
        cityText.innerHTML = 'Укажите название города';
        tempText.innerHTML = '';
    }
    cityInput.value = '';
});
