class PollsController < ApplicationController
  UNPROCESSABLE_ENTITY = 433 # HTTP Error

  def index
    render json: Poll.all
  end

  def show
    render json: Poll.find(params[:id])
  end

  def vote
    poll = Poll.find(params[:id])

    new_vote = poll.votes.create!(answer: params[:answer])

    if new_vote
      render json: new_vote
    else
      render json: { errors: new_vote.erros.full_messages }, status: UNPROCESSABLE_ENTITY
    end
  end
end
