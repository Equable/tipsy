users = [
  { email: "admin@gmail.com", password: "adminpassword", admin: true, username:"admin" },
  { email: "user@gmail.com", password: "userpassword", admin: false, username:"user" }
]

users.each do |user|
  User.create!(user)
end

spirits = [
  { name: "Beer" },
  { name: "Sake" },
  { name: "Brandy" },
  { name: "Gin" },
  { name: "Rum" },
  { name: "Vodka" },
  { name: "Whiskey" },
  { name: "White Wine" },
  { name: "Red Wine" },
  { name: "Fortified Wine" },
  { name: "Absinthe" },
  { name: "Sparkling Wine" },
  { name: "Tequila" },
  { name: "Mezcal" },
  { name: "Vermouth" },
  { name: "Liquer" }
]

spirits.each do |spirit| 
  Spirit.create(spirit)
end

spirit_subtypes = [
  { name: "Belgian Pale Ale", spirit_id: 1 },
  { name: "Belgian Tripel Ale", spirit_id: 1 },
  { name: "Belgian Dubbel Ale", spirit_id: 1 },
  { name: "Berliner Weisse", spirit_id: 1 },
  { name: "Barley Wine", spirit_id: 1 },
  { name: "Brown Ale", spirit_id: 1 },
  { name: "India Pale Ale", spirit_id: 1 },
  { name: "Pale Ale", spirit_id: 1 },
  { name: "Golden Ale", spirit_id: 1 },
  { name: "Scotch Ale", spirit_id: 1 },
  { name: "Burton Ale", spirit_id: 1 },
  { name: "Porter", spirit_id: 1 },
  { name: "Stout", spirit_id: 1 },
  { name: "Lager", spirit_id: 1 },
  { name: "Junmai", spirit_id: 2 },
  { name: "Honjozo", spirit_id: 2 },
  { name: "Ginjo", spirit_id: 2 },
  { name: "Daiginjo", spirit_id: 2 },
  { name: "Futsushu", spirit_id: 2 },
  { name: "Shiboritate", spirit_id: 2 },
  { name: "Nama-zake", spirit_id: 2 },
  { name: "Nigori", spirit_id: 2 },
  { name: "Jizake", spirit_id: 2 },
  { name: "Cognac", spirit_id: 3 },
  { name: "Armagnac", spirit_id: 3 },
  { name: "Spanish", spirit_id: 3 },
  { name: "Aguardiente", spirit_id: 3 },
  { name: "Cachaca", spirit_id: 3 },
  { name: "Grappa", spirit_id: 3 },
  { name: "Marc", spirit_id: 3 },
  { name: "Metaxa", spirit_id: 3 },
  { name: "Pisco", spirit_id: 3 },
  { name: "U.S", spirit_id: 3 },
  { name: "Weinbrand", spirit_id: 3 },
  { name: "Fruit", spirit_id: 3 },
  { name: "Old Tom", spirit_id: 4 },
  { name: "Plymouth", spirit_id: 4 },
  { name: "London Dry", spirit_id: 4 },
  { name: "U.S Dry", spirit_id: 4 },
  { name: "Holland", spirit_id: 4 },
  { name: "Genever", spirit_id: 4 },
  { name: "New Western Dry", spirit_id: 4 },
  { name: "Light", spirit_id: 5 },
  { name: "Gold", spirit_id: 5 },
  { name: "Dark", spirit_id: 5 },
  { name: "Aged", spirit_id: 5 },
  { name: "Spiced", spirit_id: 5 },
  { name: "Overproof", spirit_id: 5 },
  { name: "Flavored", spirit_id: 6 },
  { name: "Non-Flavored", spirit_id: 6 },
  { name: "Irish", spirit_id: 7 },
  { name: "Scotch", spirit_id: 7 },
  { name: "Bourbon", spirit_id: 7 },
  { name: "Rye", spirit_id: 7 },
  { name: "Tenessee", spirit_id: 7 },
  { name: "Canadian", spirit_id: 7 },
  { name: "Japanese", spirit_id: 7 },
  { name: "Riesling", spirit_id: 8 },
  { name: "Pinot Gris", spirit_id: 8 },
  { name: "Sauvignon Blanc", spirit_id: 8 },
  { name: "Chardonnay", spirit_id: 8 },
  { name: "Pinot Noir", spirit_id: 9 },
  { name: "Zinfandel", spirit_id: 9 },
  { name: "Syrah", spirit_id: 9 },
  { name: "Cabernet", spirit_id: 9 },
  { name: "Port", spirit_id: 10 },
  { name: "Sherry", spirit_id: 10 },
  { name: "Blanche", spirit_id: 11 },
  { name: "Verte", spirit_id: 11 },
  { name: "Absenta", spirit_id: 11 },
  { name: "Hausgemacht", spirit_id: 11 },
  { name: "Boehmian-style", spirit_id: 11 },
  { name: "Champagne", spirit_id: 12 },
  { name: "Prosecco", spirit_id: 12 },
  { name: "Cava", spirit_id: 12 },
  { name: "Cremant", spirit_id: 12 },
  { name: "Rose", spirit_id: 12 },
  { name: "Sekt", spirit_id: 12 },
  { name: "Blanco (White)", spirit_id: 13 },
  { name: "Plata (Silver)", spirit_id: 13 },
  { name: "Joven Abocado (Gold)", spirit_id: 13 },
  { name: "Reposado", spirit_id: 13 },
  { name: "Anejo", spirit_id: 13 },
  { name: "Pulque", spirit_id: 13 },
  { name: "Espadin", spirit_id: 14 },
  { name: "Tobala", spirit_id: 14 },
  { name: "Tobaziche", spirit_id: 14 },
  { name: "Tepeztate", spirit_id: 14 },
  { name: "Arroqueno", spirit_id: 14 },
  { name: "Sweet", spirit_id: 15 },
  { name: "Dry", spirit_id: 15 },
  { name: "Blanc", spirit_id: 15 },
  { name: "Bianco", spirit_id: 15 },
  { name: "Campari", spirit_id: 16 },
  { name: "Blue Caracoa", spirit_id: 16 },
  { name: "Aperol", spirit_id: 16 },
  { name: "Chartreuse", spirit_id: 16 },
  { name: "Green Chartreuse", spirit_id: 16 },
  { name: "Generic", spirit_id: 1},
  { name: "Generic", spirit_id: 2},
  { name: "Generic", spirit_id: 3},
  { name: "Generic", spirit_id: 4 },
  { name: "Generic", spirit_id: 5},
  { name: "Generic", spirit_id: 6},
  { name: "Generic", spirit_id: 7},
  { name: "Generic", spirit_id: 8},
  { name: "Generic", spirit_id: 9},
  { name: "Generic", spirit_id: 10},
  { name: "Generic", spirit_id: 11},
  { name: "Generic", spirit_id: 12},
  { name: "Generic", spirit_id: 13},
  { name: "Generic", spirit_id: 14},
  { name: "Generic", spirit_id: 15},
  { name: "Generic", spirit_id: 16}
]

spirit_subtypes.each do |spirit_subtype|
  SpiritSubtype.create(spirit_subtype)
end

liquors = [
  { name: "Beefeater", brand: "Beefeater", proof: "94", made_at: "London, England", spirit_subtype_id: 39, spirit_id: 4 }, 
  { name: "Hendricks Gin", brand: "Hendricks", proof: "88", made_at: "Scotland", spirit_subtype_id: 42, spirit_id: 4 }, 
  { name: "Gin", brand: "Any", proof: "88", made_at: "", spirit_subtype_id: 103, spirit_id: 4 }, 
  { name: "Antica", brand: "Carpano", proof: "33", made_at: "Italy", spirit_subtype_id: 91, spirit_id: 15 }, 
  { name: "Dry Vermouth", brand: "Martini & Rossi", proof: "88", made_at: "Italy", spirit_subtype_id: 91, spirit_id: 15 }, 
  { name: "Campari", brand: "Campari", proof: "48", made_at: "Italy", spirit_subtype_id: 94, spirit_id: 16}, 
  { name: "Green Chartreuse", brand: "Chartreuse", proof: "110", made_at: "France", spirit_subtype_id: 99, spirit_id: 16 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 1, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 2, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 3, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 4, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 5, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 6, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 7, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 8, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 9, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 10, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 11, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 12, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 13, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 14, spirit_id: 1 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 15, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 16, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 17, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 18, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 19, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 20, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 21, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 22, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 23, spirit_id: 2 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 24, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 25, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 26, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 27, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 28, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 29, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 30, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 31, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 32, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 33, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 34, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 35, spirit_id: 3 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 36, spirit_id: 4 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 37, spirit_id: 4 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 38, spirit_id: 4 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 39, spirit_id: 4 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 40, spirit_id: 4 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 41, spirit_id: 4 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 42, spirit_id: 4 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 43, spirit_id: 5 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 44, spirit_id: 5 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 45, spirit_id: 5 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 46, spirit_id: 5 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 47, spirit_id: 5 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 48, spirit_id: 5 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 49, spirit_id: 6 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 50, spirit_id: 6 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 51, spirit_id: 7 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 52, spirit_id: 7 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 53, spirit_id: 7 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 54, spirit_id: 7 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 55, spirit_id: 7 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 56, spirit_id: 7 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 57, spirit_id: 7 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 58, spirit_id: 8 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 59, spirit_id: 8 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 60, spirit_id: 8 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 61, spirit_id: 8 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 62, spirit_id: 9 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 63, spirit_id: 9 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 64, spirit_id: 9 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 65, spirit_id: 9 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 66, spirit_id: 10 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 67, spirit_id: 10 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 68, spirit_id: 11 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 69, spirit_id: 11 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 70, spirit_id: 11 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 71, spirit_id: 11 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 72, spirit_id: 11 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 73, spirit_id: 12 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 74, spirit_id: 12 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 75, spirit_id: 12 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 76, spirit_id: 12 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 77, spirit_id: 12 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 78, spirit_id: 12 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 79, spirit_id: 13 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 80, spirit_id: 13 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 81, spirit_id: 13 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 82, spirit_id: 13 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 83, spirit_id: 13 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 84, spirit_id: 13 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 85, spirit_id: 14 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 86, spirit_id: 14 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 87, spirit_id: 14 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 88, spirit_id: 14 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 89, spirit_id: 14 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 90, spirit_id: 15 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 91, spirit_id: 15 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 92, spirit_id: 15 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 93, spirit_id: 15 },
  { name: "Generic", brand: "Any", spirit_subtype_id: 94, spirit_id: 16 }
]

liquors.each do |liquor|
  Liquor.create(liquor)
end

cocktails = [
  {name: "Verdant Lady", image_url: "https://bojongourmet.com/wp-content/uploads/2016/03/Verdant-Lady-Chartreuse-Gin-Mint-Cocktail-6.jpg", directions: "In a cocktail shaker filled halfway with ice, combine the gin, lime juice, simple syrup, chartreuse, and mint leaves. Shake vigorously for 30 seconds, then strain into a coupe. Garnish with a mint sprig if you like, and serve.", user_id: 2},
  {name: "Negroni", image_url:"https://www.thespruceeats.com/thmb/AHWO_swapE-OzY_e3-Ufk2YAR2s=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/negroni-cocktail-recipe-759327-6-5b3f965b46e0fb00364f8d61.jpg", directions: "Stir the gin, campari and vermouth with ice. Strain into an ie-filled highball glass.", user_id: 1}
]

cocktails.each do |cocktail|
  Cocktail.create(cocktail)
end

liquor_parts=[
  {cocktail_id: 1, liquor_id: 1, amount: 1.5, unit: "oz"},
  {cocktail_id: 1, liquor_id: 7, amount: 1.5, unit: "oz"},
  {cocktail_id: 2, liquor_id: 2, amount: 1.5, unit: "oz"},
  {cocktail_id: 2, liquor_id: 4, amount: 1.5, unit: "oz"},
  {cocktail_id: 2, liquor_id: 6, amount: 1.5, unit: "oz"}
]

liquor_parts.each do |liquor_part|
  LiquorPart.create(liquor_part)
end

other_ingredients=[
  {name: "lime", amount: 1, unit: "squeezed", cocktail_id: 1},
  {name: "mint", amount: 4, unit: "leaves", cocktail_id: 1},
  {name: "simple syrup", amount: 1, unit: "splash", cocktail_id: 2},
  {name: "orange bitters", amount: 4, unit: "drops", cocktail_id: 2},
]

other_ingredients.each do |other_ingredient|
  OtherIngredient.create(other_ingredient)
end

reviews=[
  {cocktail_id: 1, user_id: 1, body: "was pretty damn good", rating: 4},
  {cocktail_id: 1, user_id: 2, body: "I liked it alot! Such good flavor!!!", rating: 5}
]

reviews.each do |review|
  CocktailReview.create(review)
end