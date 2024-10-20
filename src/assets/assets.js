import logo from "./logo.png";
import logo2 from "./logo2.png";
import banner from "./header_banner.gif";
import remove_icon_red from "./remove_icon_red.png";
import add_icon_green from "./add_icon_green.png";
import chocolates from "./chocolates.png";
import nonveg from "./nonveg.png";
import desserts from "./desserts.png";
import japanese from "./japanese.png";
import pizza from "./pizza.png";
import sandwiches from "./sandwiches.png";
import burger from "./burger.png";
import cakes from "./cakes.png";
import beverage from "./beverages.png";
import nonveg_1 from "./nonveg_1.png";
import nonveg_2 from "./nonveg_2.png";
import nonveg_3 from "./nonveg_3.png";
import nonveg_4 from "./tacos.png";
import nonveg_5 from "./nonveg_5.png";
import japanese_1 from "./japanese_1.jpeg";
import japanese_2 from "./japanese_2.jpeg";
import japanese_3 from "./japanese_3.jpeg";
import japanese_4 from "./japanese_4.png";
import japanese_5 from "./japanese_5.jpeg";
import desserts_1 from "./desserts_1.jpg";
import desserts_2 from "./desserts_2.jpg";
import desserts_3 from "./desserts_3.png";
import desserts_4 from "./desserts_4.png";
import desserts_5 from "./desserts_5.png";
import chocolates_1 from "./chocolates_1.png";
import chocolates_2 from "./chocolates_2.png";
import chocolates_3 from "./chocolates_3.png";
import chocolates_4 from "./chocolates_4.jpeg";
import chocolates_5 from "./chocolates_5.jpg";
import pizza_1 from "./pizza_1.png";
import pizza_2 from "./pizza_2.jpeg";
import pizza_3 from "./pizza_3.png";
import pizza_4 from "./pizza_4.jpeg";
import pizza_5 from "./pizza_5.jpg";
import sandwiches_1 from "./sandwiches_1.png";
import sandwiches_2 from "./sandwiches_2.png";
import sandwiches_3 from "./sandwiches_3.png";
import sandwiches_4 from "./sandwiches_4.png";
import sandwiches_5 from "./sandwiches_5.png";
import burger_1 from "./burger_1.png";
import burger_2 from "./burger_2.png";
import burger_3 from "./burger_3.jpeg";
import burger_4 from "./burger_4.jpg";
import burger_5 from "./burger_5.png";
import cakes_1 from "./cakes_1.png";
import cakes_2 from "./cakes_2.png";
import cakes_3 from "./cakes_3.png";
import cakes_4 from "./cakes_4.png";
import cakes_5 from "./cakes_5.jpg";
import beverages_1 from "./beverages_1.png";
import beverages_2 from "./beverages_2.png";
import beverages_3 from "./beverages_3.png";
import beverages_4 from "./beverages_4.png";
import beverages_5 from "./beverages_5.png";
import beverages_6 from "./beverages_6.png"

export const assets = {
  logo,
  logo2,
  banner,
  remove_icon_red,
  add_icon_green
};

export const menu_list = [
  {
    menu_name: "Non Veg",
    menu_image: nonveg,
  },
  {
    menu_name: "Japanese",
    menu_image: japanese,
  },
  {
    menu_name: "Desserts",
    menu_image: desserts,
  },
  {
    menu_name: "Chocolates",
    menu_image: chocolates,
  },
  {
    menu_name: "Pizzas",
    menu_image: pizza,
  },
  {
    menu_name: "Sandwiches",
    menu_image: sandwiches,
  },
  {
    menu_name: "Burger",
    menu_image: burger,
  },
  {
    menu_name: "Cakes",
    menu_image: cakes,
  },
  {
    menu_name: "Beverages",
    menu_image: beverage,
  },
];

export const food_list = [
  // Non Veg
  {
    _id: "1",
    name: "Chicken Biryani",
    image: nonveg_1,
    price: 250,
    description:
      "Aromatic basmati rice cooked with tender chicken pieces and spices.",
    category: "Non Veg",
  },
  {
    _id: "2",
    name: "Grilled Lamb Chops",
    image: nonveg_2,
    price: 480,
    description:
      "Juicy lamb chops marinated in herbs and grilled to perfection.",
    category: "Non Veg",
  },
  {
    _id: "3",
    name: "BBQ Chicken Wings",
    image: nonveg_3,
    price: 370,
    description: "Spicy BBQ wings served with a side of ranch dressing.",
    category: "Non Veg",
  },
  {
    _id: "4",
    name: "Fish Tacos",
    image: nonveg_4,
    price: 280,
    description:
      "Crispy fish fillets wrapped in soft tortillas with fresh salsa.",
    category: "Non Veg",
  },
  {
    _id: "5",
    name: "Beef Steak",
    image:nonveg_5,
    price: 650,
    description: "Tender and juicy beef steak cooked to your preference.",
    category: "Non Veg",
  },

  // Japanese
  {
    _id: "6",
    name: "Sushi Platter",
    image: japanese_1,
    price: 560,
    description: "Assorted sushi rolls with fresh fish and vegetables.",
    category: "Japanese",
  },
  {
    _id: "7",
    name: "Tempura Udon",
    image: japanese_2,
    price: 450,
    description:
      "Udon noodles served with crispy tempura shrimp and vegetables.",
    category: "Japanese",
  },
  {
    _id: "8",
    name: "Chicken Katsu",
    image: japanese_3,
    price: 520,
    description:
      "Breaded and fried chicken cutlets served with rice and tonkatsu sauce.",
    category: "Japanese",
  },
  {
    _id: "9",
    name: "Miso Soup",
    image: japanese_4,
    price: 370,
    description:
      "Traditional Japanese soup with tofu, seaweed, and green onions.",
    category: "Japanese",
  },
  {
    _id: "10",
    name: "Ramen Bowl",
    image: japanese_5,
    price: 560,
    description:
      "Flavorful ramen noodles in a rich broth with pork, egg, and vegetables.",
    category: "Japanese",
  },

  // Desserts
  {
    _id: "11",
    name: "Chocolate Lava Cake",
    image: desserts_1,
    price: 450,
    description: "Warm chocolate cake with a gooey molten center.",
    category: "Desserts",
  },
  {
    _id: "12",
    name: "Cheesecake",
    image: desserts_2,
    price: 275,
    description:
      "Creamy cheesecake with a graham cracker crust and fresh berries.",
    category: "Desserts",
  },
  {
    _id: "13",
    name: "Tiramisu",
    image: desserts_3,
    price: 250,
    description:
      "Classic Italian dessert with layers of coffee-soaked sponge and mascarpone cream.",
    category: "Desserts",
  },
  {
    _id: "14",
    name: "Apple Pie",
    image: desserts_4,
    price: 360,
    description:
      "Traditional apple pie with a buttery crust and cinnamon filling.",
    category: "Desserts",
  },
  {
    _id: "15",
    name: "Brownie Sundae",
    image: desserts_5,
    price: 220,
    description:
      "Fudgy brownie topped with ice cream, whipped cream, and chocolate syrup.",
    category: "Desserts",
  },

  // Chocolates
  {
    _id: "16",
    name: "Dark Chocolate Truffles",
    image: chocolates_1,
    price: 350,
    description: "Rich dark chocolate truffles with a smooth ganache filling.",
    category: "Chocolates",
  },
  {
    _id: "17",
    name: "Chocolate Fudge",
    image: chocolates_2,
    price: 275,
    description: "Creamy chocolate fudge with a hint of sea salt.",
    category: "Chocolates",
  },
  {
    _id: "18",
    name: "Milk Chocolate Bar",
    image: chocolates_3,
    price: 250,
    description: "Smooth and sweet milk chocolate bar.",
    category: "Chocolates",
  },
  {
    _id: "19",
    name: "Chocolate-Covered Strawberries",
    image: chocolates_4,
    price: 285,
    description: "Fresh strawberries dipped in rich chocolate.",
    category: "Chocolates",
  },
  {
    _id: "20",
    name: "Hazelnut Praline",
    image: chocolates_5,
    price: 310,
    description: "Crunchy hazelnut praline coated in dark chocolate.",
    category: "Chocolates",
  },

  // Pizzas
  {
    _id: "21",
    name: "Margherita Pizza",
    image: pizza_1,
    price: 350,
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
    category: "Pizzas",
  },
  {
    _id: "22",
    name: "Pepperoni Pizza",
    image: pizza_2,
    price: 320,
    description: "Spicy pepperoni slices over a cheesy pizza base.",
    category: "Pizzas",
  },
  {
    _id: "23",
    name: "BBQ Chicken Pizza",
    image: pizza_3,
    price: 400,
    description: "Grilled chicken and BBQ sauce on a thin crust pizza.",
    category: "Pizzas",
  },
  {
    _id: "24",
    name: "Veggie Delight Pizza",
    image: pizza_4,
    price: 300,
    description: "Loaded with fresh vegetables and mozzarella cheese.",
    category: "Pizzas",
  },
  {
    _id: "25",
    name: "Four Cheese Pizza",
    image: pizza_5,
    price: 480,
    description: "A blend of four cheeses on a crispy crust.",
    category: "Pizzas",
  },

  // Sandwiches
  {
    _id: "26",
    name: "Club Sandwich",
    image: sandwiches_1,
    price: 240,
    description:
      "Triple-layer sandwich with turkey, bacon, lettuce, and tomato.",
    category: "Sandwiches",
  },
  {
    _id: "27",
    name: "Grilled Cheese",
    image: sandwiches_2,
    price: 220,
    description: "Gooey melted cheese between toasted bread slices.",
    category: "Sandwiches",
  },
  {
    _id: "28",
    name: "BLT Sandwich",
    image: sandwiches_3,
    price: 250,
    description: "Bacon, lettuce, and tomato on whole grain bread.",
    category: "Sandwiches",
  },
  {
    _id: "29",
    name: "Chicken Pesto Sandwich",
    image: sandwiches_4,
    price: 280,
    description:
      "Grilled chicken with pesto sauce and mozzarella on ciabatta bread.",
    category: "Sandwiches",
  },
  {
    _id: "30",
    name: "Egg Salad Sandwich",
    image: sandwiches_5,
    price: 210,
    description: "Creamy egg salad on toasted wheat bread.",
    category: "Sandwiches",
  },

  // Burger
  {
    _id: "31",
    name: "Classic Beef Burger",
    image: burger_1,
    price: 300,
    description: "Juicy beef patty with lettuce, tomato, and cheese.",
    category: "Burger",
  },
  {
    _id: "32",
    name: "Bacon Cheeseburger",
    image: burger_2,
    price: 330,
    description: "Beef burger topped with crispy bacon and melted cheese.",
    category: "Burger",
  },
  {
    _id: "33",
    name: "Veggie Burger",
    image: burger_3,
    price: 250,
    description: "Grilled veggie patty with avocado and sprouts.",
    category: "Burger",
  },
  {
    _id: "34",
    name: "Double Cheeseburger",
    image: burger_4,
    price: 220,
    description: "Two beef patties with double the cheese.",
    category: "Burger",
  },
  {
    _id: "35",
    name: "BBQ Pulled Pork Burger",
    image: burger_5,
    price: 320,
    description: "Pulled pork with BBQ sauce on a brioche bun.",
    category: "Burger",
  },

  // Cakes
  {
    _id: "36",
    name: "Red Velvet Cake",
    image: cakes_1,
    price: 420,
    description: "Moist red velvet cake with cream cheese frosting.",
    category: "Cakes",
  },
  {
    _id: "37",
    name: "Chocolate Fudge Cake",
    image: cakes_2,
    price: 370,
    description: "Decadent chocolate cake layered with rich fudge.",
    category: "Cakes",
  },
  {
    _id: "38",
    name: "Carrot Cake",
    image: cakes_3,
    price: 300,
    description: "Spiced carrot cake with cream cheese icing.",
    category: "Cakes",
  },
  {
    _id: "39",
    name: "Lemon Drizzle Cake",
    image: cakes_4,
    price: 325,
    description: "Zesty lemon cake with a sugary glaze.",
    category: "Cakes",
  },
  {
    _id: "40",
    name: "Black Forest Cake",
    image: cakes_5,
    price: 450,
    description:
      "Chocolate sponge cake layered with whipped cream and cherries.",
    category: "Cakes",
  },
  // Beverages
  {
    _id: "41",
    name: "Classic Lemonade",
    image: beverages_1,
    price: 150,
    description: "Freshly squeezed lemonade with a hint of mint.",
    category: "Beverages",
  },
  {
    _id: "42",
    name: "Iced Coffee",
    image: beverages_2,
    price: 200,
    description: "Rich coffee served over ice with cream.",
    category: "Beverages",
  },
  {
    _id: "43",
    name: "Mango Smoothie",
    image: beverages_3,
    price: 250,
    description: "Creamy smoothie made with ripe mangoes and yogurt.",
    category: "Beverages",
  },
  {
    _id: "44",
    name: "Herbal Tea",
    image: beverages_4,
    price: 100,
    description: "Soothing herbal tea blend with chamomile and lavender.",
    category: "Beverages",
  },
  {
    _id: "45",
    name: "Chocolate Milkshake",
    image: beverages_5,
    price: 300,
    description: "Thick chocolate milkshake topped with whipped cream.",
    category: "Beverages",
  },
  {
    _id: "46",
    name: "Sparkling Water",
    image: beverages_6,
    price: 120,
    description: "Refreshing sparkling water with a hint of lemon.",
    category: "Beverages",
  }

];
