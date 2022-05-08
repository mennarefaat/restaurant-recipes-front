import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://th.bing.com/th/id/R.ae117b71ec46ad29745cac23abfa5195?rik=dFW1zEd%2bjhK4ow&riu=http%3a%2f%2f1.bp.blogspot.com%2f-M9JsXgkx1ws%2fUa_w-D-ihPI%2fAAAAAAAAHG0%2fZi_JGWCjwaY%2fs1600%2fIMG_3139b.jpg&ehk=H0nSW9lI%2fNqyoKCIXdtOydlabsIUu5mkM1D2Ho9RUe8%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    label: 'Bird',
    imgPath:
      'https://th.bing.com/th/id/R.01f58745588a6f4328ad2f811dffb6b7?rik=UNm3zYksS%2b2h1Q&pid=ImgRaw&r=0',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://th.bing.com/th/id/R.6bd2125eb3d64a17edf4361378874d20?rik=1se35pGuysE3sA&pid=ImgRaw&r=0',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://momsandkitchen.com/wp-content/uploads/2020/12/best-low-calorie-recipes-fresh-hellofresh-review-low-calorie-recipe-box-of-best-low-calorie-recipes.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth:" 100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "82vh",
                  display: 'block',
                  maxWidth:" 100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
