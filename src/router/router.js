import { createBrowserRouter } from "react-router";
// import App from "../App";
import AllJobs from "../components/AllJobs/AllJobs";
import JobDetails from "../components/JobDetiails/JobDetails";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  {
    path: "jobs/:id/details",
    loader: async ({ params }) => {
      let fetchData = await fetch("/jobs.json")
        .then((res) => res.json())
        .then((data) => {
          let findData = data.find(
            (detailJob) => detailJob.id === parseInt(params.id)
          );
          return findData;
        });
      return fetchData;
    },
    Component: JobDetails,
  },
  {
    path: "alljobs",
    loader: () => fetch("/jobs.json"),
    Component: AllJobs,
  },
]);

export default router;
