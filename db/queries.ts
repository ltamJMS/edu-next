import { cache } from 'react'
import db from '@/db/drizzle'
import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { courses, userProgress } from './schema'

export const getCourses = cache(async () => {
  // const data = await db.query.courses.findMany()
  return [
    {
      id: 1,
      title: 'Introduction to Programming',
      imageSrc: 'intro_programming.png'
    },
    {
      id: 2,
      title: 'Advanced Mathematics',
      imageSrc: '/intro_programming.png'
    }
  ]
})

export const getUserProgress = cache(async () => {
  const { userId } = await auth()

  if (!userId) return null

  /* Get the current user's progress  */
  // const data = await db.query.userProgress
  //   .findFirst({
  //     where: eq(userProgress.userId, userId),
  //     with: {
  //       activeCourse: true
  //     }
  //   })
  //   .catch(error => {
  //     console.log('error', error)
  //   })

  return {}
})

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId)
  })

  return data
})
