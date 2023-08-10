import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WaitTimes from './components/WaitTimes';
import PostWraper from './components/PostWraper';
import PostsWraper from './components/PostsWraper';
import HomeWraper from './components/HomeWraper';
import PrivacyPolicy from './components/PrivacyPolicy';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  //const { id } = useParams();
  const router = createBrowserRouter([
    { path: "/",
      element: <HomeWraper /> 
    },
    { path: "/post/:slug",
      element: <PostWraper />
    },
    {path: "/articles",
      element: <PostsWraper />
    },
    { path: "/magic-kingdom-queue-times",
      element: <WaitTimes title="Magic Kingdom Wait Times" park="magic-kingdom" />
    },
    { path: "/epcot-queue-times",
      element: <WaitTimes title="Epcot Wait Times" park="epcot"/>
    },
    { path: "/hollywood-studios-queue-times",
      element: <WaitTimes title="Hollywood Studios Wait Times" park="hollywood-studios"/>
    },
    { path: "/animal-kingdom-queue-times",
      element: <WaitTimes title="Aniaml Kingdom Wait Times" park="animal-kingdom"/>
    },
    { path: "/privacy-policy",
      element: <PrivacyPolicy />
    },
  ]);

  
  return (
    <div>
       
        <Header />
        <main className="container">
          <RouterProvider router={router} />
        </main>
        <Footer />
    </div> 
  );
}

export default App;
