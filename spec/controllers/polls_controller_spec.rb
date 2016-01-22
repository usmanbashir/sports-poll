require 'rails_helper'

RSpec.describe PollsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #vote" do
    it "returns http success" do
      get :vote
      expect(response).to have_http_status(:success)
    end
  end

end
