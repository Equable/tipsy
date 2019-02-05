# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_05_163416) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bitter_parts", force: :cascade do |t|
    t.bigint "cocktail_id", null: false
    t.bigint "bitter_id", null: false
    t.integer "drops", limit: 2, null: false
    t.index ["bitter_id"], name: "index_bitter_parts_on_bitter_id"
    t.index ["cocktail_id"], name: "index_bitter_parts_on_cocktail_id"
  end

  create_table "bitters", force: :cascade do |t|
    t.string "name", null: false
    t.string "brand", null: false
    t.string "made_at"
  end

  create_table "cocktails", force: :cascade do |t|
    t.string "name", null: false
    t.text "image_url"
    t.text "directions"
  end

  create_table "general_ingredients", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "general_parts", force: :cascade do |t|
    t.bigint "cocktail_id"
    t.bigint "general_ingredient_id"
    t.float "amount", null: false
    t.string "unit", null: false
    t.index ["cocktail_id"], name: "index_general_parts_on_cocktail_id"
    t.index ["general_ingredient_id"], name: "index_general_parts_on_general_ingredient_id"
  end

  create_table "liquor_parts", force: :cascade do |t|
    t.bigint "cocktail_id", null: false
    t.bigint "liquor_id", null: false
    t.float "amount", null: false
    t.string "unit", default: "oz", null: false
    t.index ["cocktail_id"], name: "index_liquor_parts_on_cocktail_id"
    t.index ["liquor_id"], name: "index_liquor_parts_on_liquor_id"
  end

  create_table "liquors", force: :cascade do |t|
    t.string "name", null: false
    t.string "brand", null: false
    t.integer "proof", default: 0
    t.string "made_at"
    t.bigint "spirit_subtype_id"
    t.index ["spirit_subtype_id"], name: "index_liquors_on_spirit_subtype_id"
  end

  create_table "spirit_subtypes", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "spirit_id", null: false
    t.index ["spirit_id"], name: "index_spirit_subtypes_on_spirit_id"
  end

  create_table "spirits", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
