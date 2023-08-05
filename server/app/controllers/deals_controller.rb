class DealsController < ApplicationController
    def index 
        render json: Deal.all, status: :ok
    end
end
