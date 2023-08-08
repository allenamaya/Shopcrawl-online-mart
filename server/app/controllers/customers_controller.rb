class CustomersController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only:[:create]

    def index 
        render json: Customer.all, status: :ok
    end

    def show 
        customer = Customer.find(session[:customer_id])
        render json: customer, status: :ok
    end

    def create
        customer = Customer.create!(customer_params)
        session[:customer_id] = customer.id
        render json: customer, status: :created 
    end

    def my_history 
        customer = Customer.find(session[:customer_id])
        histories = customer.search_histories
        render json: histories.uniq, status: :ok
    end

    private 

    def customer_params 
        params.permit(:name, :email, :password, :password_confirmation)
    end

    def authorize 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :customer_id
    end
end
