class ApplicationController < ActionController::Base
    helper_method :current_client

    def current_client
        if session[:client_id]
            Client.find(session[:client_id])
        end
    end
end
