# Title
Introduction of a database to Gov Data Dashboard

## Problem
Currently, whenever a user loads the dashboard, an API call will be made to govdata API. If the API is down or has degraded performance, so will the dashboard.
Moreover, fetching the data systematically presents other issues:
- higher possibility of hitting quota limits,
- limited scalability,
- no time to react if the API changes its data model

## Proposed solution
I would suggest a two parts solution:

First, I'd like to add a model layer to the current code, so that we have clear definitions of entities. i.e. what is an organization for the scope of this dashboard rather than just using what the API sends.

Then, I'd like to add a database to this application so that we can store these entities, or just the results of the calculations. The dashboard will now use this database to fetch the data to display. This database will be periodically updated by an asynchronous job, limiting the amount of calls to the API.

## Trade-offs & risks
There are a few trade-offs & risks to this approach:
- Adding another component, the database, increases the complexity of our deployment and maintenance
- The refresh rate of this database should be sufficient
- With time, if a lot of data is added to the API, refreshing the database might be a heavy task
- We need to make sure that the database doesn't become a bottleneck, i.e. that it can be read efficiently and eventually introduce caching.