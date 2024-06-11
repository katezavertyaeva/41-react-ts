import Layout from 'components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import Home from 'pages/Home/Home';
import User from 'pages/User/User';
import About from 'pages/About/About';
import Clients from 'pages/Clients/Clients';
import Facebook from 'pages/Clients/components/Facebook/Facebook';
import Google from 'pages/Clients/components/Google/Google';
import Amazon from 'pages/Clients/components/Amazon/Amazon';

// Lessons
// import Lesson06 from 'lessons/Lesson06/Lesson06';
// import Lesson07 from 'lessons/Lesson07/Lesson07';
// import Lesson08 from 'lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson10 from 'lessons/Lesson10/Lesson10';
// import Lesson11 from 'lessons/Lesson11/Lesson11';
// import Lesson13 from 'lessons/Lesson13/Lesson13';
import Weather from 'pages/Weather/Weather';

//Consultations
// import Consultation03 from 'consultations/Consultation03/Consultation03';
// import Consultation04 from 'consultations/Consultation04/Consultation';

// Homeworks
// import Homework07 from 'homeworks/Homework07/Homework07';
// import Homework08 from 'homeworks/Homework08/Homework08';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import Homework11 from 'homeworks/Homework11/Homework11';
// import Homework13 from 'homeworks/Homeworks13/Homework13';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Consultation03/> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Consultation04/> */}
      {/* <Lesson09 /> */}
      {/* <Homework09/> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11/> */}
      {/* <Homework11 /> */}
      {/* //Example Lesson 12 */}
      {/* <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/about' element={<About />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          < Route path='*' element={'Page not found'} />
        </Routes >
      </Layout > */}
      {/* <Lesson13 /> */}
      {/* <Homework13 /> */}
      <Weather />
    </BrowserRouter >
  );
}

export default App;
