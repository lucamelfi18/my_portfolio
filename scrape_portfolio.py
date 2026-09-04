import requests
from bs4 import BeautifulSoup
import re

url = "https://sites.google.com/andrew.cmu.edu/lucamelfi/home"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Find all links to subpages (usually inside navigation)
links = set()
for a in soup.find_all('a', href=True):
    href = a['href']
    if 'lucamelfi' in href and not href.startswith('#'):
        if href.startswith('/'):
            href = 'https://sites.google.com' + href
        links.add(href)

print("Found links:")
for l in links:
    print(l)

# Also extract text from the homepage
print("\n--- Homepage Text ---")
for p in soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'span']):
    text = p.get_text(strip=True)
    if text and len(text) > 10:
        print(text)

