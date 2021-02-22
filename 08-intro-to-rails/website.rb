require 'sinatra'

get "/hello" do
    "Hello World"
end

post "/hello" do 
    "Goodbye World"
end