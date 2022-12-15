import React from 'react'
import Store from './reduxdata/Store'

import {ACTION_ADD_ITEM} from './reduxdata/actions/CartAction'

export default class Product extends React.Component
{
    constructor(){
        super()
        this.state = {
            products : [
                {pid:12,pname:'Product 1',price:3456.555,image:'img/img1.jpg'},
                {pid:13,pname:'Product 2',price:89364.11,image:'img/img2.jpg'},
                {pid:14,pname:'Product 3',price:23948.23,image:'img/img3.jpg'},
                {pid:15,pname:'Product 4',price:12333.43,image:'img/img4.jpg'},
            ]
        }
    }

    addcart = (product)=>{
        Store.dispatch({
                ...ACTION_ADD_ITEM,payload:{product}
        })
    }

  render(){
    return <div className='Product'>
        <table align='center' cellPadding='10' cellSpacing='5'>
            <tbody>
                {this.state.products.map((p,index)=>{
                    return <tr key={index}>
                        <th>{p.pname}</th>
                        <th>{p.price}</th>
                        <th>
                            <img src={p.image}/>
                        </th>
                        <th>
                            <button onClick={()=>this.addcart(p)}>Add to Cart</button>
                        </th>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  }
}



















// import React from 'react'
// import Store from './reduxdata/Store'

// import {ACTION_ADD_ITEM} from './reduxdata/actions/CartAction'

// export default class Product extends React.Component
// {
//     constructor(){
//         super()
//         this.state = {
//             products : [
//                 {pid:12,pname:'Product 1',price:3456.555,image:'img/image1.jpg'},
//                 {pid:13,pname:'Product 2',price:89364.11,image:'img/img2.jpg'},
//                 {pid:14,pname:'Product 3',price:23948.23,image:'img/img3.jpg'},
//                 {pid:15,pname:'Product 4',price:12333.43,image:'img/img4.jpg'},
//             ]
//         }
//     }

//     addcart = (pid)=>{
//         Store.dispatch({
//                 ...ACTION_ADD_ITEM,payload:{pid}
//         })
//     }

//   render(){
//     return <div className='Product'>
//         <table align='center' cellPadding='10' cellSpacing='5'>
//             <tbody>
//                 {this.state.products.map((p,index)=>{
//                     return <tr key={index}>
//                         <th>{p.pname}</th>
//                         <th>{p.price}</th>
//                         <th>
//                             <img src={p.image}/>
//                         </th>
//                         <th>
//                             <button onClick={()=>this.addcart(p.pid)}>Add to Cart</button>
//                         </th>
//                     </tr>
//                 })}
//             </tbody>
//         </table>
//     </div>
//   }
// }