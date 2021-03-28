import {Card} from './components/Card'
import './App.css'
import pic from './pic.png'

function App() {

  const data = [
    {
      title: "Physical Health",
      color:"#22356F",
    },
    {
      title: "Mental Health",
      color:"#0052C1",
    },
    {
      title: "Nutrition",
      color: null,
      img: pic,
    }, 
    {
      title: "Gymnastics",
      color:"#DEE1FF",
    },
    {
      title: "Crossfit",
      color:"#8F00FF",
    },
    {
      title: "Aerobics",
      color:"#22356F",

    },
  ]

  return (
    <div className="App">
    {
      data.map((el,id) => {
        return <Card data={el} key={id}
        />
      })
    }
    </div>
  );
}

export {App};
