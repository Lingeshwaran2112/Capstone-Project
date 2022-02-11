// import React from "react";
// import Nav from "./navbar";
// import Shop from "./shop";
// import axios from "axios";
// import { Appcontext } from "./context";
// import "../css/womens.css"
// import { Link } from "react-router-dom";

// function Allshop(props){

// const{womens , setWomens} = React.useContext(Appcontext)
// // const{ setProduct}=React.useContext(Appcontext)
// const {setItemDetails} = React.useContext(Appcontext)

// const { setWomensLink , setMenLink , setSunglassesLink ,setAllShopLink , setAllshop} =React.useContext(Appcontext)
// const {setMobilesLink , setCameraLink} = React.useContext(Appcontext)
// const {api}= React.useContext(Appcontext)
// let path = props.location.pathname


// // grtting all store data
// async  function MensData(){
// try{
// const response = await axios.get( api + "/product")
// setWomens(response.data)
// setAllshop(true)
// //   setProduct(false)
// }catch(error){
// console.log(error)
// }  
// }

// React.useEffect(()=>{
// MensData()
// resettingLinks()
// // eslint-disable-next-line react-hooks/exhaustive-deps
// },[])

// //  resetting the link state to control the bg color of the li
// function resettingLinks (){
// setWomensLink(false)
// setMenLink(false)
// setSunglassesLink(false)
// setMobilesLink(false)
// setCameraLink(false)
// setAllShopLink(true)
// }

// return(
// <>
// <Nav/>
// <div style={{width:"300px" , height:"auto" , marginLeft:"280px"}}>
// <div>
// <p className="t2">Home{path}</p>
// <p className="t3">Total Items : {womens.length} items</p>
// </div>
// </div>
// <hr style={{marginBottom:"0px"}}/>
// <div className="container-fluid">
// <div className="row">
// <div  className="col-lg-2 shopNav">
//     <Shop/>
// </div>
// <div className="col-lg-10 productRow">
//     <div className="row  r1">
//         {
//             womens.map((item)=>{
//                 return(
//                     <>
                    
//                     <div className="col-lg-3 col-md-4 col-sm-6 prd" key={item._id}>
//                         {/* <div className="cardInfo"> */}
//                         <Link to="/details" onClick={()=>{
//                             setItemDetails(item)
//                             window.localStorage.setItem("infos", JSON.stringify(item))}} style={{textDecoration:"none"}}>
//                             <div className="cards" >
//                                 <div className="imgDiv"> 
//                                 <img src={item.image} alt=""  className="prodimg"/>
//                                 </div>
//                                 <div className="prdName">
//                                 <p className="itemNames">{item.productName}</p>
//                                 </div>
//                                 <hr style={{margin:"0px"}}/>
//                                 <div className="prdName">
//                                 <p className="type">{item.type}</p>
//                                 </div>
//                                 <div className="prdName">
//                                 <p className="itemNames">₹. {item.price}</p>
//                                 </div>
//                             </div>
//                         {/* </div> */} </Link>
//                     </div>
                    
//                     </>
//                 )
//             })

//         }
//     </div>
// </div>
// </div>
// </div>
// </>
// )
// }

// export default Allshop;
import React from "react";
import Nav from "./navbar";
import Shop from "./shop";
import axios from "axios";
import { Appcontext } from "./context";
import "../css/womens.css"
import { Link } from "react-router-dom";

function Allshop(props){

    const{Womens , setWomens} = React.useContext(Appcontext)
    // const{ setProduct}=React.useContext(Appcontext)
    const {setItemDetails} = React.useContext(Appcontext)

    const { setWomensLink , setMenLink , setSunglassesLink ,setAllShopLink , setAllshop} =React.useContext(Appcontext)
    const {setMobilesLink , setCameraLink} = React.useContext(Appcontext)
    const {api}= React.useContext(Appcontext)
    let path = props.location.pathname

    
// grtting all store data
  async  function MenData(){
    try{
      const response = await axios.get( api + "/allProduct")
      setWomens(response.data)
      setAllshop(true)
    //   setProduct(false)
    }catch(error){
        console.log(error)
    }  
 }

 React.useEffect(()=>{
     MenData()
     resettingLinks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])

//  resetting the link state to control the bg color of the li
 function resettingLinks (){
    setWomensLink(false)
    setMenLink(false)
    setSunglassesLink(false)
    setMobilesLink(false)
    setCameraLink(false)
    setAllShopLink(true)
 }

    return(
        <>
        <Nav/>
        <div style={{width:"300px" , height:"auto" , marginLeft:"280px"}}>
          <div>
              <p className="t2">Home{path}</p>
              {/* <p className="t3">Total Items : {Womens.length} items</p> */}
          </div>
          </div>
          <hr style={{marginBottom:"0px"}}/>
        <div className="container-fluid">
            <div className="row">
                <div  className="col-lg-2 shopNav">
                    <Shop/>
                </div>
                <div className="col-lg-10 productRow">
                    <div className="row  r1">
                        {
                            Womens.map((item)=>{
                                return(
                                    <>
                                    
                                    <div className="col-lg-3 col-md-4 col-sm-6 prd" key={item._id}>
                                        {/* <div className="cardInfo"> */}
                                        <Link to="/details" onClick={()=>{
                                            setItemDetails(item)
                                            window.localStorage.setItem("infos", JSON.stringify(item))}} style={{textDecoration:"none"}}>
                                            <div className="cards" >
                                                <div className="imgDiv"> 
                                                <img src={item.image} alt=""  className="prodimg"/>
                                                </div>
                                                <div className="prdName">
                                                <p className="itemNames">{item.productName}</p>
                                                </div>
                                                <hr style={{margin:"0px"}}/>
                                                <div className="prdName">
                                                <p className="type">{item.type}</p>
                                                </div>
                                                <div className="prdName">
                                                <p className="itemNames">₹ {item.price}</p>
                                                </div>
                                            </div>
                                        {/* </div> */} </Link>
                                    </div>
                                   
                                    </>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Allshop;
