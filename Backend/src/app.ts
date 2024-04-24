import express from "express";
import cors from "cors";
import vacationsRoutes from "./6-routes/vacations-routes";
import authRoutes from "./6-routes/auth-routes";
import followersRoutes from "./6-routes/followers-routes";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";
import expressFileUpload from "express-fileupload";


// Server
const server = express();

// Middleware:
server.use(cors());
server.use(expressFileUpload());

server.use(express.json());

// Routes:
server.use("/api", vacationsRoutes);
server.use("/api", authRoutes);
server.use("/api", followersRoutes);

server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`))


