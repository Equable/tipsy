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
    spirit {Spirit.first}
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

  factory :location do
    location { Faker::Address.street_address }
  end

  factory :review do
    location { FactoryBot.create(:location)}
  end
end
