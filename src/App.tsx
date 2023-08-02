import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiTypography from './mui/MuiTypography';
import MuiButton from './mui/MuiButton';
import MuiTextField from './mui/MuiTextField';
import MuiSelect from './mui/MuiSelect';
import MuiRadioButton from './mui/MuiRadioButton';
import MuiCheckBox from './mui/MuiCheckBox';
import MuiSwitch from './mui/MuiSwitch';
import MuiRating from './mui/MuiRating';
import MuiAutoComplete from './mui/MuiAutoComplete';
import MuiLayout from './mui/MuiLayout';
import MuiCard from './mui/MuiCard';
import MuiAccordian from './mui/MuiAccordian';
import MuiImageList from './mui/MuiImageList';
import MuiNavbar from './mui/MuiNavbar';
import MuiLink from './mui/MuiLink';
import MuiBreadcrumbs from './mui/MuiBreadcrumbs';
import MuiDrawer from './mui/MuiDrawer';
import MuiSpeedDial from './mui/MuiSpeedDial';
import MuiBottomNavigation from './mui/MuiBottomNavigation';
import MuiAvatar from './mui/MuiAvatar';
import MuiBadge from './mui/MuiBadge';
import MuiList from './mui/MuiList';
import MuiChip from './MuiChip';
import MuiToolTip from './MuiToolTip';
import MuiTable from './mui/MuiTable';
import MuiAlert from './mui/MuiAlert';
import MuiSnackBar from './mui/MuiSnackBar';
import MuiDialog from './mui/MuiDialog';
import MuiProgress from './mui/MuiProgress';
import MuiSkeleton from './mui/MuiSkeleton';
import MuiLoadingButton from './mui/MuiLoadingButton';
import { LocalizationProvider } from '@mui/lab';
import AdapterDatefns from '@mui/lab/AdapterDateFns'
import MuiDatePicker from './mui/MuiDatePicker';
import MuiDtaeRange from './mui/MuiDtaeRange';
import MuiTab from './mui/MuiTab';
import MuiTimeline from './mui/MuiTimeline';
import MuiMasonry from './mui/MuiMasonry';
import MuiResponsive from './mui/MuiResponsive';
import MuiCustomTheme from './mui/MuiCustomTheme';

function App() {
  return (
    <>
    {/* <LocalizationProvider dateAdapter={AdapterDatefns}> */}
    <div className="App">
      <MuiTypography/>
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioButton/>
      <MuiCheckBox/>
      <MuiSwitch/>
      <MuiRating/>
      <MuiAutoComplete/> 
       <MuiLayout/>
      <MuiCard/>
      <MuiAccordian/>
      <MuiImageList/>
      <MuiNavbar/>
      <MuiLink/>
      <MuiBreadcrumbs/>
      <MuiDrawer/>
      <MuiSpeedDial/>
      <MuiBottomNavigation/>
      <MuiAvatar/>
      <MuiBadge/>
      <MuiList/>
      <MuiChip/>
      <MuiToolTip/>
      <MuiTable/>
      <MuiAlert/>
      <MuiSnackBar/>
      <MuiDialog/>
      <MuiProgress/>
      <MuiSkeleton/>
      <MuiLoadingButton/>
      <MuiDatePicker/>
      {/* <MuiDtaeRange/> */}
    </div>
      {/* </LocalizationProvider> */}
      <MuiTab/>
      <MuiTimeline/>
      {/* <MuiMasonry/>
      <MuiResponsive/> */}
      {/* <MuiCustomTheme/> */}
    </>
  );
}

export default App;
