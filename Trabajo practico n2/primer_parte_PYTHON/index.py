import json
from types import SimpleNamespace
import urllib.request

with urllib.request.urlopen('https://restcountries.com/v2/callingcode/1') as response:
   jsonFile = response.read()

result = json.loads(jsonFile, object_hook=lambda d: SimpleNamespace(**d))
# print(x.name, x.hometown.name, x.hometown.id)

print(result[0])