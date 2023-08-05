class SessionsController < ApplicationController

    def create 
        customer = Customer.find_by(email: params[:email])

        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id 
            render json: customer, status: :created 
        else  
            render json: {error: "Wrong email or password"}, status: :unauthorized
        end
    end

    def destroy 
        session.delete :customer_id
        head :no_content
    end
end
