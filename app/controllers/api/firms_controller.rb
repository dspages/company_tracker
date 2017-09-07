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

  def assign_finances
    @finances = params[:finances]
    return if @finances.nil?
    @finances.each do |finance|
      @finance = Finance.new(finance)
      @finance.company_id = @firm.id
      @finance.save
    end
  end

  def assign_contacts
    @contacts = params[:contacts]
    return if @contacts.nil?
    @contacts.each do |contact|
      @contact = Contact.new(contact)
      @contact.company_id = @firm.id
      @contact.save
    end
  end

  def create
    @firm = Firm.new(firm_params)
    if @firm.save
      assign_contacts
      assign_finances
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
