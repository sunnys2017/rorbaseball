class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.integer :year
      t.string :league_name
      t.string :division_name
      t.string :team_city
      t.string :team_name
      t.string :team_id

      t.timestamps
    end
    add_index :teams, :team_id
  end
end
