class FinancesController < ApplicationController

  def create
    @finance = Finance.new(finance_params)
    if @finance.save
      render :show
    else
      render json: @finance.errors.full_messages, status: 422
    end
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def update
    @finance = Finance.find(params[:id])
    if @finance.update(finance_params)
      render :show
    else
      render json: @finance.errors.full_messages, status: 422
    end
  end

  def destroy
    @finance = Finance.find(params[:id])
    @finance.delete
    render :show
  end

  private

  def finance_params
    params.require(:finance).permit(:liabilities,
    :valuation, :assets, :gross_income,
    :expenses, :year)
  end

end
