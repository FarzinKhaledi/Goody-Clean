import React from "react";
import Link from "next/link";

const Comments = () => {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">2 Comments:</h3>

        <ol className="comment-list">
          <li className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <img
                    src="/img/blog-details/comment-img-1.jpg"
                    className="avatar"
                    alt="image"
                  />
                  <b className="fn">John Jones</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>April 24, 2024 at 10:59 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </div>

            <ol className="children">
              <li className="comment">
                <div className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <img
                        src="/img/blog-details/comment-img-2.jpg"
                        className="avatar"
                        alt="image"
                      />
                      <b className="fn">Steven Smith</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <span>April 24, 2024 at 10:59 am</span>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#" className="comment-reply-link">
                      Reply
                    </Link>
                  </div>
                </div>
              </li>
            </ol>
          </li>

          <li className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <img
                    src="/img/blog-details/comment-img-3.jpg"
                    className="avatar"
                    alt="image"
                  />
                  <b className="fn">John Doe</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>April 24, 2024 at 10:59 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </div>
          </li>
        </ol>

        <div className="comment-respond">
          <h3 className="comment-reply-title">Leave a Reply</h3>

          <form className="comment-form">
            <p className="comment-notes">
              <span id="email-notes">
                Your email address will not be published.
              </span>
              Required fields are marked
              <span className="required">*</span>
            </p>

            <p className="comment-form-author">
              <label>
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
              />
            </p>

            <p className="comment-form-email">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required />
            </p>

            <p className="comment-form-url">
              <label>Website</label>
              <input type="url" id="url" name="url" />
            </p>

            <p className="comment-form-comment">
              <label>Comment</label>
              <textarea
                name="comment"
                id="comment"
                cols="45"
                rows="5"
                required
              ></textarea>
            </p>

            <p className="form-submit">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                value="Post A Comment"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
