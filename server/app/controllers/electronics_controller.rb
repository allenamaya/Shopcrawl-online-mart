class ElectronicsController < ApplicationController

    def index 
        render json: Electronic.all, status: :ok
    end
end
