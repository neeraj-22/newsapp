// import React, { Component } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import News from "../components/News";

// export class CategoryPage extends Component {
//   render() {
//       const { category } = useParams()
//     return (
//       <>
//         <Navbar />
//         <News pageSize={20} category={category}/>
//       </>
//     );
//   }
// }

// export default CategoryPage;

import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import News from "../components/News";

const CategoryPage = () => {
  let { category } = useParams();

  return (
    <>
      <Navbar />
      <News pageSize={20} category={category} />
    </>
  );
};

export default CategoryPage;
