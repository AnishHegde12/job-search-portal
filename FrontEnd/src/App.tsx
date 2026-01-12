import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalents from './Pages/FindTalents';
import TalentProfile from './Pages/TalentProfile';
import PostJob from './Pages/PostJob';
import JobDescription from './Pages/JobDescription';
import ApplyJob from './Pages/ApplyJob';
import CompanyPage from './Pages/CompanyPage';
import PostedJob from './Pages/PostedJob';
import JobHistory from './JobHistory/JobHistory';
import SignUpPage from './Pages/SignUp';
import ProfilePage from './Pages/ProfilePage';
export default function App() {
  const theme = createTheme({
    fontFamily: "libertinus",
    focusRing: "never",
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      'brightSun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'
      ],
      'mineShaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d',
      ]
    }
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
        <div className='relative'>
          <Header/>
          <Divider size="xs" />
          <Routes>
            <Route path='/find-jobs' element={<FindJobs />} />
            <Route path='/find-talents' element={<FindTalents />} />
            <Route path='/jobs' element={<JobDescription />} />
            <Route path='/job-history' element={<JobHistory/>}/>
            <Route path='/company' element={<CompanyPage/>}/>
            <Route path='/posted-job' element={<PostedJob/>}/>
            <Route path='/apply-job' element={<ApplyJob />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<SignUpPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path='/talent-profile' element={<TalentProfile />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}
