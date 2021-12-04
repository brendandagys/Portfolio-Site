import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ textAlign: 'justify' }}>
      <Typography>
        I am very conscious about being wise with my money, and wanted a tool
        that could track my financial growth in ways that I desired and that no
        other existing application could.
      </Typography>
      <br />
      <Typography>
        It was important for me to be able to track spending as well as my
        investment portfolios, and so I knew that the application would have to
        serve multiple functions.
      </Typography>
      <br />
      <Typography>
        The first thing I built was a comprehensive form that users can use to
        submit purchases. Users can assign customizable categories to the
        purchase for downstream analysis, as well as indicate the price paid,
        specify the payment method, and even upload an image of their receipt
        that is stored in Amazon S3.
      </Typography>
      <br />
      <Typography>
        The next page/feature that I built allows users to view their purchases
        by setting filters to specify what they want to analyze. The page will
        aggregate total cost across all relevant purchases and will display
        charts, for example to break down the categories in which they are
        spending money.
      </Typography>
      <br />
      <Typography>
        The next page I created allows users to input their investment portfolio
        and bank account values, if they so desire, so that a progress line
        chart can be updated and the total worth can be calculated and compared
        over time. This page required complex database interaction that was fun
        to code. Down the road, I may implement a caching solution to speed
        things up even more.
      </Typography>
      <br />
      <Typography>
        I created some additional pages as well. One contains a ‘mood tracker,’
        which is essentially a calendar widget that a user can interact with and
        rate their mood on a daily basis. The moods are on a color gradient, so
        over time a trend can be visualized to identify and possibly account for
        patterns over weeks and months.
      </Typography>
      <br />
      <Typography>
        Contemporaneous with my building of this application, I was creating
        simple vanilla JavaScript apps. Two that I included are a calculator and
        a functioning clock, which can be found on the ‘Widgets’ page.
      </Typography>
      <br />
      <Typography>
        Finally, there exists a settings page for users to customize their
        experience and options for the other pages, such as their
        investment/bank account, preferences, and purchase categories.
      </Typography>
      <br />
      <Typography>
        Even though I most often use MaterialUI these days as a styling engine,
        I accomplished most of the styling for the app with Bootstrap, which I
        am also quite proficient with at this point. I implemented authorization
        using Passport.js and OAuth2, so that users can log in with their Google
        account immediately.
      </Typography>
      <br />
      <Typography>
        The application interfaced with a MongoDB cloud database, and was
        designed with the help of Mongoose.
      </Typography>
    </Container>
  )
}

export default Description
