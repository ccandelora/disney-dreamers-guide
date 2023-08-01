import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import WaitTimes from './components/WaitTimes';
import Posts from './components/Posts';
import PostWraper from './components/PostWraper';
import PostsWraper from './components/PostsWraper';
import HomeWraper from './components/HomeWraper';
import Post from './components/Post';
import Header from './components/Header';
import Test from './components/Test';
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
      element: <WaitTimes title="Hollywood Studios Wait Times"park="hollywood-studios"/>
    },
    { path: "/animal-kingdom-queue-times",
      element: <WaitTimes title="Aniaml Kingdom Wait Times" park="animal-kingdom"/>
    },
  ]);

  const initFacebookSDK = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    let locale = "vi_VN";
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "2058140294535510",
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.5" // use version 2.1
      });
    };
    // Load the SDK asynchronously
    (function (d, s, id) {
      console.log(s);
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  useEffect(() => {
    initFacebookSDK();
  }, []);

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
