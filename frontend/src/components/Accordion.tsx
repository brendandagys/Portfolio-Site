import { useState } from 'react'
import scStyled from 'styled-components'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { Theme, Typography } from '@mui/material'

const StyledTypography = scStyled(Typography)`
  margin: 1rem 0;
  text-indent: 12px;
`

const Accordion = styled((props: AccordionProps & { myTheme: Theme }) => (
  <MuiAccordion disableGutters elevation={3} {...props} />
))(({ theme, myTheme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  width: '85%',
  minWidth: '350px',
  margin: '0 auto 0 auto',
  backgroundColor: myTheme.palette.colorMode.s4,
  color: myTheme.palette.colorMode.accordionHeaderTextColor,
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? '#181818' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions({
  theme,
}: {
  theme: Theme
}): React.ReactElement {
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div>
      <Accordion
        myTheme={theme}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ boxShadow: 20 }}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <StyledTypography style={{ fontSize: '1.3rem' }}>
            My background
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor:
              theme.palette.colorMode.accordionHeaderBackgroundColor,
            color: theme.palette.colorMode.accordionContentTextColor,
          }}
        >
          <StyledTypography>
            I live in Toronto, Ontario, Canada and graduated in 2016 from
            Ryerson University with a Bachelor’s degree in Biomedical
            Engineering. After working for a few years as an engineer, I
            developed a passion for data analysis and enrolled in a data
            analytics program at Ryerson University. Following the program, I
            began to apply my skills at two large Ontario hospitals.
          </StyledTypography>
          <StyledTypography>
            In these positions, I honed my craft of identifying areas ripe for
            improvement and applying software solutions to fix them. This
            involved the automation of numerous tasks, such as data retrieval,
            data cleaning, and data dissemination. This skillset improved how
            the organizations utilized dashboards and other reports/data that
            come from multifarious internal and external systems.
          </StyledTypography>
          <StyledTypography>
            In 2018, I became very interested not just in analytical
            programming, but in the development of applications and Websites. I
            created a few tools for work and numerous Websites for personal
            projects. I designed these projects not only to solve real problems,
            but also to work on specific areas of software development with the
            goal of becoming a well-rounded full-stack developer.
          </StyledTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        myTheme={theme}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <StyledTypography style={{ fontSize: '1.3rem' }}>
            My most-used technologies and skills
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor:
              theme.palette.colorMode.accordionHeaderBackgroundColor,
            color: theme.palette.colorMode.accordionContentTextColor,
          }}
        >
          <StyledTypography>
            Python is the first programming language that I dove deep into, and
            because of this, I began my Web development journey with Django, a
            Python-based framework for designing Websites. Django taught me
            about the Model-View-Controller model, as well as so much about Web
            development basics like HTML, CSS, JavaScript event handlers, etc..
          </StyledTypography>
          <StyledTypography>
            After designing a few Web applications in this way, I began to seek
            more learning of JavaScript/TypeScript, and was exposed to the world
            of React. I took a few Udemy courses and began applying my knowledge
            by building more applications. I learned so much about
            authentication/authorization, caching, React’s declarative style,
            and fell in love with the technology. It is now my primary tool for
            developing applications.
          </StyledTypography>
          <StyledTypography>
            I also have acquired the following skills throughout my journey:
          </StyledTypography>
          <ul>
            <li>
              <StyledTypography>
                SQL and relational/non-SQL database design
              </StyledTypography>
            </li>
            <li>
              <StyledTypography>Machine learning models</StyledTypography>
            </li>
            <li>
              <StyledTypography>
                Communication and presentation skills
              </StyledTypography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        myTheme={theme}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <StyledTypography style={{ fontSize: '1.3rem' }}>
            How I built this Website
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor:
              theme.palette.colorMode.accordionHeaderBackgroundColor,
            color: theme.palette.colorMode.accordionContentTextColor,
          }}
        >
          <StyledTypography>
            When I began developing in Django, I used Heroku and similar
            services to deploy my applications. I felt that I did not have as
            much control as I wanted, and that I did not fully understanding
            what was necessary for deployment.
          </StyledTypography>
          <StyledTypography>
            It was clear to me that Amazon Web Services (AWS) was the solution.
            There are so many services within, and many top-tier companies use
            them for their business. I took Udemy courses and studied for three
            of the examinations, which I passed. I then began to design my
            architecture for this site and my other hosted applications.
          </StyledTypography>
          <StyledTypography>
            I had to make design decisions such as whether to use Elastic
            Container Service (ECS) vs. Elastic Beanstalk, and how I wanted to
            configure routing and TLS certificates. Was a load balancer
            necessary? Should I deploy the front-end through Amazon S3, or
            Docker-ize that also?
          </StyledTypography>
          <StyledTypography>
            I ended up deploying the front-end React application in an S3
            bucket, and hosting the back-end API in ECS. This is how my projects
            are hosted as well.
          </StyledTypography>
          <StyledTypography>
            The final step was to convert all of this design into Infrastructure
            as Code. It was clear to me just how powerful CloudFormation is, and
            I knew that I needed the ability to customize on-the-fly, and to be
            able to take down or put up my architecture with ease. I spent a
            week designing a CloudFormation template that built everything from
            the security groups to the CloudFront distributions.
          </StyledTypography>
          <StyledTypography>Some other components:</StyledTypography>
          <div>
            <ul>
              <li>
                <StyledTypography>These</StyledTypography>
              </li>
              <li>
                <StyledTypography>are</StyledTypography>
              </li>
              <li>
                <StyledTypography>components</StyledTypography>
              </li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
