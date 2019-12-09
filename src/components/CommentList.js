import React from "react";
import { connect } from "react-redux";
import Comment from "./Comments";
import { getActiveComments } from "../redux/selectors";
import { Link } from 'react-router-dom'
import './comments.css'

const CommentList = ({ actives}) => {
  return(
    <div className='comment-app'>
      <Link to='/bar'>Show BarChart And InActive Comments</Link>
      <table className="comment-list" style={{'marginTop': '40px'}}>
        <thead>
          <tr>
            <th>author</th>
            <th>date</th>
            <th>body</th>
            <th>moddy_hates</th>
            <th>other</th>
          </tr>
        </thead>
        {actives && actives.length
          ? actives.map(active => {
            return(
              <Comment key={`active-${active.id}`} data={active}/>
            )
          })
          : 
          <span style={{color:'red'}}>No Actives</span>
        }
      </table>
    </div>
  )
}

const mapStateToProps = state => {
  const actives = getActiveComments(state);
  return { actives };
};

export default connect(mapStateToProps)(CommentList);
