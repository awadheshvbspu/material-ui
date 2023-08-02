import React from 'react';
import {SpeedDial,SpeedDialAction,SpeedDialIcon} from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

export default function MuiSpeedDial() {
  return (
    <SpeedDial ariaLabel='Navigation speed dial' sx={{position:'absolute',bottom:16,right:16}}
    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
    >
  <SpeedDialAction icon={<ContentCopyOutlinedIcon/> } tooltipTitle='copy' tooltipOpen />
  <SpeedDialAction icon={<PrintIcon/> } tooltipTitle='print' tooltipOpen/>
  <SpeedDialAction icon={<ShareIcon/> } tooltipTitle='share' tooltipOpen />
    </SpeedDial>
  )
}
