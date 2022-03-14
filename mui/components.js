import {Button, TextField} from "@mui/material";
import {withStyles} from '@mui/styles';
import {styled} from "@mui/system";

export const BaseButton = withStyles({
    root: {
        "& MuiButton-root:hover.Mui-disabled": {
            backgroundColor: '#03519F',
        },
        background: '#03519F',
        borderRadius: 4,
        textDecoration: 'none',
        color: 'white',
        fontSize: "18px",
        border: 'none',
        height: '50px',
        padding: '13px',
        textTransform: 'capitalize',
        '&:hover': {
            background: '#03519F',
        },
        '& .MuiFormControl-marginNormal': {
            margin: '0px'
        }
    }
})(Button)






export const TransparentButton = withStyles({
    root: {
        "& MuiButton-root:hover.Mui-disabled": {
            backgroundColor: 'transparent',
        },
        background: 'transparent',
        borderRadius: 4,
        textDecoration: 'none',
        color: '#03519F',
        fontSize: "18px",
        border: 'none',
        height: '50px',
        padding: '13px',
        textTransform: 'capitalize',
        '& .MuiFormControl-marginNormal': {
            margin: '0px'
        }
    }
})(Button)
export const StyledInputElementBase = styled('input')(
    () => `
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #658098;
  background: #FFFFFF;
  border: 1px solid rgba(101, 128, 152, 0.3);
  border-radius: 4px;
  padding: 15px 15px;
  transition: all 150ms ease;

  &:hover {
        border-color: #03519F;
  }

  &:focus {
   border-color: #03519F;
    outline-offset: 2px;
  }
`,
);

export const StyledInputElementLeft = styled('input')(
    () => `
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #658098;
  background: #FFFFFF;
  border: 1px solid rgba(101, 128, 152, 0.3);
  border-radius: 4px 0px 0px 4px;
  padding: 15px 15px;
  transition: all 150ms ease;

  &:hover {
        border-color: #03519F;
  }

  &:focus {
   border-color: #03519F;
    outline-offset: 2px;
  }
`,
);

export const StyledInputElementRight = styled('input')(
    () => `
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #658098;
  background: #FFFFFF;
  border: 1px solid rgba(101, 128, 152, 0.3);
  border-radius: 0px 4px 4px 0px;
  padding: 15px 15px;
  transition: all 150ms ease;

  &:hover {
        border-color: #03519F;
  }

  &:focus {
   border-color: #03519F;
    outline-offset: 2px;
  }
`,
);

