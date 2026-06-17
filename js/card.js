const cardsContainer = document.querySelector(".cards");

const getPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Ошибка получения данных");
    }

    const posts = await response.json();

    posts.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="https://picsum.photos/300/200" alt="image">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      cardsContainer.append(card);
    });
  } catch (error) {
    console.error(error);
    cardsContainer.innerHTML = "<h2>Ошибка загрузки данных</h2>";
  }
};

getPosts();