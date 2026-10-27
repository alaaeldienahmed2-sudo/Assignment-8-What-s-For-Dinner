var meals = [
    {
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
        rate: 4.4,
        reviews: 256,
        prepTime: "80 min",
        cookTime: "12 min",
        servings: 4,
        isExtended: true,
        mealName: "Margherita Pizza",
        difficulty: "Easy",
        cuisine: "Italian",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        ingredients: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "150g fresh mozzarella",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Let pizza dough come to room temperature and rest for 1 hour.",
            "Preheat oven to maximum temperature, usually 250°C/480°F.",
            "Mix crushed tomatoes with olive oil, salt, and pepper for the sauce.",
            "Roll out dough on a floured surface to desired thickness.",
            "Spread tomato sauce over the dough and add mozzarella.",
            "Bake for 10–12 minutes until the crust is golden and crispy.",
            "Top with fresh basil and serve hot."
        ],
        nutrition: [
            "Calories 580 kcal",
            "Protein 22g",
            "Carbs 65g",
            "Fat 25g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
        rate: 4.8,
        reviews: 189,
        prepTime: "30 min",
        cookTime: "15 min",
        servings: 3,
        isExtended: false,
        mealName: "Chicken Tikka",
        difficulty: "Intermediate",
        cuisine: "Indian",
        description: "Juicy grilled chicken pieces marinated in yogurt and aromatic spices",
        ingredients: [
            "500g chicken breast",
            "150g Greek yogurt",
            "2 tbsp lemon juice",
            "1 tsp paprika",
            "1 tsp cumin",
            "1 tsp garam masala",
            "2 garlic cloves",
            "Salt to taste"
        ],
        instructions: [
            "Cut the chicken into medium-sized pieces.",
            "Mix yogurt, lemon juice, garlic, and spices in a bowl.",
            "Add chicken and coat thoroughly with the marinade.",
            "Cover and refrigerate for at least 30 minutes.",
            "Thread chicken pieces onto skewers.",
            "Grill for 12–15 minutes, turning occasionally.",
            "Serve hot with rice, naan, or fresh salad."
        ],
        nutrition: [
            "Calories 420 kcal",
            "Protein 48g",
            "Carbs 12g",
            "Fat 20g"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
        rate: 4.7,
        reviews: 324,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: 4,
        isExtended: true,
        mealName: "Creamy Garlic Pasta",
        difficulty: "Easy",
        cuisine: "Italian",
        description: "Creamy pasta tossed with garlic, parmesan, and fresh herbs",
        ingredients: [
            "400g spaghetti",
            "3 tbsp butter",
            "4 garlic cloves",
            "250ml heavy cream",
            "100g parmesan cheese",
            "Fresh parsley",
            "Salt and black pepper"
        ],
        instructions: [
            "Cook pasta in salted boiling water according to package instructions.",
            "Melt butter in a large pan over medium heat.",
            "Add minced garlic and cook for 1–2 minutes.",
            "Pour in the cream and simmer gently.",
            "Add parmesan cheese and stir until the sauce becomes creamy.",
            "Add the cooked pasta and toss until evenly coated.",
            "Season with salt and pepper and garnish with parsley."
        ],
        nutrition: [
            "Calories 640 kcal",
            "Protein 20g",
            "Carbs 72g",
            "Fat 30g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
        rate: 4.6,
        reviews: 142,
        prepTime: "20 min",
        cookTime: "25 min",
        servings: 4,
        isExtended: false,
        mealName: "Chicken Caesar Salad",
        difficulty: "Easy",
        cuisine: "American",
        description: "Fresh romaine lettuce with grilled chicken, parmesan, and creamy Caesar dressing",
        ingredients: [
            "2 chicken breasts",
            "1 large romaine lettuce",
            "80g parmesan cheese",
            "100g croutons",
            "4 tbsp Caesar dressing",
            "1 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Season chicken breasts with olive oil, salt, and pepper.",
            "Grill chicken for 6–8 minutes per side until fully cooked.",
            "Wash and chop the romaine lettuce.",
            "Slice the cooked chicken into strips.",
            "Combine lettuce, chicken, parmesan, and croutons.",
            "Add Caesar dressing and toss gently.",
            "Serve immediately."
        ],
        nutrition: [
            "Calories 390 kcal",
            "Protein 36g",
            "Carbs 18g",
            "Fat 21g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
        rate: 4.8,
        reviews: 275,
        prepTime: "15 min",
        cookTime: "10 min",
        servings: 2,
        isExtended: false,
        mealName: "Classic Beef Burger",
        difficulty: "Easy",
        cuisine: "American",
        description: "Juicy beef burger with cheddar cheese, lettuce, tomato, and special sauce",
        ingredients: [
            "300g ground beef",
            "2 burger buns",
            "2 slices cheddar cheese",
            "Lettuce leaves",
            "1 tomato",
            "1/2 onion",
            "2 tbsp burger sauce",
            "Salt and black pepper"
        ],
        instructions: [
            "Divide the ground beef into two equal portions.",
            "Shape each portion into a burger patty.",
            "Season both sides with salt and pepper.",
            "Cook patties on a hot grill or pan for 4–5 minutes per side.",
            "Add cheddar cheese during the final minute of cooking.",
            "Toast the burger buns lightly.",
            "Assemble the burger with sauce, lettuce, tomato, onion, and beef patty.",
            "Serve immediately with your favorite side."
        ],
        nutrition: [
            "Calories 690 kcal",
            "Protein 38g",
            "Carbs 42g",
            "Fat 42g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop",
        rate: 4.9,
        reviews: 198,
        prepTime: "10 min",
        cookTime: "18 min",
        servings: 4,
        isExtended: true,
        mealName: "Spicy Shrimp Pasta",
        difficulty: "Intermediate",
        cuisine: "Italian",
        description: "Tender shrimp and pasta tossed in a spicy garlic tomato sauce",
        ingredients: [
            "350g penne pasta",
            "300g peeled shrimp",
            "200g tomato sauce",
            "4 garlic cloves",
            "1 tsp chili flakes",
            "2 tbsp olive oil",
            "Fresh parsley",
            "Salt and pepper"
        ],
        instructions: [
            "Cook pasta in salted boiling water until al dente.",
            "Heat olive oil in a large skillet.",
            "Add garlic and chili flakes and cook for 1 minute.",
            "Add shrimp and cook for 2–3 minutes per side.",
            "Pour in the tomato sauce and simmer for 5 minutes.",
            "Add the cooked pasta and toss everything together.",
            "Season with salt and pepper and garnish with parsley."
        ],
        nutrition: [
            "Calories 520 kcal",
            "Protein 34g",
            "Carbs 62g",
            "Fat 16g"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
        rate: 4.5,
        reviews: 116,
        prepTime: "15 min",
        cookTime: "0 min",
        servings: 2,
        isExtended: false,
        mealName: "Mediterranean Salad",
        difficulty: "Easy",
        cuisine: "Mediterranean",
        description: "Refreshing salad with cucumber, tomatoes, olives, feta, and fresh herbs",
        ingredients: [
            "2 tomatoes",
            "1 cucumber",
            "1/2 red onion",
            "100g feta cheese",
            "80g black olives",
            "Fresh parsley",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper"
        ],
        instructions: [
            "Wash and chop the tomatoes and cucumber.",
            "Thinly slice the red onion.",
            "Add vegetables and olives to a large bowl.",
            "Crumble feta cheese over the salad.",
            "Mix olive oil and lemon juice for the dressing.",
            "Pour dressing over the salad.",
            "Season with salt and pepper and toss gently."
        ],
        nutrition: [
            "Calories 280 kcal",
            "Protein 9g",
            "Carbs 14g",
            "Fat 22g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
        rate: 4.7,
        reviews: 231,
        prepTime: "15 min",
        cookTime: "25 min",
        servings: 4,
        isExtended: true,
        mealName: "Chicken Fried Rice",
        difficulty: "Easy",
        cuisine: "Asian",
        description: "Flavorful fried rice with chicken, vegetables, eggs, and soy sauce",
        ingredients: [
            "3 cups cooked rice",
            "300g chicken breast",
            "2 eggs",
            "1 carrot",
            "100g peas",
            "3 tbsp soy sauce",
            "2 garlic cloves",
            "2 tbsp vegetable oil",
            "2 green onions"
        ],
        instructions: [
            "Cut chicken into small pieces.",
            "Heat oil in a large wok or skillet.",
            "Cook chicken until golden and fully cooked.",
            "Add garlic, carrots, and peas and stir-fry for 3–4 minutes.",
            "Push ingredients to one side and scramble the eggs.",
            "Add cooked rice and soy sauce.",
            "Stir-fry everything together for 5–7 minutes.",
            "Garnish with sliced green onions and serve hot."
        ],
        nutrition: [
            "Calories 560 kcal",
            "Protein 32g",
            "Carbs 68g",
            "Fat 18g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
        rate: 4.8,
        reviews: 167,
        prepTime: "20 min",
        cookTime: "35 min",
        servings: 4,
        isExtended: false,
        mealName: "Creamy Tomato Soup",
        difficulty: "Easy",
        cuisine: "American",
        description: "Smooth and comforting tomato soup finished with cream and fresh herbs",
        ingredients: [
            "800g ripe tomatoes",
            "1 onion",
            "3 garlic cloves",
            "500ml vegetable stock",
            "100ml heavy cream",
            "2 tbsp olive oil",
            "Fresh basil",
            "Salt and pepper"
        ],
        instructions: [
            "Heat olive oil in a large pot.",
            "Add chopped onion and garlic and cook until soft.",
            "Add tomatoes and vegetable stock.",
            "Bring to a boil, then simmer for 20 minutes.",
            "Blend the soup until completely smooth.",
            "Stir in the heavy cream.",
            "Season with salt and pepper.",
            "Garnish with fresh basil and serve warm."
        ],
        nutrition: [
            "Calories 240 kcal",
            "Protein 6g",
            "Carbs 25g",
            "Fat 14g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
        rate: 4.9,
        reviews: 342,
        prepTime: "60 min",
        cookTime: "15 min",
        servings: 4,
        isExtended: true,
        mealName: "Pepperoni Pizza",
        difficulty: "Intermediate",
        cuisine: "Italian",
        description: "Crispy homemade pizza topped with tomato sauce, mozzarella, and pepperoni",
        ingredients: [
            "350g pizza dough",
            "200g tomato sauce",
            "200g mozzarella cheese",
            "120g pepperoni slices",
            "1 tsp oregano",
            "1 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Let the pizza dough rest at room temperature for 1 hour.",
            "Preheat oven to 250°C/480°F.",
            "Roll the dough into a round pizza base.",
            "Spread tomato sauce evenly over the dough.",
            "Add mozzarella cheese and pepperoni slices.",
            "Sprinkle oregano over the top.",
            "Bake for 12–15 minutes until golden and bubbling.",
            "Let cool for a few minutes before slicing."
        ],
        nutrition: [
            "Calories 720 kcal",
            "Protein 30g",
            "Carbs 70g",
            "Fat 36g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    },

    {
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
        rate: 4.6,
        reviews: 94,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: 2,
        isExtended: false,
        mealName: "Vegetable Omelette",
        difficulty: "Easy",
        cuisine: "International",
        description: "Fluffy eggs packed with fresh vegetables and melted cheese",
        ingredients: [
            "4 large eggs",
            "1/2 bell pepper",
            "1/2 onion",
            "50g mushrooms",
            "50g cheddar cheese",
            "1 tbsp butter",
            "Fresh parsley",
            "Salt and pepper"
        ],
        instructions: [
            "Whisk the eggs with salt and pepper.",
            "Chop the vegetables into small pieces.",
            "Melt butter in a non-stick pan.",
            "Cook the vegetables for 3–4 minutes.",
            "Pour the eggs over the vegetables.",
            "Cook until the edges begin to set.",
            "Add cheese and fold the omelette in half.",
            "Cook for another 1–2 minutes and serve."
        ],
        nutrition: [
            "Calories 340 kcal",
            "Protein 24g",
            "Carbs 9g",
            "Fat 24g"
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload the pizza with toppings",
            "Let the dough rest for at least 1 hour"
        ]
    }
];


var rate = document.getElementById("rate");
var prepTimeElement = document.getElementById("prepTime");
var cookTimeElement = document.getElementById("cookTime");
var servesElement = document.getElementById("serves");
var mealDifficultyElement = document.getElementById("difficulty");
var cuisineElement = document.getElementById("cuisine");
var mealNameElement = document.getElementById("mealName");
var mealDescriptionElement = document.getElementById("mealDescription");
var mealImgElement = document.getElementById("mealImg");
var ingredientsElement = document.getElementById("ingredients");
var instructionsElement = document.getElementById("instructions");
var nutritionElement = document.getElementById("nutrition");
var tipsElement = document.getElementById("tips");
var warningElement = document.getElementById("warning");


var randomRecipe = document.getElementById("randomRecipe");

var index = 0;
//display meal


// fixed Data Function
function displayMeal(){
    rate.innerHTML=`${meals[index].rate} (${meals[index].reviews} reviews)`;
    prepTimeElement.innerHTML=meals[index].prepTime;
    cookTimeElement.innerHTML=meals[index].cookTime;
    servesElement.innerHTML=meals[index].servings;
    mealDifficultyElement.innerHTML=meals[index].difficulty;
    cuisineElement.innerHTML=meals[index].cuisine;
    mealNameElement.innerHTML=meals[index].mealName;
    mealDescriptionElement.innerHTML=meals[index].description;
    mealImgElement.src= meals[index].image;
    meals[index].isExtended?  warningElement.classList.replace("d-none","d-flex") : warningElement.classList.replace("d-flex","d-none");
    // Warning
   /*  if(meals[index].isExtended){
        warningElement.classList.replace("d-none","d-flex");
    }else{
        warningElement.classList.replace("d-flex","d-none");
    }
    */

    displayIngredients();
    displayInstructions();
    displayNutrition();
    displayTips();


}

// 1st Tab

function displayIngredients(){
    var box= ``
    for(let i=0;i<meals[index].ingredients.length;i++){
        box+=`
         <li class="d-flex">
                        <span
                          class="d-flex align-items-center justify-content-center me-2 rounded-circle"
                          style="
                            width: 30px;
                            height: 30px;
                            background: orange;
                            color: white;
                          "
                        >
                          ${i+1}</span
                        >${meals[index].ingredients[i]}
                      </li>
        `
    }
   ingredientsElement.innerHTML=box;
}
// 2nd Tab

function displayInstructions(){
     var box= ``
    for(let i=0;i<meals[index].instructions.length;i++){
        box+=`
          <li class="d-flex align-items-center">
                        <span
                          class="d-flex align-items-center justify-content-center me-2 rounded-4"
                          style="
                            width: 50px;
                            height: 50px;
                            background: orange;
                            color: white;
                          "
                        >
                          ${i+1}</span
                        >${meals[index].instructions[i]}
                      </li>
        `
    }
   instructionsElement.innerHTML=box;
}
// 3rd Tab

function displayNutrition(){
     var box= ``
    for(let i=0;i<meals[index].nutrition.length;i++){
        box+=`
           <div class="col-6">
                            <div class="inner bg-secondary-subtle p-3 rounded-3 d-flex justify-content-between align-items-center">
                                <div class="icon"><span style="color: orangered;"><i class="fa-solid fa-fire"></i></span></div>
                                <div class="value">${meals[index].nutrition[i]}</div>
                            </div>
                        
                        </div>
        `
    }
   nutritionElement.innerHTML=box;
   
}
// 4th Tab
function displayTips(){
    var box= ``
    for(let i=0;i<meals[index].tips.length;i++){
        box+=`
        <li style="background-color: antiquewhite; border-left: 2px solid orange;" class="align-items-center p-2 d-flex rounded-3">
                        <span
                          class="d-flex align-items-center justify-content-center me-2 rounded-circle"
                          style="
                            width: 20px;
                            height: 20px;
                            background: orange;
                            color: white;
                          "
                        >
                          <i class="fa-solid fa-check"></i></span
                        >${meals[index].tips[i]}
                      </li>
        `
    }
   tipsElement.innerHTML=box;
}
// Random Btn




/* 
Math.floor // 3.9 -> 3
Math.ceil // 3.1 -> 4
Math.round // 3.4 -> 3, 3.5 -> 4

function getRandomIndex(){
  return Math.floor(Math.random() * meals.length);
}

 */
function getRandomIndex(){
    var temp = Math.floor(Math.random()*meals.length); 
    do{
    temp = Math.floor(Math.random()*meals.length);
    }while(temp == index);

    index = temp;
    displayMeal();
}  


getRandomIndex();


randomRecipe.onclick=getRandomIndex;