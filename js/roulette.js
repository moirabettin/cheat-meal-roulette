var cheat_meals = [
  { Name: "Osteria al Majo", Url: "https://www.tripadvisor.it/ShowUserReviews-g187867-d3569454-r143298561-Osteria_Al_Majo-Padua_Province_of_Padua_Veneto.html " },
  { Name: "Ristorante Vecchio Falconiere", Url: "https://www.ristoranteilvecchiofalconiere.it/" },
  { Name: "Sushi Kai", Url: "https://wakabamilano.blogspot.com/?m=1https://www.tripadvisor.it/Restaurant_Review-g187867-d6464445-Reviews-Sushi_Kai-Padua_Province_of_Padua_Veneto.html" },
  {Name: "Bar trattoria alle Rose",
    Url: "https://www.google.com/maps/place/Trattoria+alle+Rose/@45.5550232,11.8393593,15z/data=!4m5!3m4!1s0x0:0x1c3ebffcc7733819!8m2!3d45.5550232!4d11.8393593",
  },

];

const rouletteContainer = document.querySelector(".roulette-container");
const roulette = document.querySelector(".roulette");
const linkTo = document.querySelector(".link-to");
const spin = document.querySelector(".spin");
spin.addEventListener("click", () => {
  rouletteContainer.classList.remove("tada");
  const total = cheat_meals.length;
  const selected = Math.floor(Math.random() * total);
  for (let i = 0; i <= total; i++) {
    setTimeout(
      ((i) => {
        return () => {
          roulette.innerText = cheat_meals[i % total].Name;
          linkTo.href = cheat_meals[i % total].Url;
          if (i === selected) {
            roulette.classList.add("tada");
          }
        };
      })(i),
      i * 100
    );
    if (i === selected) {
      break;
    }
  }
});





