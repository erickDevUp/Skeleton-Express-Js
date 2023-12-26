import { Router } from "express";
import { CoursesController } from '../controllers/courses.js'

export const CreateCoursesRouter =({couseModel})=>{
const coursesRouter = Router()
const coursesController = new CoursesController({ couseModel })

coursesRouter.get("/",coursesController.getAll)
coursesRouter.post('/', coursesController.create)
coursesRouter.patch('/:id', coursesController.update)
coursesRouter.delete('/:id', coursesController.delete)

coursesRouter.get('/:roadmap', coursesController.getRoadMap)

return coursesRouter

}
