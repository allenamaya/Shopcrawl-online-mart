class SearchesController < ApplicationController
  def new
    @search = current_client.searches.new
  end

  def create
    @search = current_client.searches.new(search_params)
    if @search.save
      redirect_to @search
    else
      render :new
    end
  end

  def show
    @search = Search.find(params[:id])
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end

