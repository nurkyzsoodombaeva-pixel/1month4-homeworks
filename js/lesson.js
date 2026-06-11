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
    block.classList.toggle("active", index === i)
  );

  tabBtns.forEach((btn, i) =>
    btn.classList.toggle("active", index === i)
  );
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

