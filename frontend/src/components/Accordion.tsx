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
import {
  accordionContentBackground,
  accordionContentHowSiteWasBuilt,
  accordionContentSkills,
} from '../data/accordionContent'

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
  const [expanded, setExpanded] = useState<string | false>('panel2')

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
          {accordionContentBackground}
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
          {accordionContentSkills}
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
          {accordionContentHowSiteWasBuilt}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
