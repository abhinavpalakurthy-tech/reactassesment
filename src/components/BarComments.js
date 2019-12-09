import React from "react";
import { connect } from "react-redux";
import Comment from "./Comments";
import BarChart from './BarChart'
import { getActiveComments, getInActiveComments, getNumOfHate } from "../redux/selectors";
import {Link} from 'react-router-dom'
import './comments.css'

const BarComments = ({ actives, in_actives, numOfHate }) => {
  const barData = [{text: 'active', length: actives.length}, {text: 'inactive', length: in_actives.length}, {text: 'hate', length: numOfHate}]
  return(
    <div className='comment-app'>
      <Link to='/'>Show Active Comments</Link>
      <div style={{'margin-top': '40px'}}>
        <BarChart data={barData}/>
        
        <p style={{color: 'red'}}>Number Of Deleted Comments: {in_actives.length}</p>

        <table className="comment-list">
            <thead>
            <tr>
                <th>author</th>
                <th>date</th>
                <th>body</th>
                <th>moddy_hates</th>
                <th>delete_reason</th>
            </tr>
            </thead>
            {in_actives && in_actives.length
            ? 
            in_actives.map((in_active, index) => {
                return(
                <Comment key={`active-${index}`} data={in_active} flag={true}/>
                )
            })        
            : 
            <span style={{color:'red'}}>No InActives</span>
            }
        </table> 
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const actives = getActiveComments(state);
  const in_actives = getInActiveComments(state);
  const numOfHate = getNumOfHate()
  return { actives, in_actives, numOfHate };
};

export default connect(mapStateToProps)(BarComments);
