from flask import Flask,render_template,redirect,request
from api import api_all, api_country, api_region,api_detail, api_border
import collections
import random


app = Flask(__name__)

reg = ["Africa","America","Asia","Europe","Oceania"]


@app.route("/")  
def index():
    name = request.args.get("name")
    region = request.args.get("region")
    if name:
        dicte = api_country(name)
    elif region and region in reg:
        dicte = api_region(region)
    else:
        pays = api_all()
        dicte = []
        while len(dicte) < 12:
            x = random.randint(0,100)
            if pays[x] not in dicte:
                dicte.append(pays[x])
        

    return render_template("index.html",countries = dicte)

@app.route("/country/<country>")
def details(country):
    countries = []
    details = api_detail(country)

    h = details[0]

    language = list(h['languages'])
    nativename = h['name']['nativeName'][language[0]]['common']

    lan = []
    for i in range(len(language)):
        lan.append(h['languages'][language[i]])    
    currency = list(h['currencies'])
    curr = h['currencies'][currency[0]]['name']

    for border in h['borders']:
        x = api_border(border)
    
        country_name = x[0]['name']['common']
        countries.append(country_name)
    

    return render_template('detail.html', details =countries  , countries = details, nativename= nativename,lan=lan,currency = curr)

    


if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 612)