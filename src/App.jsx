import React from 'react';
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

function App() {
  //const { id } = useParams();
  const router = createBrowserRouter([
    { path: "/",
      element: <HomeWraper /> 
    },
    { path: "/magic-kingdom-queue-times",
      element: <WaitTimes />
    },
    { path: "/post/:id",
      element: <PostWraper />
    },
    {path: "/articles",
      element: <PostsWraper />
    },
  ]);

  return (
    <div>   
      <Header />
      <main className="container">
        <RouterProvider router={router} />
      </main>  
    </div> 
  );
}

export default App;
