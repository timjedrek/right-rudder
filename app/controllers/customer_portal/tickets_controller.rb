class CustomerPortal::TicketsController < ApplicationController
  before_action :authenticate_user!

  def index
    @accounts = Account.all.includes(:tickets)
  end
end
