require 'factory_bot'

FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
