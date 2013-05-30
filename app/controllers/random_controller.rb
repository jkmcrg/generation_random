class RandomController < ApplicationController
  def index
    @numbers = RandomNum.order('created_at DESC').all
  end

  def add_number
    @number = RandomNum.create(number: params[:number][:number])
    @numbers = RandomNum.order('created_at DESC').all
  end
end
