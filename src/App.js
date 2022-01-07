import './App.css';
import './components/packageCard/packageCard';
import PackageCard from './components/packageCard/packageCard';
import Packages from './components/packages';

function App() {

  let flowers = [
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    }
]



  return (
    <div className="container">

      <div className="row text-center">
        <h1 className="title">Upcoming.</h1>
        <p className="slogan">Recommendations made just for you</p>
      </div>

      <div className='row'>
        <input value={"search"}></input>
        <button>stuff</button>
      </div>

      <div className="container">
        <Packages flowers={flowers}/>
      </div>
    </div>
  );
}

export default App;
