import React, { useState } from 'react'
import {Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup, FormHelperText} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function MuiCheckBox() {
    const [accept,setAccept] = useState(false)
    const [skill,setSkill] = useState<string[]>([])
  console.log({accept})
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setAccept(e.target.checked);
      };
 console.log(skill)
      const handleSkillChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const index = skill.indexOf(e.target.value)
        if (index === -1) {
            // add
          setSkill([...skill, e.target.value])
        } else {
            setSkill(skill.filter((skill) => skill!== e.target.value))
        }
      }

  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox  checked={accept} onChange={handleChange}/>} label="I accept terms and condition" />
            <br/>
            <FormControlLabel disabled  control={<Checkbox checked={true}/>} label="Disabled checkbox" />

        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}
            
            checked={accept} onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skill</FormLabel>
                <FormGroup row>
                <FormControlLabel label="HTML" control={<Checkbox  value='html' checked={skill.includes('html')} onChange={handleSkillChange}/>} />
                <FormControlLabel control={<Checkbox value='css'  checked={skill.includes('css')} onChange={handleSkillChange}/>} label="css" />
                <FormControlLabel control={<Checkbox  value='javascript' checked={skill.includes('javascript')} onChange={handleSkillChange}/>} label="javaScrpit" />

                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}
