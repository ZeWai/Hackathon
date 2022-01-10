//import { dom } from '@fortawesome/fontawesome-svg-core';
//import PackageCard from './Components/Upcoming/Packages/PackageCard/PackageCard';
import Packages from './Packages/Packages';
import Search from './Search/Search';
import { useState } from "react";

//for seach block
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button'

export default function Upcoming() {
      let flowers = [
        {
          id: 1,
          title: "Chinese New Year Market",
          startPlanting: "May 2022",
          readyBy: "Feb 2023",
          image:
            "https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          description: "some short desription ",
          label: "Event",
          modal: {
            modalName: "Mandarins",
            modalPlant: "Marigold",
            modalAnother: "Pitaya",
            modalOneMore: "Strawberries",
          },
        },
        {
          id: 2,
          title: "Halloween pumpkin picking",
          startPlanting: "Jan 2022",
          readyBy: "Oct 2022",
          image:
            "https://images.unsplash.com/photo-1508995476428-43d70c3d0042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          description: "some short desription ",
          label: "Event",
          modal: {
            modalName: "Mandarins",
            modalPlant: "Marigold",
            modalAnother: "Pitaya",
            modalOneMore: "Strawberries",
          },
        },
        {
          id: 3,
          title: "Strawberry picking",
          startPlanting: "Nov 2022",
          readyBy: "April 2023",
          image:
            "https://images.unsplash.com/photo-1592300254886-5281e714c86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
          description: "some short desription ",
          label: "Workshop",
          modal: {
            modalName: "Mandarins",
            modalPlant: "Marigold",
            modalAnother: "Pitaya",
            modalOneMore: "Strawberries",
          },
        },
        {
          id: 4,
          title: "Herb sowing",
          startPlanting: "May 2022",
          readyBy: "Sep 2023",
          image:
            "https://images.unsplash.com/photo-1472141341085-dab5ea0df9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
          description: "some short desription ",
          label: "Workshop",
          modal: {
            modalName: "Mandarins",
            modalPlant: "Marigold",
            modalAnother: "Pitaya",
            modalOneMore: "Strawberries",
          },
        },
        {
          id: 5,
          title: "Christmas herb picking",
          startPlanting: "Feb 2022",
          readyBy: "Dec 2022",
          image:
            "https://images.unsplash.com/photo-1594313016519-640ed47407ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
          description: "some short desription ",
          label: "Workshop",
          modal: {
            modalName: "Mandarins",
            modalPlant: "Marigold",
            modalAnother: "Pitaya",
            modalOneMore: "Strawberries",
          },
        },
        {
          id: 6,
          title: "Valentine's day market",
          startPlanting: "Nov 2022",
          readyBy: "Feb 2023",
          image:
            "https://images.unsplash.com/photo-1612328289561-0edd72aefc43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
          description: "some short desription ",
          label: "Event",
          modal: {
            modalName: "Mandarins",
            modalPlant: "Marigold",
            modalAnother: "Pitaya",
            modalOneMore: "Strawberries",
          },
        },
      ];
      const [flowerResult, setflowers] = useState(flowers);
      const [searchTerm, setSearchTerm] = useState("");

      const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };

      const search = (catagory, val) => {
        setflowers(
          flowers.filter((flower) =>
            flower[catagory].toLowerCase().includes(val.toLowerCase())
          )
        );
        console.log(val);
      };
    return (
        
        <div className="container">

      <div className="row text-center">
        <h1 className="title">Upcoming.</h1>
        <p className="slogan">Recommendations made just for you</p>
      </div>

      <div className='row my-4'>
        <div className="input-group mb-3 my-2">
          <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
          <input type="text" class="form-control" placeholder="Search" value={searchTerm} onChange={(e) => {
            handleChange(e);
            search("title", searchTerm);
          }}></input>
        </div>
        <div>
          <Button className="m-2" variant="outline-secondary" onClick={() => { search("label", "") }}>All</Button>{' '}
          <Button className="m-2" variant="outline-secondary" onClick={() => { search("label", "Event") }}>Event</Button>{' '}
          <Button className="m-2" variant="outline-secondary" onClick={() => { search("label", "Workshop") }}>Workshop</Button>{' '}
        </div>
      </div>

      <div className="row">
        <Packages flowers={flowerResult} />
      </div>
    </div>
  )
}
