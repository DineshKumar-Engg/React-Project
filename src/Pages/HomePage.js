import { useContext } from "react";
import ShowsContext from "../Context/showsContext";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";


const HomePage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homePage">
      {loading ? (
        <Loader />
      ) : (
        <div className="gridContainer" spacing={3}>
          {shows.map((item,id) => (
          <div 
          key={id} 
          style={{textAlign: 'justify'}}
          className='gridItem' 
      >
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                   ? item.show.image.medium
                  : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"                 
              }
              name={item.show.name}
               rating={
                item.show.rating.average
                 ? item.show.rating.average
                 : "No rating"
              }
            />
            </div>
          ))};
        </div>
      )} ;
     
    </div>
  );
};
export default HomePage;
