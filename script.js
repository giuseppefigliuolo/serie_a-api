document.addEventListener("DOMContentLoaded", () => {
  const cursorAnimation = () => {
    let mouseCursor = document.querySelector(".cursor");

    const cursorMov = (evt) => {
      mouseCursor.style.top = evt.pageY + "px";
      mouseCursor.style.left = evt.pageX + "px";
    };
    document.addEventListener("mousemove", cursorMov);
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
      el.addEventListener("mouseover", (evt) => {
        document.querySelector(".img__container").innerHTML = "";
        liquidTransition(evt.target.innerHTML);
      });
      el.addEventListener("mouseout", (evt) => {});
    });
  };

  const countdown = () => {
    const countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(x);
      }
      const wholeDate = `- ${days}d. ${hours}h:${minutes}m:${seconds}s`;
      document.querySelector(".countdown").innerHTML = wholeDate;
    }, 1000);
  };

  cursorAnimation();
  itemsHoverHandler();
  countdown();
});
