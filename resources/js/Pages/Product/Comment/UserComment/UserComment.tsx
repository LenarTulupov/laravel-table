import styles from './UserComment.module.scss'
import User from './User/User'
import Rating from './Rating/Rating'
import Recommend from './Recommend/Recommend'

// interface IUserComment {
//   className: ''
//   text: string
// }

const UserComment = () => {
  return (
    <form className={styles['user-comment']}>
      <User />
      <Rating/>
      <div className={styles['user-comment__title']}>
        <label htmlFor="title" className={styles['user-comment__title-label']}>Title of Review</label>
        <input
          type="text"
          placeholder='Give your review a title'
          id='title'
          className={styles['user-comment__title-input']} />
      </div>
      <div className={styles['user-comment__comment']}>
        <label htmlFor="comment" className={styles['user-comment__comment-label']}>
          How was your overall experience?
        </label>
        <textarea id="comment" className={styles['user-comment__comment-text']}></textarea>
      </div>
      <Recommend/>
      <div className={styles['user-comment__buttons']}>
        <button className={styles['user-comment__buttons-photo']}>Add Photos</button>
        <button className={styles['user-comment__buttons-submit']}>Submit</button>
      </div>
    </form>
  )
}

export default UserComment