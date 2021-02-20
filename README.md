# Housing Loan Calculator

## What is this and Why?

This project aims to provide users with more informed decision while researching for housing loans without having to talk to sales representatives.
Helping users to get a better sense of interest rates while doing their budget planning.

This tool was created in view of limitated on transparency of home loan calculator across various banks. Also, a feature that is not available in [99.co](https://www.99.co).
As the [demand for housing in Singapore has been increasing](https://www.bloomberg.com/opinion/articles/2021-01-13/singapore-housing-market-looks-affordable-but-a-bubble-won-t-last-long) in recent years, there is business case to have a quick interest comparison tool where user can get more insightful interest rates comparison across various banks.

This feature will create an opportunity for user to get first pass interest rates provided by banks without having to be hooked into sales representatives too early. Users can click 'Apply Now' to get more attractive rates from sales reps when they are ready. At the sametime, it can bring more user traffic into [99.co](https://www.99.co) and funnel more targeted prospective clients.
Also not to mention, more traffic means more likelihood of user engagement in using [99.co](https://www.99.co) -- organically building user branding as the almighty platform for property searching.

## Where to access this project?

Code Repo: https://github.com/mrlepak/Extra-Calc

Github Pages: https://mrlepak.github.io/xtra-gh-pages/

## How the tool works?

The project has the ability to calculate total interest rates and monthly repayment costs with minimum information below:

- Housing Type
- Principal value
- Duration

## Data Structure and Design

Due to time limitation, the design of the tool is made to be simplified. There are some future improvements feature that can be worked on in the future:

- API connection to established provider to get realtime interbank interest rate index
- Sorting by most popular or best review
- More input parameters to improve result's accuracy
- Testing

Data Structure of the model below:

- bank_name
- promotion_rate
- promotion_duration
- normal_rate
- lock_in_period
- housing_type
- loan_type
- image
- review_rating
- review_num
