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

ActiveRecord::Schema.define(version: 20170906231027) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "email"
    t.integer  "company_id"
    t.string   "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "finances", force: :cascade do |t|
    t.integer  "company_id"
    t.integer  "year"
    t.integer  "liabilities"
    t.integer  "valuation"
    t.integer  "assets"
    t.integer  "gross_income"
    t.integer  "expenses"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["company_id"], name: "index_finances_on_company_id", using: :btree
  end

  create_table "firms", force: :cascade do |t|
    t.string   "status",             null: false
    t.text     "info"
    t.integer  "liabilities"
    t.integer  "valuation"
    t.integer  "outstanding_shares"
    t.integer  "assets"
    t.integer  "gross_income"
    t.integer  "expenses"
    t.string   "name",               null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

end
