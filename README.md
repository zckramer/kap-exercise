The Rest API I picked is documented here (this is just one I found online):

https://financialmodelingprep.com/developer/docs/companies-key-stats-free-api

 

The particular endpoint will be the “Company Profile” one.

 

The requirements are pretty generic on purpose, to give you some room to work within..

 

1) As a user, I want to be able to provide the stock symbol of any company, so that I can retrieve and view all of that company’s provided profile information

     - Given that a company data for “changes” or “changesPercentage” are positive, when displayed the field should be green

- Given that a company data for “changes” or “changesPercentage” are negative, when displayed the field should be red

- Given that the price field has data, it should be displayed with the $ sign

- Given that the “website” field has a link, when I click on it, it should take me to the website