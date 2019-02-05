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
  { name: "Generic", spirit_id: 4 },
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
  { name: "Green Chartreuse", spirit_id: 16 }
]

spirit_subtypes.each do |spirit_subtype|
  SpiritSubtype.create(spirit_subtype)
end

liquors = [
  { name: "Beefeater", brand: "Beefeater", proof: "94", made_at: "London, England", spirit_subtype_id: 38 }, 
  { name: "Hendricks Gin", brand: "Hendricks", proof: "88", made_at: "Scotland", spirit_subtype_id: 43 }, 
  { name: "Gin", brand: "Generic", proof: "88", made_at: "", spirit_subtype_id: 44 }, 
  { name: "Antica", brand: "Carpano", proof: "33", made_at: "Italy", spirit_subtype_id: 91 }, 
  { name: "Dry Vermouth", brand: "Martini & Rossi", proof: "88", made_at: "Italy", spirit_subtype_id: 92 }, 
  { name: "Campari", brand: "Campari", proof: "48", made_at: "Italy", spirit_subtype_id: 95 }, 
  { name: "Green Chartreuse", brand: "Chartreuse", proof: "110", made_at: "Italy", spirit_subtype_id: 99 } 
]

liquors.each do |liquor|
  Liquor.create(liquor)
end

bitters=[
  { name: "Orange Bitters", brand: "Fee Brothers", made_at: "Rochester, NY" },
  { name: "Orange", brand: "Angostura", made_at: "" }
]

bitters.each do |bitter|
  Bitter.create(bitter)
end