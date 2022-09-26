from django.shortcuts import render

# Create your views here.
import requests
from bs4 import BeautifulSoup

r= requests.get("https://www.youm7.com/")
soup=BeautifulSoup(r.content,'html5lib')

headings=   soup.find_all()
headings =headings[0:-13]

news=[]

for th in headings:
    news.append(th.text)


def index(request):
    return render(request,'news/index.html',{'news':news})