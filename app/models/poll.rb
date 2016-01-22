class Poll
  include Mongoid::Document
  include Mongoid::Timestamps

  # Relations
  belongs_to :event
  has_many :votes,        dependent: :restrict
end
