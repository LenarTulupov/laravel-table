import styles from './UserCommentModal.module.scss'
import User from './User/User'
import Rating from './Rating/Rating'
import Recommend from './Recommend/Recommend'
import CloseButton from '@/Components/Buttons/CloseButton/CloseButton'
import { FC, useState } from 'react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'

interface IUserComment {
  onClick: () => void
}

const UserCommentModal: FC<IUserComment> = ({ onClick }) => {
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [recommend, setRecommend] = useState<string>('');


  const handleRatingChange = (value: number) => {
    setRating(value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  console.log(title);
  console.log(comment);
  console.log(recommend);


  return (
    <>
      <form className={`${styles['user-comment']}`} onSubmit={handleSubmit}>
        <div className={styles['user-comment__flex']}>
          <User name={name} setName={setName} email={email} setEmail={setEmail} />
          <div className={styles['user-comment__close-button']}>
            <CloseButton onClick={onClick} />
          </div>
        </div>
        <Rating rating={rating} onRatingChange={handleRatingChange} />
        <div className={styles['user-comment__title']}>
          <InputLabel
            htmlFor='title'
            className={styles['user-comment__title-label']}
          >
            Title of Review
          </InputLabel>
          <TextInput
            id='title'
            placeholder='Give your review a title'
            className={styles['user-comment__title-input']}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles['user-comment__comment']}>
          <InputLabel
            htmlFor='comment'
            className={styles['user-comment__comment-label']}
          >
            How was your overall experience?
          </InputLabel>
          <textarea 
            id="comment"
            className={styles['user-comment__comment-text']} 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <Recommend recommend={recommend} setRecommend={setRecommend} />
        <div className={styles['user-comment__buttons']}>
          <button className={styles['user-comment__buttons-photo']}>Add Photos</button>
          <button className={styles['user-comment__buttons-submit']}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default UserCommentModal