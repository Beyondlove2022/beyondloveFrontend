import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const SingleBlog1 = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Blog Details' pageName='Blog Details' />
      <section className='blog-details-area bg-f9f9f9 ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='blog-details-desc'>
                <div className='article-image'>
                  <img src='/images/blog/blog4.jpg' alt='image' />
                </div>

                <div className='article-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <i className='bx bx-folder-open'></i>
                        <span>Category</span>
                        <a href='#'>Indice</a>
                      </li>
                      <li>
                        <i className='bx bx-group'></i>
                        <span>View</span>
                        813,454
                      </li>
                      <li>
                        <i className='bx bx-calendar'></i>
                        <span>Last Updated</span>
                        Aug 15, 2020
                      </li>
                    </ul>
                  </div>

                  <h3>10 Types of Social Proof & What Makes Them Effective</h3>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <blockquote className='wp-block-quote'>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>

                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <ul className='wp-block-gallery columns-3'>
                    <li className='blocks-gallery-item'>
                      <figure>
                        <img src='/images/blog/blog5.jpg' alt='image' />
                      </figure>
                    </li>

                    <li className='blocks-gallery-item'>
                      <figure>
                        <img src='/images/blog/blog6.jpg' alt='image' />
                      </figure>
                    </li>

                    <li className='blocks-gallery-item'>
                      <figure>
                        <img src='/images/blog/blog7.jpg' alt='image' />
                      </figure>
                    </li>
                  </ul>

                  <h3>Four major elements that we offer:</h3>

                  <ul className='features-list'>
                    <li>
                      <i className='bx bx-badge-check'></i> Scientific skills for
                      getting a better result
                    </li>
                    <li>
                      <i className='bx bx-badge-check'></i> Communication skills to
                      getting in touch
                    </li>
                    <li>
                      <i className='bx bx-badge-check'></i> A career overview
                      opportunity available
                    </li>
                    <li>
                      <i className='bx bx-badge-check'></i> A good work environment
                      for work
                    </li>
                  </ul>

                  <h3>Setting the mood with incense</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <h3>The rise of marketing and why you need it</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className='article-footer'>
                  <div className='article-tags'>
                    <span>
                      <i className='bx bx-purchase-tag'></i>
                    </span>
                    <a href='#'>City</a>,<a href='#'>Games</a>,
                    <a href='#'>Travel</a>
                  </div>

                  <div className='article-share'>
                    <ul className='social'>
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href='#' className='facebook' >
                          <i className='bx bxl-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='twitter' >
                          <i className='bx bxl-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='linkedin' >
                          <i className='bx bxl-linkedin'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='instagram' >
                          <i className='bx bxl-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='article-author'>
                  <div className='author-profile-header'></div>
                  <div className='author-profile'>
                    <div className='author-profile-title'>
                      <img
                        src='/images/user1.jpg'
                        className='shadow-sm'
                        alt='image'
                      />
                      <h4>Chris Orwig</h4>
                      <span className='d-block'>Photographer, Author, Writer</span>
                      <p>
                        Chris Orwig is a celebrated photographer, author, and
                        writer who brings passion to everything he does. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='miran-post-navigation'>
                  <div className='prev-link-wrapper'>
                    <div className='info-prev-link-wrapper'>
                      <a href='#'>
                        <span className='image-prev'>
                          <img src='/images/blog/blog5.jpg' alt='image' />
                          <span className='post-nav-title'>Prev</span>
                        </span>

                        <span className='prev-link-info-wrapper'>
                          <span className='prev-title'>
                            Digital Marketing Strategies for Lead Generation
                          </span>
                          <span className='meta-wrapper'>
                            <span className='date-post'>Aug 20, 2020</span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className='next-link-wrapper'>
                    <div className='info-next-link-wrapper'>
                      <a href='#'>
                        <span className='next-link-info-wrapper'>
                          <span className='next-title'>
                            Agencies Can Successfully Recover From COVID?
                          </span>
                          <span className='meta-wrapper'>
                            <span className='date-post'>Aug 19, 2020</span>
                          </span>
                        </span>

                        <span className='image-next'>
                          <img src='/images/blog/blog6.jpg' alt='image' />
                          <span className='post-nav-title'>Next</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='comments-area'>
                  <h3 className='comments-title'>2 Comments:</h3>

                  <ol className='comment-list'>
                    <li className='comment'>
                      <article className='comment-body'>
                        <footer className='comment-meta'>
                          <div className='comment-author vcard'>
                            <img
                              src='/images/user1.jpg'
                              className='avatar'
                              alt='image'
                            />
                            <b className='fn'>John Jones</b>
                            <span className='says'>says:</span>
                          </div>

                          <div className='comment-metadata'>
                            <a href='#'>
                              <span>April 24, 2019 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>

                        <div className='comment-content'>
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className='reply'>
                          <a href='#' className='comment-reply-link'>
                            Reply
                          </a>
                        </div>
                      </article>

                      <ol className='children'>
                        <li className='comment'>
                          <article className='comment-body'>
                            <footer className='comment-meta'>
                              <div className='comment-author vcard'>
                                <img
                                  src='/images/user2.jpg'
                                  className='avatar'
                                  alt='image'
                                />
                                <b className='fn'>Steven Smith</b>
                                <span className='says'>says:</span>
                              </div>

                              <div className='comment-metadata'>
                                <a href='#'>
                                  <span>April 24, 2019 at 10:59 am</span>
                                </a>
                              </div>
                            </footer>

                            <div className='comment-content'>
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className='reply'>
                              <a href='#' className='comment-reply-link'>
                                Reply
                              </a>
                            </div>
                          </article>

                          <ol className='children'>
                            <li className='comment'>
                              <article className='comment-body'>
                                <footer className='comment-meta'>
                                  <div className='comment-author vcard'>
                                    <img
                                      src='/images/user3.jpg'
                                      className='avatar'
                                      alt='image'
                                    />
                                    <b className='fn'>Sarah Taylor</b>
                                    <span className='says'>says:</span>
                                  </div>

                                  <div className='comment-metadata'>
                                    <a href='#'>
                                      <span>April 24, 2019 at 10:59 am</span>
                                    </a>
                                  </div>
                                </footer>

                                <div className='comment-content'>
                                  <p>
                                    Lorem Ipsum has been the industry’s standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen.
                                  </p>
                                </div>

                                <div className='reply'>
                                  <a href='#' className='comment-reply-link'>
                                    Reply
                                  </a>
                                </div>
                              </article>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>

                    <li className='comment'>
                      <article className='comment-body'>
                        <footer className='comment-meta'>
                          <div className='comment-author vcard'>
                            <img
                              src='/images/user4.jpg'
                              className='avatar'
                              alt='image'
                            />
                            <b className='fn'>John Doe</b>
                            <span className='says'>says:</span>
                          </div>

                          <div className='comment-metadata'>
                            <a href='#'>
                              <span>April 24, 2019 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>

                        <div className='comment-content'>
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className='reply'>
                          <a href='#' className='comment-reply-link'>
                            Reply
                          </a>
                        </div>
                      </article>

                      <ol className='children'>
                        <li className='comment'>
                          <article className='comment-body'>
                            <footer className='comment-meta'>
                              <div className='comment-author vcard'>
                                <img
                                  src='/images/user1.jpg'
                                  className='avatar'
                                  alt='image'
                                />
                                <b className='fn'>James Anderson</b>
                                <span className='says'>says:</span>
                              </div>

                              <div className='comment-metadata'>
                                <a href='#'>
                                  <span>April 24, 2019 at 10:59 am</span>
                                </a>
                              </div>
                            </footer>

                            <div className='comment-content'>
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className='reply'>
                              <a href='#' className='comment-reply-link'>
                                Reply
                              </a>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className='comment-respond'>
                    <h3 className='comment-reply-title'>Leave a Reply</h3>

                    <form className='comment-form'>
                      <p className='comment-notes'>
                        <span id='email-notes'>
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className='required'>*</span>
                      </p>
                      <p className='comment-form-author'>
                        <label>
                          Name <span className='required'>*</span>
                        </label>
                        <input
                          type='text'
                          id='author'
                          placeholder='Your Name*'
                          name='author'
                          required='required'
                        />
                      </p>
                      <p className='comment-form-email'>
                        <label>
                          Email <span className='required'>*</span>
                        </label>
                        <input
                          type='email'
                          id='email'
                          placeholder='Your Email*'
                          name='email'
                          required='required'
                        />
                      </p>
                      <p className='comment-form-url'>
                        <label>Website</label>
                        <input
                          type='url'
                          id='url'
                          placeholder='Website'
                          name='url'
                        />
                      </p>
                      <p className='comment-form-comment'>
                        <label>Comment</label>
                        <textarea
                          name='comment'
                          id='comment'
                          cols='45'
                          placeholder='Your Comment...'
                          rows='5'
                          maxLength='65525'
                          required='required'
                        ></textarea>
                      </p>
                      <p className='comment-form-cookies-consent'>
                        <input
                          type='checkbox'
                          value='yes'
                          name='wp-comment-cookies-consent'
                          id='wp-comment-cookies-consent'
                        />
                        <label htmlFor='wp-comment-cookies-consent'>
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className='form-submit'>
                        <input
                          type='submit'
                          name='submit'
                          id='submit'
                          className='submit'
                          value='Post A Comment'
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <aside className='widget-area'>
                <section className='widget widget_search'>
                  <h3 className='widget-title'>Search</h3>

                  <form className='search-form'>
                    <label>
                      <span className='screen-reader-text'>Search for:</span>
                      <input
                        type='search'
                        className='search-field'
                        placeholder='Search...'
                      />
                    </label>
                    <button type='submit'>
                      <i className='bx bx-search-alt'></i>
                    </button>
                  </form>
                </section>

                <section className='widget widget_miran_posts_thumb'>
                  <h3 className='widget-title'>Popular Posts</h3>

                  <article className='item'>
                    <a href='#' className='thumb'>
                      <span className='fullimage cover bg1' role='img'></span>
                    </a>
                    <div className='info'>
                      <span>June 10, 2020</span>
                      <h4 className='title usmall'>
                        <a href='#'>The Data Surrounding Higher Education</a>
                      </h4>
                    </div>

                    <div className='clear'></div>
                  </article>

                  <article className='item'>
                    <a href='#' className='thumb'>
                      <span className='fullimage cover bg2' role='img'></span>
                    </a>
                    <div className='info'>
                      <span>June 21, 2020</span>
                      <h4 className='title usmall'>
                        <a href='#'>
                          Conversion Rate the Sales Funnel Optimization
                        </a>
                      </h4>
                    </div>

                    <div className='clear'></div>
                  </article>

                  <article className='item'>
                    <a href='#' className='thumb'>
                      <span className='fullimage cover bg3' role='img'></span>
                    </a>
                    <div className='info'>
                      <span>June 30, 2020</span>
                      <h4 className='title usmall'>
                        <a href='#'>
                          Business Data is changing the world’s Energy
                        </a>
                      </h4>
                    </div>

                    <div className='clear'></div>
                  </article>
                </section>

                <section className='widget widget_categories'>
                  <h3 className='widget-title'>Categories</h3>

                  <ul>
                    <li>
                      <a href='#'>
                        Design <span className='post-count'>(03)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Lifestyle <span className='post-count'>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Script <span className='post-count'>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Device <span className='post-count'>(08)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Tips <span className='post-count'>(01)</span>
                      </a>
                    </li>
                  </ul>
                </section>

                <section className='widget widget_tag_cloud'>
                  <h3 className='widget-title'>Popular Tags</h3>

                  <div className='tagcloud'>
                    <a href='#'>
                      Business <span className='tag-link-count'> (3)</span>
                    </a>
                    <a href='#'>
                      Design <span className='tag-link-count'> (3)</span>
                    </a>
                    <a href='#'>
                      Aike <span className='tag-link-count'> (2)</span>
                    </a>
                    <a href='#'>
                      Fashion <span className='tag-link-count'> (2)</span>
                    </a>
                    <a href='#'>
                      Travel <span className='tag-link-count'> (1)</span>
                    </a>
                    <a href='#'>
                      Smart <span className='tag-link-count'> (1)</span>
                    </a>
                    <a href='#'>
                      Marketing <span className='tag-link-count'> (1)</span>
                    </a>
                    <a href='#'>
                      Tips <span className='tag-link-count'> (2)</span>
                    </a>
                  </div>
                </section>

                <section className='widget widget_instagram'>
                  <ul>
                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog9.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#'  className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog8.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#'  className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog7.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#'  className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog6.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#'  className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog5.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#'  className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog4.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#'  className='link-btn'></a>
                      </div>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog1;
