class RandomController < ApplicationController
  def index
    @numbers = RandomNum.all
  end

  def add_number
  end
end
