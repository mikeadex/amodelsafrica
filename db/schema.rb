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

ActiveRecord::Schema.define(version: 2019_08_09_155909) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amodels", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.string "age"
    t.text "desc"
    t.string "nationality"
    t.string "city"
    t.string "category"
    t.string "height"
    t.string "burst"
    t.string "waist"
    t.string "hip"
    t.string "eye"
    t.string "shoe"
    t.string "fb"
    t.string "tw"
    t.string "ig"
    t.string "email"
    t.string "tel"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "file"
    t.string "avatar"
  end

  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.text "shortdesc"
    t.text "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.text "description"
    t.string "pin"
    t.string "linkedin"
    t.string "ig"
    t.string "fb"
    t.string "tw"
    t.string "youtube"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
