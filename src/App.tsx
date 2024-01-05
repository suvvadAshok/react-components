// import { Link } from "react-router-dom";
// import { Circle } from "./Components/circular";
// import { Cards } from "./Components/cards";
// import "./App.css";

import { useQuery } from "@tanstack/react-query";

// function App() {
//   return (
//     <center>
//       <h1>ContentS</h1>
//       <button>
//         <Link to={"/step-form"}>step form</Link>
//       </button>
//       <button>
//         <Link to={"/signup-form"}>signup form</Link>
//       </button>
//       <Circle />
//       <Cards />
//     </center>
//   );
// }

const POST = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
];

const App = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POST]),
  });

  if (postQuery.isLoading) return <h1>loading...</h1>;

  if (postQuery.isError) return <p>{JSON.stringify(postQuery.error)}</p>;

  return (
    <div>
      {postQuery.data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
