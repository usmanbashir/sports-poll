class Poll
  include Mongoid::Document
  include Mongoid::Timestamps

  # Relations
  belongs_to :event
  has_many :votes, dependent: :restrict


  # Default Scopes

  default_scope -> { order(created_at: :desc) }


  # JSON Fields
  def as_json(options={})
    super(methods: [:votes_total, :away_team, :draw, :home_team])
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
