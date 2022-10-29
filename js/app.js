import { hamburgerMenu } from "./hamburger.js";

const sliderContent = {
  title2: "We are available all across the globe",
  paragraph2:
    "We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
  imgUrl2: "/assets/images/desktop-image-hero-2.jpg",
  title3: "Manufactured with the best materials",
  paragraph3:
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  imgUrl3: "/assets/images/desktop-image-hero-3.jpg",
  title1: "Discover innovative ways to decorate",
  paragraph1:
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  imgUrl1: "/assets/images/desktop-image-hero-1.jpg",
  imgMobile1: "/assets/images/mobile-image-hero-1.jpg",
  imgMobile2: "/assets/images/mobile-image-hero-2.jpg",
  imgMobile3: "/assets/images/mobile-image-hero-3.jpg",
};

const contentImage = document.querySelector("[data-hero]");
const contentImageMobile = document.querySelector("[data-hero2]");
const contentTitle = document.querySelector("[data-title]");
const contentParagraph = document.querySelector("[data-paragraph]");
const btnLeftMobile = document.querySelector("[data-button-left]");
const btnRightMobile = document.querySelector("[data-button-right]");
const btnLeftDesktop = document.querySelector("[data-button-left2]");
const btnRightDesktop = document.querySelector("[data-button-right2]");

const mediaQueryMobile = window.matchMedia("(max-width:375px;)");
const mediaQueryDesktop = window.matchMedia("(min-width:1024px;)");

const sliderMobile = () => {
  btnRightMobile.addEventListener("click", () => {
    if (mediaQueryMobile) {
      contentImageMobile.setAttribute("src", sliderContent.imgMobile2);
      contentImageMobile.setAttribute("alt", "hero 2");
      contentTitle.textContent = sliderContent.title2;
      contentParagraph.textContent = sliderContent.paragraph2;
    }

    btnRightMobile.addEventListener("click", () => {
      if (mediaQueryMobile) {
        contentImageMobile.setAttribute("src", sliderContent.imgMobile3);
        contentImageMobile.setAttribute("alt", "hero 3");
        contentTitle.textContent = sliderContent.title3;
        contentParagraph.textContent = sliderContent.paragraph3;
      }
      btnRightMobile.addEventListener("click", () => {
        if (mediaQueryMobile) {
          contentImageMobile.setAttribute("src", sliderContent.imgMobile1);
          contentImageMobile.setAttribute("alt", "hero 1");
          contentTitle.textContent = sliderContent.title1;
          contentParagraph.textContent = sliderContent.paragraph1;
          return sliderMobile();
        }
      });
    });
  });
};
const sliderLeftMobile = () => {
  btnLeftMobile.addEventListener("click", () => {
    if (mediaQueryMobile) {
      contentImageMobile.setAttribute("src", sliderContent.imgMobile3);
      contentImageMobile.setAttribute("alt", "hero 3");
      contentTitle.textContent = sliderContent.title3;
      contentParagraph.textContent = sliderContent.paragraph3;
    }

    btnLeftMobile.addEventListener("click", () => {
      if (mediaQueryMobile) {
        contentImageMobile.setAttribute("src", sliderContent.imgMobile2);
        contentImageMobile.setAttribute("alt", "hero 2");
        contentTitle.textContent = sliderContent.title2;
        contentParagraph.textContent = sliderContent.paragraph2;
      }

      btnLeftMobile.addEventListener("click", () => {
        if (mediaQueryMobile) {
          contentImageMobile.setAttribute("src", sliderContent.imgMobile1);
          contentImageMobile.setAttribute("alt", "hero 3");
          contentTitle.textContent = sliderContent.title3;
          contentParagraph.textContent = sliderContent.paragraph3;
          return sliderLeftMobile();
        }
      });
    });
  });
};
const sliderDesktop = () => {
  btnRightDesktop.addEventListener("click", () => {
    contentImage.setAttribute("src", sliderContent.imgUrl2);
    contentImage.setAttribute("alt", "hero 2");
    contentTitle.textContent = sliderContent.title2;
    contentParagraph.textContent = sliderContent.paragraph3;

    btnRightDesktop.addEventListener("click", () => {
      contentImage.setAttribute("src", sliderContent.imgUrl3);
      contentImage.setAttribute("alt", "hero 3");
      contentTitle.textContent = sliderContent.title3;
      contentParagraph.textContent = sliderContent.paragraph3;

      btnRightDesktop.addEventListener("click", () => {
        contentImage.setAttribute("src", sliderContent.imgUrl1);
        contentImage.setAttribute("alt", "hero 1");
        contentTitle.textContent = sliderContent.title1;
        contentParagraph.textContent = sliderContent.paragraph1;
        return sliderDesktop();
      });
    });
  });
};

const sliderLeftDesktop = () => {
    btnLeftDesktop.addEventListener("click", () => {
        contentImage.setAttribute("src", sliderContent.imgUrl3);
        contentImage.setAttribute("alt", "hero 3");
        contentTitle.textContent = sliderContent.title3;
        contentParagraph.textContent = sliderContent.paragraph3;

  
      btnLeftDesktop.addEventListener("click", () => {
          contentImage.setAttribute("src", sliderContent.imgUrl2);
          contentImage.setAttribute("alt", "hero 2");
          contentTitle.textContent = sliderContent.title2;
          contentParagraph.textContent = sliderContent.paragraph2;

  
        btnLeftDesktop.addEventListener("click", () => {

            contentImage.setAttribute("src", sliderContent.imgUrl1);
            contentImage.setAttribute("alt", "hero 1");
            contentTitle.textContent = sliderContent.title1;
            contentParagraph.textContent = sliderContent.paragraph1;
            return sliderLeftDesktop();
        });
      });
    });
  };

sliderDesktop();
sliderLeftDesktop();
sliderMobile();
sliderLeftMobile();
hamburgerMenu();
