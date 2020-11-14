document.addEventListener("DOMContentLoaded", () => {
  const cursorAnimation = () => {
    const innerCursor = document.querySelector(".inner-cursor");
    const outerCursor = document.querySelector(".outer-cursor");

    const moveCursor = (evt) => {
      const x = evt.clientX;
      const y = evt.clientY;

      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;
      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    };
    document.addEventListener("mousemove", moveCursor);
  };

  const liquidTransition = (img) => {
    new hoverEffect({
      parent: document.querySelector(".img__container"),
      intensity: 0.34,
      image1: `./img/${img}.jpg`,
      image2: `./img/${img}-b.jpg`,
      angle: Math.PI / 4.3,
      displacementImage: "./img/heightMap.png",
    });
  };

  const itemsHoverHandler = () => {
    const items = document.querySelectorAll(".menu__item-link");
    const img = document.querySelector(".menu__item-img");
    items.forEach((el) => {
      //ENTER
      el.addEventListener("mouseover", (evt) => {
        document.querySelector(".img__container").innerHTML = "";
        liquidTransition(evt.target.innerHTML);
        // img.src = `./img/${evt.target.innerHTML}.jpg
        // `;
        // img.classList.add("show_img");
      });
      //OUT
      el.addEventListener("mouseout", (evt) => {});
    });
  };

  //   cursorAnimation();
  itemsHoverHandler();
});
