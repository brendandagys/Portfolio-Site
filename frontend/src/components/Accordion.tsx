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

const Accordion = styled((props: AccordionProps & { mytheme: Theme }) => (
  <MuiAccordion disableGutters elevation={3} {...props} />
))(({ theme, mytheme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  width: '85%',
  minWidth: '350px',
  maxWidth: '1150px',
  margin: '0 auto 0 auto',
  backgroundColor: mytheme.palette.colorMode.s4,
  color: mytheme.palette.colorMode.accordionHeaderTextColor,
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
        mytheme={theme}
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
            I live in Toronto, Ontario, Canada and graduated from Ryerson
            University with a Bachelor’s degree in Biomedical Engineering. After
            working for a few years as an engineer, I developed a passion for
            coding and data analysis/management. Although we learned these
            skills in university, I chose to further my education in these areas
            and apply it to the field of healthcare, about which I am
            passionate. Since then, I have worked at two large Ontario hospitals
            in data-centric roles.
          </StyledTypography>
          <StyledTypography>
            At these organizations, I was able to identify many processes that
            were ripe for improvement and apply software solutions to fix them.
            This involved the automation of numerous tasks, such as data
            retrieval (databases, files, FTP servers, etc.), data cleaning, and
            dissemination of data and analyses. This skillset improved the way
            that the organizations utilized their dashboards and other
            reports/data that come from multifarious internal and external
            systems.
          </StyledTypography>
          <StyledTypography>
            I was also able to apply my skillset toward the development of Web
            applications, building applications that solved problems on a larger
            scale. I created tools for work but also numerous Websites for
            personal projects. I designed these projects not only to solve real
            problems, but also to work on specific areas of software development
            with the goal of becoming a well- rounded full-stack developer.
          </StyledTypography>
          <StyledTypography>
            Most recently, I have been strengthening my knowledge of Cloud
            technologies and have achieved three certifications for Amazon Web
            Services. I deployed this Website and my past applications
            (originally deployed using Heroku) entirely on AWS, which gives me
            more control and understanding of the infrastructure required to
            create highly-available applications and services.
          </StyledTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        mytheme={theme}
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
            In university, I learned multiple programming languages such as C,
            C++, Python, and Perl. After learning the fundamentals of
            programming, I then moved on to develop my knowledge of Python and
            R. I learned even more at this point, having a bevy of new
            challenges to conquer in the workflows of data analysis.
          </StyledTypography>
          <StyledTypography>
            When I began to focus more of my time on Web application
            development, I started with Django, a Python-based framework for
            designing Web applications. Django taught me about the
            Model-View-Controller model, Web request/responses, and solidified
            my understanding of the basics of Web design: HTML, CSS, and vanilla
            JavaScript. I also became proficient with JQuery, even though I may
            never use it again…
          </StyledTypography>
          <StyledTypography>
            After designing numerous Web applications with Django, I began to
            seek more learning of JavaScript/TypeScript/JSX and dove into the
            world of React. I took a few Udemy courses and began applying my
            knowledge by building new applications and even re-building previous
            projects of mine. I learned so much about best practices for
            authentication/authorization, caching, React’s declarative style,
            and I grew to appreciate the technology very much. It is now my
            primary tool for developing applications.
          </StyledTypography>
          <StyledTypography>
            A few other technologies/concepts stood out as necessary to learn,
            so I did just that. I started to use Docker and the principle of
            test-driven development in my applications, and saw their powers for
            deployment and robustness of my applications.
          </StyledTypography>
          <StyledTypography>
            Other skills that I possess but did not mention above include:
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
        mytheme={theme}
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
            When I began creating Web applications with Django, I used Heroku
            and similar services to deploy my applications. I felt that I did
            not have the control that I wanted, nor did I fully understand what
            was actually necessary for deployment.
          </StyledTypography>
          <StyledTypography>
            It became clear to me that Amazon Web Services (AWS) was the
            solution. There are so many services within, and many top-tier
            companies use them for their business. I took courses to learn about
            the vast ecosystem and studied for three of the examinations, all of
            which I passed. I then began to design my architecture for this very
            site and my other hosted applications.
          </StyledTypography>
          <StyledTypography>
            I had to make many design decisions including whether to use Elastic
            Container Service (ECS) vs. Elastic Beanstalk, and how I wanted to
            configure routing and TLS certificates. Was a load balancer
            necessary? Should I deploy the front-end through Amazon S3, or
            Docker-ize that also?
          </StyledTypography>
          <StyledTypography>
            I ended up deploying the front-end React application in an S3
            bucket, and hosting the back-end API in ECS. This is generally how
            my other projects are hosted, too.
          </StyledTypography>
          <StyledTypography>
            The final step was to convert all of this design into Infrastructure
            as Code. After learning about/working in AWS, it quickly became
            clear to me just how powerful CloudFormation is. I knew that I
            needed the ability to customize my infrastructure on-the-fly, and to
            take down or deploy my architecture with ease. I spent a week
            designing a CloudFormation template that built everything from the
            security groups to the CloudFront distributions.
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
