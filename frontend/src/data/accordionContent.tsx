import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledTypography = styled(Typography)`
  margin: 1rem 0;
  text-indent: 12px;
  font-size: 0.9rem;
  // text-align: justify;
`

export const accordionContentBackground = (
  <>
    <StyledTypography>
      I live in Toronto, Ontario, Canada and graduated from Ryerson University with
      a Bachelor’s degree in Biomedical Engineering. After working for a few years
      as an engineer, I developed a passion for coding, data analysis, and machine
      learning. Although we learned most of these skills in university, I chose at
      the time to further my education in these areas and apply it to the field of
      healthcare. This resulted in me working in two roles at two large Ontario
      hospitals between 2018 and 2021.
    </StyledTypography>
    <StyledTypography>
      At these organizations, I was able to identify many processes that were ripe
      for improvement and apply software solutions to fix them. This involved the
      automation of numerous tasks, such as data retrieval (databases, files, FTP
      servers, etc.), data cleaning/munging, and dissemination of data and
      analyses (emails, file folders, applications, etc.). This skillset improved
      the way that the organizations utilized their data holdings, dashboards, and
      various reports that come from multifarious internal and external systems.
    </StyledTypography>
    <StyledTypography>
      I was also able to apply my skillset toward the development of Web
      applications, building applications that solved problems at a larger scale.
      I created tools for work but also numerous websites as personal projects for
      my own interest and edification. I designed these projects not only to solve
      real problems, but also to work on specific areas of software development
      with the goal of becoming a well-rounded full-stack developer.
    </StyledTypography>
    <StyledTypography>
      In 2022, I created this website, backed by a fleet of personal projects to
      showcase my skills. At the time, I had also obtained three certifications
      from Amazon Web Services. I applied to software development jobs and a
      few weeks later, was a professional developer!
    </StyledTypography>
    
    <StyledTypography>
      Almost two years later, I remain in the field and consider the switch one
      of the best decisions I ever made. I enjoy my work and craft so much that
      I often look forward to the week ahead. I have not stopped learning, and
      am regularly learning new concepts, building projects, studying for more
      certifications, or just trying out new technologies.
    </StyledTypography>
    
    <StyledTypography>
      Since I began in this field, I've learned and strengthened my abilities
      when it comes to things such as AWS, Kubernetes, learning new programming
      languages, and developer productivity.
    </StyledTypography>
    
    <StyledTypography>
      Today, I consider myself a motivated and passionate full-stack software
      developer that is always looking for the next way to improve. When I'm not
      outside or spending time with family and friends, I'm often building my
      skills further or working on a project that I'm passionate about.
    </StyledTypography>
  </>
)

export const accordionContentSkills = (
  <>
    <StyledTypography>
      I am proficient in a few programming languages, as well technologies that
      I've learned about and used as my curiosity leads me and I have new
      requirements for my projects.
    </StyledTypography>

    <StyledTypography>
      I am very comfortable writing TypeScript and JavaScript code both on the
      front-end and the back-end. While I have worked in plain JavaScript
      projects, I really enjoy the information that TypeScript can provide to
      me in my IDE.
    </StyledTypography>
    
    <StyledTypography>
      I'm also proficient with Python, having used it professionally, as well
      as in projects involving Django, Pandas/Numpy, Tkinter, and more.
    </StyledTypography>
    
    <StyledTypography>
      My favorite language of all is Rust. Having started to work with it in
      2022, I quickly fell in love. Its amazing type system, memory guarantees,
      and developer experience have me always looking for excuses to write more.
      I now use it for all of my personal projects. On the back-end I typically
      deploy a serverless REST API with API Gateway and Rust Lambda functions.
      On the front-end, I've started to play around with the Yew framework
      (similar to React), which allows me to build blazingly fast UIs without
      any garbage collection.
    </StyledTypography>
      
    <StyledTypography>
      Front-end technologies I've used:
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Yew</li>
      </ul>
    </StyledTypography>
    
    <StyledTypography>
      As I've gained experience and learned more about AWS, my interest in DevOps has grown. This motivated me to learn more about technologies such as:
      <ul>
        <li>Kubernetes</li>
        <li>Terraform</li>
        <li>AWS CloudFormation</li>
        <li>CI/CD</li>
        <li>shell scripting</li>
      </ul>
    </StyledTypography>
    
    <StyledTypography>
      Other skills:
      <ul>
        <li>SQL and relational database design, including PostgreSQL, MySQL, Amazon RDS, and Oracle</li>
        <li>NoSQL databases including DynamoDB and MongoDB</li>
        <li>Git, version control systems</li>
        <li>Docker and Kubernetes</li>
        <li>Understanding of data structures and algorithms</li>
        <li>Strong communication, presentation, and team-building skills</li>
      </ul>
    </StyledTypography>
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
      It became clear to me that Amazon Web Services (AWS) was the solution. There
      are so many services within, and many large companies use them for their
      business needs. I took courses to learn about the vast ecosystem and studied
      for their certifications. I then began to plan and design my architecture
      for this very site and my other hosted applications.
    </StyledTypography>

    <StyledTypography>
      I had to make many design decisions including whether to use Elastic
      Container Service (ECS) vs. Elastic Beanstalk vs. EC2, how I wanted to
      configure routing from/to all of my services, security, and TLS certificates.
      <i>Was a load balancer necessary? Should I deploy the front-end through Amazon
      S3, or Docker-ize that also?</i> There were so many things I learned by
      applying the knowledge I gained from studying for the examinations.
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
      I ended up with different stacks based on the type of service being deployed.
      The front-end of my React applications were habituated in an S3 bucket,
      while the back-end API was Docker-ized in ECS Fargate. For past Django
      projects, a different stack was required, and I ended up creating an
      entirely automated CodePipeline workflow. It would take a CodeCommit
      repository and generate Docker images from the Dockerfiles to be stored
      in Elastic Container Registry (ECR). It would then run them through a
      pipeline with a `docker-compose.yml` file that along with ECS
      `docker-convert` turns the Docker instructions into CloudFormation code,
      which is then applied as a stack! I also have services that exist solely
      as an API, so a specific solution was implemented in these scenarios.
    </StyledTypography>

    <StyledTypography>
      Some examples of the AWS technologies I used:
      <ul>
        <li>CloudFront, for Distributions that pointed to S3 buckets and ECS-hosted APIs</li>
        <li>
          Amazon Certificate Manager (ACM), to create TLS certificates to
          implement security on my Distributions and Load Balancers
        </li>
        <li>
          Amazon Virtual Private Cloud (VPC), to create an isolated
          environment for some of my services to live
        </li>
      </ul>
    </StyledTypography>

    <StyledTypography>
      Please see the Portfolio section below, where I link to a GitHub repository
      that contains all of the CloudFormation code that I created.
    </StyledTypography>
  </>
)
