
import './App.css';
import restaurant from "./restaurant.jpg";
function Header(props) {
  
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src="https://github.com/sumitsliet18" height="200"/>
      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish) => 
        <li key={dish.id}>{dish.title}</li>
        )}
      </ul>
    </section>
  );
}
function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
      </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Paneer"
];

const dishObject = dishes.map((dish, i) => ({id: i, title: dish}));
// console.log(dishObject);


function App() {
  return (
    <div className="App">
      <Header name = "Sumit" />
      <Main adjective = "amazing" dishes={dishObject} />
      <Footer year = {new Date().getFullYear()} />

    </div>
  );
}

export default App;
