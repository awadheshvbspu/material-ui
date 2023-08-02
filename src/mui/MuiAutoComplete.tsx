import React, { useState } from 'react';
import {Box,Stack,TextField,Autocomplete} from '@mui/material';

type Skill = {
    id: number
    label: string
  }
  
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
  }))
  
  
export default function MuiAutoComplete() {
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
    console.log(skill)
    return (
      <Stack spacing={2} width='250px'>
        <Autocomplete
          options={skills}
          renderInput={params => <TextField {...params} label='Skills' />}
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue)
          }}
        />
        <Autocomplete
          options={skillsOptions}
          renderInput={params => <TextField {...params} label='Skills' />}
          value={skill}
          onChange={(_event: any, newValue: Skill | null) => {
            setSkill(newValue)
          }}
        />
      </Stack>
    )
  }