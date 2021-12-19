import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledTypography = styled(Typography)`
  margin: 1rem 0;
  text-indent: 12px;
  // text-align: justify;
`

const StyledListItem = styled.li`
  margin-top: -12px;
`

export const accordionContentBackground = (
  <>
    <StyledTypography>
      I live in Toronto, Ontario, Canada and graduated from Ryerson University
      with a Bachelor’s degree in Biomedical Engineering. After working for a
      few years as an engineer, I developed a passion for coding, data analysis,
      and machine learning. Although we learned most of these skills in
      university, I chose to further my education in these areas and apply it to
      the field of healthcare, which I am passionate about. Since then, I have
      worked at two large Ontario hospitals in data-centric roles.
    </StyledTypography>
    <StyledTypography>
      At these organizations, I was able to identify many processes that were
      ripe for improvement and apply software solutions to fix them. This
      involved the automation of numerous tasks, such as data retrieval
      (databases, files, FTP servers, etc.), data cleaning/munging, and
      dissemination of data and analyses (emails, file folders, applications,
      etc.). This skillset improved the way that the organizations utilized
      their data holdings, dashboards, and various reports that come from
      multifarious internal and external systems.
    </StyledTypography>
    <StyledTypography>
      I was also able to apply my skillset toward the development of Web
      applications, building applications that solved problems at a larger
      scale. I created tools for work but also numerous Websites as personal
      projects for my own interest and edification. I designed these projects
      not only to solve real problems, but also to work on specific areas of
      software development with the goal of becoming a well-rounded full-stack
      developer.
    </StyledTypography>
    <StyledTypography>
      Most recently, I have been strengthening my knowledge of Cloud
      technologies and have achieved three certifications for Amazon Web
      Services, while studying to obtain a fourth. I deployed this Website and
      all linked past applications (originally deployed using Heroku) entirely
      on AWS, which gives me more control and understanding of the
      infrastructure required to create and deploy highly-available applications
      and services.
    </StyledTypography>
  </>
)

export const accordionContentSkills = (
  <>
    <StyledTypography>
      In university, I learned multiple programming languages such as C, C++,
      Python, and Perl. After learning the common patterns of programming with
      lower-level languages, I then moved on to develop my knowledge of Python
      and R. I learned even more at this point, having a bevy of new challenges
      to conquer in the workflows of data analysis.
    </StyledTypography>
    <StyledTypography>
      When I began to focus more of my time on Web application development, I
      started with Django, a Python-based framework for designing Web
      applications. Django taught me about the Model-View-Controller model, Web
      request/responses, and solidified my understanding of the basics of Web
      design: HTML, CSS, and vanilla JavaScript. I also became proficient with
      JQuery, even though I may never use it again…
    </StyledTypography>
    <StyledTypography>
      After designing numerous Web applications with Django, I began to seek
      more learning of TypeScript/JavaScript/JSX and dove into the world of
      React. I took a few Udemy courses to learn best practices and began
      applying my knowledge by building new applications and even re-building
      previous projects of mine with my new toolset. I learned so much about
      implementing authentication/authorization, caching, React’s declarative
      style, and I grew to appreciate the technology very much. It is now my
      primary tool for developing Web applications.
    </StyledTypography>
    <StyledTypography>
      A few other technologies/concepts stood out as necessary to learn, so I
      did just that. I started to use Docker and the principle of test-driven
      development in my applications, and saw their powers for deployment and
      building robustness into my applications.
    </StyledTypography>
    <StyledTypography>
      Other skills that I possess but did not mention above include:
    </StyledTypography>
    <ul>
      <StyledListItem style={{ marginTop: '10px' }}>
        <StyledTypography>
          SQL and relational/non-relational database design
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography>
          Git, version control systems, and virtual environments
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography>
          Machine learning models (regression, classifiers, clustering, etc.)
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography>
          Strong communication, presentation, and team-building skills
        </StyledTypography>
      </StyledListItem>
    </ul>
  </>
)

export const accordionContentHowSiteWasBuilt = (
  <>
    <StyledTypography>
      When I began creating Web applications with Django, I used Heroku and
      similar services to deploy my applications. I felt that I did not have the
      control that I wanted, nor did I fully understand what was actually
      necessary for deployment.
    </StyledTypography>
    <StyledTypography>
      It became clear to me that Amazon Web Services (AWS) was the solution.
      There are so many services within, and many well-known companies use them
      for their business needs. I took courses to learn about the vast ecosystem
      and studied for three of the examinations, all of which I passed. I then
      began to plan and design my architecture for this very site and my other
      hosted applications.
    </StyledTypography>
    <StyledTypography>
      I had to make many design decisions including whether to use Elastic
      Container Service (ECS) vs. Elastic Beanstalk vs. EC2, how I wanted to
      configure routing from/to all of my services, security, and TLS
      certificates.
      <i>
        Was a load balancer necessary? Should I deploy the front-end through
        Amazon S3, or Docker-ize that also?
      </i>
      There were so many things I learned by applying the knowledge I gained
      from studying for the examinations.
    </StyledTypography>
    <StyledTypography>
      The final step was to convert all of this design into Infrastructure as
      Code. After learning about/working in AWS, it quickly became clear to me
      just how powerful CloudFormation is. I knew that I needed the ability to
      customize my infrastructure on-the-fly, and to take down or deploy my
      architecture with ease. I spent time designing multiple CloudFormation
      templates that built everything from the security groups to the CloudFront
      distributions.
    </StyledTypography>
    <StyledTypography>
      I ended up with different stacks based on the type of service being
      deployed. The front-end of my React applications were habituated in an S3
      bucket, while the back-end API was Docker-ized in ECS Fargate. For past
      Django projects, a different stack was required, and I ended up creating
      an entirely automated CodePipeline workflow. It would take a CodeCommit
      repository and generate Docker images from the Dockerfiles to be stored in
      Elastic Container Registry (ECR). It would then run them through a
      pipeline with a `docker-compose.yml` file that along with ECS
      `docker-convert` turns the Docker instructions into CloudFormation code,
      which is then applied as a stack! I also have services that exist solely
      as an API, so a specific solution was implemented in these scenarios.
    </StyledTypography>
    <StyledTypography>
      Some examples of the AWS technologies I used:
    </StyledTypography>
    <div>
      <ul>
        <StyledListItem style={{ marginTop: '10px' }}>
          <StyledTypography>
            CloudFront, for Distributions that pointed to S3 buckets and
            ECS-hosted APIs
          </StyledTypography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography>
            Amazon Certificate Manager (ACM), to create TLS certificates to
            implement security on my Distributions and Load Balancers
          </StyledTypography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography>
            Amazon Virtual Private Cloud (VPC), to create an isolated
            environment for some of my services to live
          </StyledTypography>
        </StyledListItem>
      </ul>
    </div>
    <StyledTypography>
      Please see the Portfolio section below, where I link to a GitHub
      repository that contains all of the CloudFormation code that I created.
    </StyledTypography>
  </>
)
