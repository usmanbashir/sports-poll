# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

seed_data = [
  {
    away_name: "Panthrakikos Komotini",
    created_at: "2015-12-18T12:30:39.228Z",
    group: "Greek Cup",
    home_name: "Chania FC",
    _id: 1002916450,
    name: "Chania FC - Panthrakikos Komotini",
    objectId: "1UaQjc7lIb",
    sport: "FOOTBALL",
    start: "2015-12-17T13:00Z",
    state: "STARTED",
    updated_at: "2015-12-18T12:30:39.228Z"
  },
  {
    away_name: "PAOK Thessaloniki",
    created_at: "2015-12-18T12:30:39.234Z",
    group: "Greek Cup",
    home_name: "Olympiakos Volos",
    _id: 1002916451,
    name: "Olympiakos Volos - PAOK Thessaloniki",
    objectId: "UPJ240T2Qj",
    sport: "FOOTBALL",
    start: "2015-12-17T13:00Z",
    state: "STARTED",
    updated_at: "2015-12-18T12:30:39.234Z"
  }
]

seed_data.each {|event| Event.create(event)}
