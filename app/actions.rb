# Homepage (Root path)
get '/' do
  erb :index
end

get '/weathers' do
  Weather.all.to_json
end
