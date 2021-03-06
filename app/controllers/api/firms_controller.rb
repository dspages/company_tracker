class Api::FirmsController < ApplicationController
  
  def index
    @firms = Firm.all
  end

  def show
    @firm = Firm.find(params[:id])
  end

  def edit
    @firm = Firm.find(params[:id])
    render :show
  end

  def create
    @firm = Firm.new(firm_params)
    if @firm.save
      render :show
    else
      render json: @firm.errors.full_messages, status: 422
    end
  end

  def update
    @firm = Firm.find(params[:id])
    if @firm.update(firm_params)
      render :show
    else
      render json: @firm.errors.full_messages, status: 422
    end
  end

  def destroy
    @firm = Firm.find(params[:id])
    @firm.delete
    render :show
  end

  private

  def firm_params
    params.require(:firm).permit(:status, :info, :name)
  end

end
