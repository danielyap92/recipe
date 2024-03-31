# Simple Recipe
A simple recipe website powered by API.

API used: https://www.themealdb.com/api.php
Build by express, bootstrap.
Font: Kalam by google font.
Background: generate from https://www.transparenttextures.com/
Photo (404 and index): generate from Copilot Designer

## Instruction
 1. run index.js , make sure you installed all the npm package in this module
 2. By default server running on port: http://localhost:3000

## Feature
**Random Recipe**
Randomly show a meal recipe with the following info:
 - Meal name
 - Meal category
 - Meal origin country
 - Picture
 - Video
 - Ingredients and measure
 - Instruction
 - Source - open external link at new tab

**Recipe Category**
This category are dynamically generated based on response from API.
Click on the category to retrieve a list of meal from that particular category (backend get response from API).
Click on the meal to retrieve the recipe.

**Search**
Search the recipe by input the text.
If no relevant recipe was found, will generate an error respond page.

**Random photo**
This route was hidden, in case you insist to access, it can be access via method "get" at "/random-photo". 
This is because my connection sometime is slow when opening this API.
Powered by: https://foodish-api.com/

**About me**
Hi! I am Yap Weng Kiad from Malaysia, who created this simple website.
Email: wengkiadyap@gmail.com
