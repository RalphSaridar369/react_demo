import { makeStyles } from '@mui/styles';

const focusedColor = "#FF6863";
export const useStyles = makeStyles({
  textinput: {
    // input label when focused
    "& label.Mui-focused": {
      color: focusedColor
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: focusedColor
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: focusedColor
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: focusedColor
      }
    }
  }
});