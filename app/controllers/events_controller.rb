class EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def show
    render json: Event.find_by(objectId: params[:objectId])
  end
end
