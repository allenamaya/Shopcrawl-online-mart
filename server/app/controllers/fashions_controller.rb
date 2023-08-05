class FashionsController < ApplicationController
    def index 
        render json: Fashion.all, status: :ok
    end
end
