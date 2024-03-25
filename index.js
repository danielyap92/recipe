import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/random-photo", async (req, res) => {
  try {
    const response = await axios.get("https://foodish-api.com/api");
    const result = response.data.image;
    res.render("rdphoto.ejs", { foodPicture: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("rdphoto.ejs", {
      error: error.message,
    });
  }
});

app.get("/random-recipe", async (req, res) => {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
    const result = response.data.meals[0];
    const YoutubeLink = result.strYoutube.slice(32);

    res.render("recipe.ejs", { 
      recipeName:result.strMeal,
      recipeCategory:result.strCategory,
      recipeArea:result.strArea,
      picture:result.strMealThumb,
      ytlink:YoutubeLink,
      instruction:result.strInstructions,
      ing1:result.strIngredient1, mrs1:result.strMeasure1,
      ing2:result.strIngredient2, mrs2:result.strMeasure2,
      ing3:result.strIngredient3, mrs3:result.strMeasure3,
      ing4:result.strIngredient4, mrs4:result.strMeasure4,
      ing5:result.strIngredient5, mrs5:result.strMeasure5,
      ing6:result.strIngredient6, mrs6:result.strMeasure6,
      ing7:result.strIngredient7, mrs7:result.strMeasure7,
      ing8:result.strIngredient8, mrs8:result.strMeasure8,
      ing9:result.strIngredient9, mrs9:result.strMeasure9,
      ing10:result.strIngredient10, mrs10:result.strMeasure10,
      ing11:result.strIngredient11, mrs11:result.strMeasure11,
      ing12:result.strIngredient12, mrs12:result.strMeasure12,
      ing13:result.strIngredient13, mrs13:result.strMeasure13,
      ing14:result.strIngredient14, mrs14:result.strMeasure14,
      ing15:result.strIngredient15, mrs15:result.strMeasure15,
      ing16:result.strIngredient16, mrs16:result.strMeasure16,
      ing17:result.strIngredient17, mrs17:result.strMeasure17,
      ing18:result.strIngredient18, mrs18:result.strMeasure18,
      ing19:result.strIngredient19, mrs19:result.strMeasure19,
      ing20:result.strIngredient20, mrs20:result.strMeasure20,
      source:result.strSource
     });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("recipe.ejs", {
      error: error.message,
    });
  }
});

app.get("/random-category", async (req, res) => {
  
  let category = [];

  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const result = response.data.meals;
    result.forEach((x) => {
      category.push(Object.values(x));
    });
    res.render("category.ejs", { category: category });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("category.ejs", {
      error: error.message,
    });
  }

  // const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
  // const result = response.data.meals;
  // console.log(result);
  // res.render("index.ejs");

});

app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
  });
  