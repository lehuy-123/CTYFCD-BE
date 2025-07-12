const Project = require("../models/projectModel");

// [GET] /api/projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách dự án." });
  }
};

// [POST] /api/projects
exports.createProject = async (req, res) => {
  try {
    const { title, slug, image, description } = req.body;
    const newProject = new Project({ title, slug, image, description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: "Không thể tạo dự án." });
  }
};

// [PUT] /api/projects/:id
exports.updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Không thể cập nhật dự án." });
  }
};

// [DELETE] /api/projects/:id
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: "Không thể xoá dự án." });
  }
};
