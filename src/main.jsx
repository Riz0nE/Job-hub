import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import Blog from './components/Blog/Blog.jsx';
import Statistic from './components/Statistic/Statistic.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>,
        loader: () => fetch('jobs.json')
      },

      {
        path: "jobs/:jobId",
        element: <JobDetails></JobDetails>,
        // loader: ({ params }) => fetch(`jobs.json/${params.jobId}`)
        // loader: ({ params }) => fetch(`jobs.json/jobs/${params.jobId}`)
        loader: () => fetch('/jobs.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'statistices',
        element: <Statistic></Statistic>
      },
      {
        path: 'appliedjob',
        element: <AppliedJob></AppliedJob>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
