// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {timelineItemsList} = props
  const {courseTitle, description, duration, tagsList} = timelineItemsList

  return (
    <div className="course-container">
      <div className="title-duration-con">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-duration-con">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tags-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id}>{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
