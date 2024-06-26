from flask import Flask,render_template,redirect,request,session,jsonify
from api import api_all, api_country, api_region,api_detail, api_border
import collections
import random


app = Flask(__name__)
app.secret_key = 'anywhereee'

reg = ["Africa","America","Asia","Europe","Oceania"]

@app.route("/")  
def index():
    name = request.args.get("name")
    region = request.args.get("region")
    dicte = []
    if name:
        dicte = api_country(name)
    elif region and region in reg:
        dicte = api_region(region)
    else:
        pays = api_all()
        if pays:
            while len(dicte) < 12:
                x = random.randint(0,100)
                if pays[x] not in dicte:
                    dicte.append(pays[x])
            
    return render_template("index.html",countries = dicte)

@app.route("/country/<country>")
def details(country):
    lan = []
    countries = []
    details = api_detail(country)
    nativename = 'Unknown'
    curr = ''
     
    if details:
        h = details[0]
        language = list(h['languages'])
        if language[0] in h['name']['nativeName']:
            nativename = h['name']['nativeName'][language[0]]['common']
    
        for i in range(len(language)):
            lan.append(h['languages'][language[i]])    
    
        currency = list(h['currencies'])
        curr = h['currencies'][currency[0]]['name']

        if 'borders' in h:
            for border in h['borders']:
                x = api_border(border)
            
                if x:    
                    country_name = x[0]['name']['common']
                    countries.append(country_name)
        

    return render_template('detail.html', details =countries  , countries = details, nativename= nativename,lan=lan,currency = curr)


if __name__ == '__main__':
    app.debug = True
    app.run(host = '0.0.0.0', port = 612)
