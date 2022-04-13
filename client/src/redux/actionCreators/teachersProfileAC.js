import { INIT_TEACHER_COURSES_AND_STUDENTS} from '../actionTypes/teachersProfileAT'

export function initCoursesAndStidentsAC (payload) {
  return {
    type: INIT_TEACHER_COURSES_AND_STUDENTS,
    payload
  }
}
