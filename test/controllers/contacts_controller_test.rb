require_relative '../test_helper.rb'
require 'rails_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  describe "CONTACTS #create" do
      it "rerenders json" do
        contact :create, name: "John Doe"
        expect(response).to redirect_to(new_session_url)
      end
    end
end
