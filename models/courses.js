/*
    const courses = this.couseModel.getAll();

    const newCourse = this.couseModel.create({ course });
    
    const updateCourse = this.couseModel.update({ id, request });

    const result = this.couseModel.delete({ id });

    const roadMap = this.couseModel.getRoadMap({ roadMapQuery });
*/
export class CouseModel {
  static async getAll() {
    return courses
  }
  static async create({ course }){
    return newCourse
  }
  static async update({ id, request }){
    return updateCourse
  }
  static async delete({ id }){
    return result
  }

  static async getRoadMap({ roadMapQuery }){
    return roadMap
  }
}
