class Api::ContactsController < ApplicationController

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render :show
    else
      render json: @contact.errors.full_messages, status: 422
    end
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update(contact_params)
      render :show
    else
      render json: @contact.errors.full_messages, status: 422
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.delete
    render :show
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :company_id,
    :notes)
  end

end
