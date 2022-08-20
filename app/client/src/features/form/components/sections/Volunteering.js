/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'
import { Button, Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'
import { Volunteer } from '..'
import { addVolunteering, removeVolunteering, addVolunteeringAchievement, removeVolunteeringAchievement } from '../../actions'
import type { FormValues } from '../../types'
import type { State } from '../../../../app/types'

type Props = {
  volunteering: $PropertyType<FormValues, 'volunteering'>,
  addVolunteering: () => void,
  removeVolunteering: () => void
}

function Volunteering({ volunteering, addVolunteering, removeVolunteering }: Props) {
  return (
    <Section heading="Volunteering">
      <LabeledInput
        name="headings.volunteering"
        label="Section Heading"
        placeholder="Volunteering"
      />
      <Divider />
      {volunteering.map((position, i) => <Volunteer
                achievements={position.achievements}
                addAchievement={addVolunteeringAchievement}
                removeAchievement={removeVolunteeringAchievement}
      key={i} index={i} />)}
      <div className="section-buttons">
        <Button onClick={addVolunteering} type="button">
          Add Volunteering
        </Button>
        <Button
          onClick={removeVolunteering}
          disabled={volunteering.length === 1}
          type="button"
        >
          Remove Volunteering
        </Button>
      </div>
    </Section>
  )
}

function mapState(state: State) {
  return {
    volunteering: state.form.resume.values.volunteering
  }
}

const mapActions = {
  addVolunteering,
  removeVolunteering,
  addVolunteeringAchievement,
  removeVolunteeringAchievement
}

export default connect(mapState, mapActions)(Volunteering)
