class SessionsController < ApplicationController
    def new
        @client = Client.new
    end
def create
    @client = Client.find_by(email: client _params[:email])

    if @client && @client.is_password?(client _params[:password])
        session[:client_id] = @client.id
        reirect_to posts _path
    else
        flash.now[notice] = "Invalid email or password"
        render :new
    end
end

private
def client _params
    params.require(:client).permit(:email, :password)
end



end
