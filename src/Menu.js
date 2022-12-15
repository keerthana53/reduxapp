import React from 'react'
import './Menu.css'

import {connect} from 'react-redux'
import Store from './reduxdata/Store'
import {ACTION_DEL_ITEM,ACTION_INCREASE_QTY,ACTION_DECREASE_QTY} from './reduxdata/actions/CartAction'
var mapStateToProps = (state)=>{
   return { carts : state }
}

class Menu extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      cartDisplay : 'none'
    }
  }

  deleteItem = (pid)=>{
      Store.dispatch({
        ...ACTION_DEL_ITEM,payload:{pid}
      })
  }

  increase = (pid)=>{
    Store.dispatch({
      ...ACTION_INCREASE_QTY,payload:{pid}
    })
  }

  decrease = (pid)=>{
    Store.dispatch({
      ...ACTION_DECREASE_QTY,payload:{pid}
    })
  }

  render(){
    return <div className='Menu'>
        <h4 onClick={()=>this.setState({cartDisplay:'block'})} style={{cursor:'pointer'}}>Cart Item : {this.props.carts.length} &nbsp;&nbsp;</h4> 

        <div style={{display:this.state.cartDisplay}}>
          <button onClick={()=>this.setState({cartDisplay:'none'})}>Close</button>
        <table align='center' cellPadding='10' cellSpacing='5'>
            <tbody>
                {this.props.carts.map((p,index)=>{
                    return <tr key={index}>
                        <th>{p.product.pname}</th>
                        <th>{p.product.price}</th>
                        <th>
                            <img src={p.product.image} height="100" width="100"/>
                        </th>
                        <th>
                          <button onClick={()=>this.decrease(p.product.pid)}>-</button>
                          &nbsp; &nbsp;
                          {p.qty}
                          &nbsp; &nbsp;
                          <button onClick={()=>this.increase(p.product.pid)}>+</button>
                          <br/><br/>
                          <b style={{color:'red'}}>{p.product.price*p.qty}</b>
                        </th>
                        <th>
                            <button onClick={()=>this.deleteItem(p.product.pid)}>Delete</button>
                        </th>
                    </tr>
                })}
            </tbody>
        </table>
        </div>   
    </div>
  }
}

export default connect(mapStateToProps)(Menu)














// import React from 'react'
// import './Menu.css'

// import {connect} from 'react-redux'

// var mapStateToProps = (state)=>{
//    return { carts : state }
// }

// class Menu extends React.Component
// {
//   render(){
//     return <div className='Menu'>
//         <h4>Cart Item : {this.props.carts.length} &nbsp;&nbsp;</h4>    
//     </div>
//   }
// }

// export default connect(mapStateToProps)(Menu)