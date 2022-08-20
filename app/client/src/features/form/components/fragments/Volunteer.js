/**
 * @flow
 */

 import React from 'react'
 import { Divider, RoundButton, Icon } from '../../../../common/components'
 import LabeledInput, { Label, Input } from './LabeledInput'
import styled from 'styled-components'
 
 
const ButtonRow = styled.div`
  margin-left: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const MiniInput = Input.extend`
  width: 50%;

  @media screen and (max-width: 850px) {
    width: 60%;
  }
`

 type Props = {
   index: number
 }
 
 function Volunteer({ index, achievements,  addAchievement, removeAchievement }: Props) {
   return (
     <div>
       {index > 0 ? <Divider /> : null}

       <LabeledInput
         name={`volunteering[${index}].organization`}
         label="Organization"
         placeholder="Microsoft"
       />
       <LabeledInput
         name={`volunteering[${index}].position`}
         label="Position"
         placeholder="Microsoft Learn Student Ambassador"
       />
       <LabeledInput
         name={`volunteering[${index}].website`}
         label="Website"
         placeholder="https://studentambassadors.microsoft.com"
       />
       <LabeledInput
         name={`volunteering[${index}].startDate`}
         label="Start Date"
         placeholder="2017-01-01"
       />
       <LabeledInput
          name={`volunteering[${index}].endDate`}
          label="End Date"
          placeholder="2017-01-01"
          />

    <Label>Achievements</Label>
      { achievements.map((_, i) => (
        <div key={i}>
          <MiniInput
            name={`volunteering[${index}].achievements[${i}]`}
            placeholder="Helped students learn about Microsoft technologies."
            component="input"
          />
          {i === achievements.length - 1 && (
            <ButtonRow>
              <RoundButton inverted onClick={() => addAchievement(index)}>
                <Icon type="add" />
              </RoundButton>
              <RoundButton
                inverted
                disabled={achievements.length === 1}
                onClick={() => removeAchievement(index)}
              >
                <Icon type="remove" />
              </RoundButton>
            </ButtonRow>
          )}
        </div>
      ))}
       <LabeledInput
          name={`volunteering[${index}].summary`}
          label="Summary"
          placeholder="The student ambassador program let me gain and display leadership skills by helping other students grow as tech professionals."
        />
     </div>
   )
 }
 
 export default Volunteer
 