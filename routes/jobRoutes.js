import { Router } from "express";
const route = Router();

import { CreateJob, deleteJob, getAllJobs, getSingleJob, updateJob } from "../controllers/jobController.js";

route.route("/").get(getAllJobs).post(CreateJob);
route.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

export default route;