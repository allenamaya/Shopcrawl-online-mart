class ClientsController < ApplicationController
  def new
    @client = Client.new
  end

def create
  @client = Client.new(client _params)
  if @client.save
    redirect_to posts_path
  else
    flash.now[:notice] = @client.errors.full_messages.to_sentence
    render :new
end

private
def client _params
  params.require(:client).permit(:email,password)
end
end
