class HomeProductsController < ApplicationController
    def index 
        render json: HomeProduct.all, status: :ok
    end
end
