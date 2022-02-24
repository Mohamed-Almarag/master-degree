export const useUserInfo = () => {
  let student = JSON.parse(localStorage.getItem("student-data"));

  if (student) {
    let id = student.data.id;
    let name = student.data.name;
    let image = student.data.image;
    let categoryId = student.data.category_id;
    return { name, image, categoryId, id };
  }
};
