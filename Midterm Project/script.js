const menuBtn = document.getElementById("menubtn");
const navlinks = document.getElementById("nav-links");


if (menuBtn && navlinks) {
    menuBtn.addEventListener("click", function () {

        navlinks.classList.toggle("show");

        // GA4 menu tracking
        gtag("event", "menu_button_click", {
            event_category: "navigation",
            event_label: "hamburger menu"
        });

    });
}

const items = [
  {
    name: "NYC 311 Website",
    category: "School",
    description: "A redesign project focused on accessibility and easier navigation."
  },
  {
    name: "WikiHow Website",
    category: "School",
    description: "A project that made instructions easier for young users to understand."
  },
  {
    name: "Information Technology Major",
    category: "School",
    description: "My major at Hofstra University where I learn about technology and systems."
  },
  {
    name: "Business Analytics Minor",
    category: "School",
    description: "My minor that helps me understand data and business problem solving."
  },
  {
    name: "Audio and Visual",
    category: "Job",
    description: "A personal website I created to show my projects, skills, and interests."
  },
  {
    name: "Photography and Content",
    category: "Creative",
    description: "An interest in creating photos, videos, and social media content."
  },
  {
    name: "Arts and Craft",
    category: "Creative",
    description: "An interest in designing and building stuff."
  },
  {
    name: "Volleyball",
    category: "Hobbies",
    description: "I love playing volleyball, I used to play in high school, however, I only play for fun now."
  },
  {
    name: "Playing Video Games",
    category: "Hobbies",
    description: "I play multiple games with friends and family."
  }
];

function renderItems(list) {

  const container = document.getElementById("results-con");


  if (!container) {
    return;
  }

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {

    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>" + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

   const resultCount = document.getElementById("result-count");

   if (resultCount) {
     resultCount.textContent = list.length + " items shown";
   }
}

function filterItems(selectedCategory) {

  switch (selectedCategory) {

    case "":
      renderItems(items);
      break;

    case "Creative":
      const filtered1 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Creative") {
          filtered1.push(items[i]);
        }
      }

      renderItems(filtered1);
      break;

    case "Hobbies":
      const filtered2 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Hobbies") {
          filtered2.push(items[i]);
        }
      }

      renderItems(filtered2);
      break;

    case "School":
      const filtered3 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "School") {
          filtered3.push(items[i]);
        }
      }

      renderItems(filtered3);
      break;

    case "Job":
      const filtered4 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Job") {
          filtered4.push(items[i]);
        }
      }

      renderItems(filtered4);
      break;

    default:
      renderItems(items);
      break;
  }
}

const filterDropdown = document.getElementById("category-filter");

if (filterDropdown) {

    filterDropdown.addEventListener("change", function () {

        filterItems(this.value);

        // GA4 dropdown tracking
        gtag("event", "interest_filter_used", {
            event_category: "filter",
            event_label: this.value || "All"
        });

    });

}

const emailLink = document.querySelector(".contact-link");

if (emailLink) {

    emailLink.addEventListener("click", function () {

        gtag("event", "email_click", {
            event_category: "contact",
            event_label: "email"
        });

    });

}



filterItems("");
