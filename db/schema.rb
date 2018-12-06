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

ActiveRecord::Schema.define(version: 2018_12_01_014532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "players", force: :cascade do |t|
    t.string "surname"
    t.string "given_name"
    t.string "position"
    t.integer "games"
    t.integer "games_started"
    t.integer "at_bats"
    t.integer "runs"
    t.integer "hits"
    t.integer "doubles"
    t.integer "triples"
    t.integer "home_runs"
    t.integer "rbi"
    t.integer "steals"
    t.integer "caught_stealing"
    t.integer "sacrifice_hits"
    t.integer "sacrifice_flies"
    t.integer "errors"
    t.integer "pb"
    t.integer "walks"
    t.integer "struck_out"
    t.integer "hit_by_pitch"
    t.integer "throws"
    t.integer "wins"
    t.integer "losses"
    t.integer "saves"
    t.integer "complete_games"
    t.integer "shut_outs"
    t.integer "era"
    t.integer "innings"
    t.integer "earned_runs"
    t.integer "hit_batter"
    t.integer "wild_pitches"
    t.integer "balk"
    t.integer "walked_batter"
    t.integer "struck_out_batter"
    t.string "player_id"
    t.string "team_id"
    t.integer "year"
    t.string "league_name"
    t.string "division_name"
    t.string "team_city"
    t.string "team_name"
    t.float "avg"
    t.float "ops"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_players_on_player_id"
  end

  create_table "teams", force: :cascade do |t|
    t.integer "year"
    t.string "league_name"
    t.string "division_name"
    t.string "team_city"
    t.string "team_name"
    t.string "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_teams_on_team_id"
  end

end
