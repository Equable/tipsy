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

end
