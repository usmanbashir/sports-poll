class Vote
  include Mongoid::Document
  include Mongoid::Timestamps

  # Relations
  belongs_to :poll

  # Fields
  field :answer,            type: String

  # Validations
  validates :answer, presence: true, inclusion: { in: %w{AWAY_TEAM DRAW HOME_TEAM},
                                                  message: "%{value} is not a valid answer" }
end
