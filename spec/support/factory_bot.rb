require 'factory_bot'

FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :spirit do
    name { Faker::Cat.breed }
  end

  factory :spirit_subtype do
    name { Faker::Beer.style }
    spirit { FactoryBot.create(:spirit) }
  end

  factory :liquor do
    name { Faker::Beer.name }
    brand { Faker::Company.name }
    spirit_subtype { FactoryBot.create(:spirit_subtype) }
  end

  factory :cocktail do
    name { Faker::Food.spice }
    image_url { 'https://www.saveur.com/sites/saveur.com/files/styles/1000_1x_/public/copper-king-6_2000x1500.jpg?itok=vMhh96oB&fc=50,50' }
    directions { Faker::Lorem.paragraphs }
  end

  factory :liquor_part do
    cocktail { FactoryBot.create(:cocktail) }
    liquor { FactoryBot.create(:liquor) }
    amount { "1" }
    unit { Faker::Food.metric_measurement }
  end

  factory :bitter do
    name { Faker::Beer.name }
    brand { Faker::Company.name }
  end

  factory :bitter_part do
    cocktail { FactoryBot.create(:cocktail) }
    bitter { FactoryBot.create(:bitter) }
    drops { 2 }
  end

  factory :general_ingredient do
    name { Faker::Food.spice }
  end

  factory :general_part do
    cocktail { FactoryBot.create(:cocktail) }
    general_ingredient { FactoryBot.create(:general_ingredient) }
    amount { 5 }
    unit { "leaves" }
  end
end
