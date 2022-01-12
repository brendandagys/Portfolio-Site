import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  text-indent: 12px;
  font-size: 0.9rem;
`

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ px: 1.15, py: 2 }}>
      <StyledTypography>
        This GitHub repository contains YAML mark-up that describes an AWS
        architecture that can be used to construct a robust and secure
        deployment of a React-TypeScript application on AWS. It can be followed
        for non-TypeScript deployments as well.
      </StyledTypography>
      <br />
      <StyledTypography>
        The method uses Docker along with AWS Fargate to deploy the backend
        container service, whereas the front-end bundle will be stored in an S3
        bucket. A DNS record and CloudFront distribution will point to either of
        these "origins" and route the user and API interface accordingly.
      </StyledTypography>
      <br />
      <StyledTypography>
        The architecture will be defined with CloudFormation code. To manage
        CI/CD and to enable easy updates of the application, CodePipeline and
        CodeBuild will be used (along with each one's respective IAM Policy) to
        enable the developer to approve or reject new revisions/updates as their
        application evolves.
      </StyledTypography>
    </Container>
  )
}

export default Description
