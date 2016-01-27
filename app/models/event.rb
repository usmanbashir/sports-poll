class Event
  include Mongoid::Document
  include Mongoid::Timestamps

  # Relations
  has_one :poll,        dependent: :restrict
  
  # Fields
  field :objectId,      type: String

  field :away_name,     type: String          # Away Team Name
  field :home_name,     type: String          # Home Team Name
  field :group,         type: String          # Group Name
  field :name,          type: String          # Match Name

  field :sport,         type: String,
                        default: "FOOTBALL"   # Sport Name, For future needs perhaps?
  field :state,         type: String          # Current Match State

  field :start,         type: DateTime        # Match Start Date


  # Index
  index({ objectId: 1 }, { unique: true })


  # Validations
  validates :objectId, uniqueness: true

  validates :objectId, :away_name, :home_name, 
            :group, :state, :start, presence: true


  # Methods

  def home_team_logo
    "assets/images/events/#{home_name.downcase.tr(" ", "_")}.png"
  end
  def away_team_logo
    "assets/images/events/#{away_name.downcase.tr(" ", "_")}.png"
  end
end
