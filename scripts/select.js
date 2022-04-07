const PROJECTS = [{
    id: 1,
    title: "Green World",
    image: "green-world.webp",
    link: "https://prometheusalpha.github.io/GreenWorld"
  },
  {
    id: 2,
    title: "Sort Visualizer",
    image: "sort-visualizer.jpg",
    link: "https://prometheusalpha.github.io/Sort-Visualizer"
  },
  {
    id: 3,
    title: "Internal CSS",
    image: "bg.jpg",
    link: "https://marketplace.visualstudio.com/items?itemName=PrometheusAlpha.internal-css"
  },
  {
    id: 4,
    title: "Password Generator",
    image: "password-generator.jpg",
    link: "https://prometheusalpha.github.io/PasswordGenerator"
  },
  {
    id: 5,
    title: "ASCII Tree",
    image: "ascii-tree.png",
    link: "https://ascii-tree.vercel.app/"
  }
];
const SELECT_MOVE_DISTANCE = 475;
const DISPAY_PROJECTS = [...PROJECTS, ...PROJECTS, ...PROJECTS];
let current = 5;

const createElement = (html) => {
  const template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};

const createHeading = (project) => {
  return createElement(
    `<div class="select flex items-center"><p>0${project.id}.</p><h1 class="mx-8 my-20 cursor-pointer text-[5rem] leading-none">${project.title}</h1></div>`
  );
}

const changeProject = (project) => {
  current = project.id + PROJECTS.length - 1;
  displayList();
  document.querySelector("#select").style.marginBottom = (project.id - 3) * SELECT_MOVE_DISTANCE + "px";
  document.querySelector("#projects_img").src = "image/" + project.image;
  document.querySelector("#projects_link").href = project.link;
}

const displayList = () => {
  document.querySelector("#select").innerHTML = "";
  DISPAY_PROJECTS.forEach((project, index) => {
    let element = createHeading(project);

    if (index === current) {
      element.classList.add("text-blue-500");
    }

    element.addEventListener("click", () => {
      changeProject(project);
    });

    document.querySelector("#select").append(element);
  })
};

displayList();
