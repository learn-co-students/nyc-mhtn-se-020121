Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # VERB "/URL", to: "CONTROLLER#ACTION"
    # Controllers handle all request-responses (/app/controllers)
    # Actions are instance methods
  get "/hello", to: "application#hello_world"
end
