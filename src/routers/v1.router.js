import { Router } from "express";
import { companyRouter } from "../modules/routes/company.routes.js";
import { jobRouter } from "../modules/routes/job.routes.js";
import { applicationRouter } from "../modules/routes/application.routes.js";
import { counterRouter } from "../modules/routes/counter.routes.js";
import { feedbackRouter } from "../modules/routes/feedback.routes.js";
import { projectRouter } from "../modules/routes/project.routes.js";
import { serviceRouter } from "../modules/routes/services.routes.js";
import { stuffRouter } from "../modules/routes/stuff.routes.js";
import { heroRouter } from "../modules/routes/hero.routes.js";
import { whyChooseUsRouter } from "../modules/routes/whyChooseUs.routes.js";

const v1Router = Router();





v1Router.use("/company",companyRouter);
v1Router.use("/job",jobRouter);
v1Router.use("/application",applicationRouter);
v1Router.use("/counter",counterRouter);
v1Router.use("/feedback",feedbackRouter);
v1Router.use("/project",projectRouter);
v1Router.use("/service",serviceRouter);
v1Router.use("/stuff",stuffRouter);
v1Router.use("/hero",heroRouter);
v1Router.use("/whyChooseUs",whyChooseUsRouter);




export { v1Router }