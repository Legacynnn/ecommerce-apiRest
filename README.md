# ecommerce-apiRest
Rest API for ecommerce with 4 diferents cruds.

Functions: 

1 - Create Users <br/>
2 - Login in user using id (Future JWT) <br/>
3 - Products full model <br/>
4 - Product-based cart system (Future i go add payment with stripe) <br/>

To run de project:

Do NPM INSTALL
after NPM START

and open your browser in localhost:3333 (If you want trade the port go to Index.js and trande in line 13.)


To run the code you need to create 2 files:

1 - .env and put in first line one local variable "MONGO_URI" after this pass your mongo URL to connect in your mongodb <br/>
2 - One path in source of code with the name "Config" and inside this path create one jwt.json, in this json file you need to put "secret": "any pass to jwt you want"(I recommend use one md5 hash)
