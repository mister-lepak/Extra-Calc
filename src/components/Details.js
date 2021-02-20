import {
  Grid,
  Rating,
  Image,
  Header,
  Button,
  Segment,
} from "semantic-ui-react";

const Details = ({ data, input }) => {
  let items = [];

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  data &&
    data.map((e, index) => {
      if (e.housing_type === parseInt(input.housing_type)) {
        let specificItem = e;
        let totalInterest = 0;
        for (let i = 0; i < input.duration; i++) {
          if (i < e.promotion_duration) {
            totalInterest =
              totalInterest + (input.principal * e.promotion_rate) / 100;
          } else {
            totalInterest =
              totalInterest + (input.principal * e.normal_rate) / 100;
          }
        }
        totalInterest = totalInterest + (input.principal * 1) / 100;
        specificItem.totalInterest = totalInterest;
        items.push(specificItem);
      }
    });

  items.sort((left, right) => {
    return left.totalInterest - right.totalInterest;
  });

  const renderDetails = () => {
    return items.map((e, index) => {
      let rateType = "Floated";
      if (e.loan_type === 1) rateType = "Fixed";
      else rateType = "Floated";

      return (
        <Segment>
          <Grid padded>
            <Grid.Column mobile={4} computer={2}>
              <Image src={e.image} />
            </Grid.Column>
            <Grid.Column mobile={12} computer={4}>
              <Header as="h2">{e.bank_name}</Header>
              {e.review_rating}
              <Rating
                icon="star"
                defaultRating={e.review_rating}
                maxRating={5}
                disabled
              />{" "}
              | {e.review_nums} Reviews
            </Grid.Column>
            <Grid.Column mobile={8} computer={4}>
              <Header as="h4">
                1st Year Interest Rate: {e.promotion_rate}%
              </Header>
              <Header as="h4">Lock-in Period: {e.lock_in_period} Years</Header>
              <Header as="h4">Rate Type: {rateType}</Header>
            </Grid.Column>
            <Grid.Column mobile={8} computer={4}>
              <Header as="h1">S${numberWithCommas(e.totalInterest / 2)}</Header>
              Total Interest
              <Header as="h2">
                S$
                {numberWithCommas(
                  parseInt(
                    (parseInt(input.principal) + e.totalInterest / 2) /
                      (input.duration * 12)
                  )
                )}
              </Header>
              Monthly Repayment
            </Grid.Column>
            <Grid.Column mobile={16} computer={2}>
              <Button primary>Apply Now</Button>
            </Grid.Column>
          </Grid>
        </Segment>
      );
    });
  };

  return <>{renderDetails()}</>;
};

export default Details;
