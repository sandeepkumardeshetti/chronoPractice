// Write your code here

import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="main-heading">MY JOURNEY OF</h1>
          <h1 className="sub-heading">CCBP 4.0</h1>
          <div className="chrono-container">
            <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
              <CourseTimelineCard timelineItemsList={timelineItemsList[0]} />
              <CourseTimelineCard timelineItemsList={timelineItemsList[2]} />
            </Chrono>
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineView
