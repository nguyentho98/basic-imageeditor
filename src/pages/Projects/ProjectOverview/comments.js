import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import images from 'assets/images';

const Comments = ({ comments }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Comments</CardTitle>
        {map(comments, (comment, index) => (
          <Media className="mb-4" key={index}>
            <div className="me-3">
              {comment.userImg ? (
                <img className="media-object rounded-circle avatar-xs" alt="" src={images[comment.userImg]} />
              ) : (
                <div className="avatar-xs">
                  <span className="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16">
                    {comment.username.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <Media body>
              <h5 className="font-size-13 mb-1">{comment.username}</h5>
              <p className="text-muted mb-1">{comment.comment}</p>
              {comment.reply && (
                <Media className="mt-3">
                  <div className="avatar-xs me-3">
                    {comment.reply.userImg ? (
                      <img className="media-object rounded-circle avatar-xs" alt="" src={images[comment.userImg]} />
                    ) : (
                      <span className="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16">
                        {comment.reply.username.charAt(0)}
                      </span>
                    )}
                  </div>
                  <Media body>
                    <h5 className="font-size-13 mb-1">Jeffrey Walker</h5>
                    <p className="text-muted mb-1">as a skeptical Cambridge friend</p>
                  </Media>
                  <div className="ms-3">
                    <Link to="" className="text-primary">
                      Reply
                    </Link>
                  </div>
                </Media>
              )}
            </Media>
            <div className="ml-3">
              <Link to="" className="text-primary">
                Reply
              </Link>
            </div>
          </Media>
        ))}
        <div className="text-center mt-4 pt-2">
          <Link to="#" className="btn btn-primary btn-sm">
            View more
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

Comments.propTypes = {
  comments: PropTypes.array
};

export default Comments;
