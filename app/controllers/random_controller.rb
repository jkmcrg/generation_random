class RandomController < ApplicationController
  def index
    @numbers = RandomNum.all
  end

  def add_number
    @number = RandomNum.create(params[:number])
    @numbers = RandomNum.all
  end
end
