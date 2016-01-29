# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require "json"

seed_file = File.read("db/events_seed.json")

seed_data = JSON.parse(seed_file)

seed_data["results"].each do |data|
  event = Event.create({
    away_name:    data["awayName"],
    created_at:   data["createdAt"],
    group:        data["group"],
    home_name:    data["homeName"],
    _id:          data["id"],
    name:         data["name"],
    objectId:     data["objectId"],
    sport:        data["sport"],
    start:        data["start"],
    state:        data["state"],
    updated_at:   data["updatedAt"]
  })

  event.create_poll
end
