/*
coursesRouter.get("/",coursesController.getAll)
coursesRouter.post('/', coursesController.create)
coursesRouter.patch('/:id', coursesController.update)
coursesRouter.delete('/:id', coursesController.delete)

coursesRouter.get('/:roadmap', coursesController.getRoadMap)
*/

export class MovieController {
  constructor({ couseModel }) {
    this.couseModel = couseModel;
  }
  async getAll(req, res) {
    const request = req.query;
    const courses = this.couseModel.getAll();
    res.json(courses);
  }
  async create(req, res) {
    const course = req.query;
    const newCourse = this.couseModel.create({ course });
    res.status(201).json(newCourse);
  }
  async update(req, res) {
    const request = req.body;
    const { id } = req.params;
    const updateCourse = this.couseModel.update({ id, request });
    res.status(201).json(updateCourse);
  }
  async delete(req, res) {
    const { id } = req.params;
    const result = this.couseModel.delete({ id });

    if (result === false) {
      return res.status(404).json({ message: "Movie not found" });
    }
    return res.json({ message: "Movie deleted" });
  }
  async getRoadMap(req, res) {
    const roadMapQuery = req.params;
    const roadMap = this.couseModel.getRoadMap({ roadMapQuery });
    res.status(200).json(roadMap);
  }
}
