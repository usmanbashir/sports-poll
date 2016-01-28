class Poll
  include Mongoid::Document
  include Mongoid::Timestamps

  # Relations
  belongs_to :event
  has_many :votes, dependent: :restrict


  # Default Scopes

  default_scope -> { order(created_at: :asc) }


  # JSON Fields
  def as_json(options={})
    {
      id: id, votes_total: votes_total,
      away_team: away_team, draw: draw,
      home_team: home_team, created_at: created_at,
      event: {
        id: event.id,
        home_team: event.home_name,
        home_team_logo: event.home_team_logo,
        away_team: event.away_name,
        away_team_logo: event.away_team_logo,
        group: event.group
      }
    }
  end


  # Methods
  
  def votes_total
    votes.count
  end

  def away_team
    votes.where(answer: "AWAY_TEAM").count
  end

  def draw
    votes.where(answer: "DRAW").count
  end

  def home_team
    votes.where(answer: "HOME_TEAM").count
  end
end
