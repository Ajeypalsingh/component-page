
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
function App() {

  const listItems = [{
    name: "Instagram",
    id: 1001,
    image: "https://icons-for-free.com/iconfiles/png/512/high+quality+instagram+media+social+social+media+square-1320192615960625265.png",
  },
  {
    name: "Facebook",
    id: 1002,
    image: "https://markmichaelphotography.com.au/wp-content/uploads/2014/01/facebook-logo-1.jpg",
  },
  {
    name: "Netflix",
    id: 1003,
    image: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",
  },
  {
    name: "WhatsApp",
    id: 1004,
    image: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN",
  },

  {
    name: "Discord",
    id: 1005,
    image: "https://yt3.googleusercontent.com/ytc/AGIKgqNbN72WpptVMR-MXc4nff0kATQyyeEUW1Lf-CxceA=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "AirBnb",
    id: 1006,
    image: "https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0",
  },
  {
    name: "New York Times",
    id: 1007,
    image: "https://avatars.slack-edge.com/2020-04-21/1069616724710_52d32ecfe70c3c33b443_512.png",
  },
  {
    name: "Yahoo! Mail",
    id: 1008,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbjuUuffdZCZDsEwT9kRzDz9NuT3VLWooiw&usqp=CAU",
  },
  ]
  return (

    <>
      <Header />
      <Banner />
      <Gallery listItems={listItems} />
      <Footer />
    </>
  )

}

export default App;
