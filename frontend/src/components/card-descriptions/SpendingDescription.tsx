import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  text-indent: 12px;
  font-size: 0.9rem;
`

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ px: 1.15, pt: 2 }}>
      <StyledTypography>
        I have built three iterations of a finances/budgeting/spending tracker,
        and this is the second iteration and the last one built with Django. I
        built the newest version with React and Redux; however, this one added
        many improvements over my first attempt with Django about a year
        earlier.
      </StyledTypography>
      <br />
      <StyledTypography>
        I have built three iterations of a finances/budgeting/spending tracker,
        and this is the second iteration and the last one built with Django. I
        built the newest version with React and Redux; however, this one added
        many improvements over my first attempt with Django about a year
        earlier. One example was the various improvements I made to the purchase
        filters. This application allows users to customize the date range from
        which purchases are displayed and displays more detailed breakdowns of
        the categories of those purchases in the timeframe. Charts that were
        also included in a previous version of the application now have the
        ability to be customized with a few preset options that change the date
        range and specificity of the data included.
      </StyledTypography>
      <br />
      <StyledTypography>
        Another improvement was the addition of user accounts. Multiple accounts
        can be created in this application, whereas before I had designed the
        application for use by only myself.
      </StyledTypography>
      <br />
      <StyledTypography>
        Users can upload images to the application, of their purchase receipts,
        and these can viewed later. The uploaded images are stored in an Amazon
        Web Services S3 bucket, which enables low-cost, highly reliable storage.
        If/when a user deletes a purchase, the deletion propagates to S3 and the
        image gets deleted also.
      </StyledTypography>
      <br />
      <StyledTypography>
        One benefit of Django is that it provides an easy-to-use administrator
        portal, which is extremely useful for viewing and managing data. It also
        takes care of many other details through its middleware, such as
        authentication. This feature of the framework made development and
        management very simple.
      </StyledTypography>
      <br />
      <StyledTypography>
        To style this project, I used plain CSS as well as Bootstrap. I also
        utilized quite a bit of JQuery and vanilla JavaScript to implement the
        event handlers and some other details. While these technologies are
        scarcely used now, I am glad that I learned them. For one, they are now
        in my toolkit, and two, they taught me many things as I used them.
      </StyledTypography>
      <br />
    </Container>
  )
}

export default Description
