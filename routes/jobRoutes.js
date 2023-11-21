import { Router } from "express";
const route = Router();
import { ValidationJobInput } from "../middleware/validationMiddleware.js";
import { CreateJob, deleteJob, getAllJobs, getSingleJob, updateJob } from "../controllers/jobController.js";


route.route("/").get(getAllJobs).post(CreateJob,(req,res)=>{ValidationJobInput});
route.route("/:id").get(getSingleJob).patch(updateJob,(req,res)=>{ValidationJobInput}).delete(deleteJob);

export default route;