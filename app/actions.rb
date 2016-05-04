# Homepage (Root path)
get '/' do
  erb :index
end

get '/weathers' do
  Weather.all.to_json
end

post '/cities' do
  results = {result: false}
  name = params[:name]
  current_temp = params[:current_temp]
  tomorrow_temp = params[:tomorrow_temp]
  city = City.new name: name, current_temp: current_temp, tomorrow_temp: tomorrow_temp
  p city
  if city.save
    results[:result] = true
    results[:city] = {id: city.id}
  end
  results.to_json
end

#show city details
get '/cities/:id' do
  city = City.find params[:id]
  city.to_json
end
