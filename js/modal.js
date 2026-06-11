const modal = document.querySelector(".modal");
const openBtn = document.querySelector("#btn-get");
const closeBtn = document.querySelector(".modal_close");

const showModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

openBtn.onclick = showModal;
closeBtn.onclick = closeModal;

setTimeout(showModal, 5000);

let scrollOpen = false;

const scroll = () => {
  if (
    !scrollOpen &&
    window.innerHeight + window.scrollY >= document.body.offsetHeight
  ) {
    showModal();
    window.removeEventListener("scroll", scroll);
    scrollOpen = true;
  }
};

window.addEventListener("scroll", scroll);
