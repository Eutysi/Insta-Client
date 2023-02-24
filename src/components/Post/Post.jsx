import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function PostView() {
  const [posts, setPosts] = useState([]);
  
  useEffect( () => {
    const fetchData = async () => {
        const info = await fetch('https://mauve-drill-tam.cyclic.app/allData');
        const response = await info.json()
        return response;
      }
      fetchData().then((info)=> setPosts(info));

},[]);

  return (
    <div>
      {posts.result && posts.result.map((post,i)=>{return <Card post={post} key={i} />})}
    </div>    
  );
}

export default PostView;
