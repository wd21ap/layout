

const appDiv = document.getElementById("app");
const appTitle = "Layout Template";




// products is an array of objects
let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];
const listProducts = (prods) => {
  let product_names = [];
  for (let i=0; i<prods.length; i+=1) {
   product_names.push(prods[i].name);
  }
  return product_names;
}





const rootContent = [
    {
      heading: "Phones",
      summary: "This is the content for phones."
    },
    {
      heading: "Tablets",
      summary: "This is the content for laptops."
    },
    {
      heading: "Laptops",
      summary: "This is the content for laptops."
    }
  ];
  
  const listContent = (heads) => {
    let content_headings = [];
    for (let i=0; i < heads.length; i++) {
      content_headings.push(heads[i].heading);
    }
    return content_headings;
  }



// create Header
let el = document.createElement("div");
el.id = "header";
appDiv.appendChild(el);

let title = document.createElement("h1");
let titleText = document.createTextNode(appTitle);
title.appendChild(titleText);
let titleLoc = document.getElementById("header");
titleLoc.appendChild(title);

// create Root
let elRoot = document.createElement("div");
elRoot.id = "root";
appDiv.appendChild(elRoot);

let rootTitle = document.createElement("h2");
let rootText = document.createTextNode("Root");
rootTitle.appendChild(rootText);
let rootLoc = document.getElementById("root");
rootLoc.appendChild(rootTitle);

let prodNameEl = document.createElement("h3");
let prodNameText = document.createTextNode(listProducts(products));
prodNameEl.appendChild(prodNameText);
let prodNameLoc = document.getElementById("root");
prodNameLoc.appendChild(prodNameEl);

const electronics = () => {
    for (let i = 0; i < rootContent.length; i++ ) {
        let blocks = document.createElement("div");
        let blocksHeading = document.createTextNode(rootContent[i].heading);
        blocks.appendChild(blocksHeading);
        let blocksDivLoc = document.getElementById("root");
        blocksDivLoc.appendChild(blocks);
    }
}
electronics(rootContent);

// create Footer
let elFooter = document.createElement("div");
elFooter.id = "footer";
appDiv.appendChild(elFooter);

let footerTitle = document.createElement("h3");
let footerText = document.createTextNode("Footer");
footerTitle.appendChild(footerText);
let footerLoc = document.getElementById("footer");
footerLoc.appendChild(footerTitle);





