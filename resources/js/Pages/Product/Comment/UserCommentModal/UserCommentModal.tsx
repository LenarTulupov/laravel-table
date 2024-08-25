import { ChangeEvent, FC, useRef, useState } from 'react';
import axios from 'axios';
import User from './User/User';
import Rating from './Rating/Rating';
import Recommend from './Recommend/Recommend';
import CloseButton from '@/Components/Buttons/CloseButton/CloseButton';
import InputLabel from '@/Components/InputLabel/InputLabel';
import TextInput from '@/Components/TextInput/TextInput';
import Button from '@/Components/Buttons/Button/Button';
import styles from './UserCommentModal.module.scss';

// import { useForm } from 'react-hook-form';

interface IUserComment {
  onClick: () => void;
  productId: number;
}

// interface IFormInput {
//   name: string
//   email: string
//   title: string
//   comment: string
//   recommend: string
//   file?: FileList
// }

const UserCommentModal: FC<IUserComment> = ({ onClick, productId }) => {
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [recommend, setRecommend] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // const { control, handleSubmit, reset, setValue, watch } = useForm<IFormInput>({
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     title: '',
  //     comment: '',
  //     recomment: '',
  //     file: null
  //   }
  // })

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_id', productId.toString());
    formData.append('name', name);
    formData.append('email', email);
    formData.append('comment', comment);
    formData.append('rating', rating.toString());

    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.post(`/api/products/${productId}/comments`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setName('');
      setEmail('');
      setTitle('');
      setComment('');
      setRating(0);
      setFile(null);
    } catch (error) {
      console.error('Ошибка при отправке комментария:', error);
    }
  }

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <form className={`${styles['user-comment']}`} onSubmit={handleSubmit}>
          <div className={styles['user-comment__close-button']}>
            <CloseButton onClick={onClick} />
          </div>
        <div className={styles['user-comment__flex']}>
          <User name={name} setName={setName} email={email} setEmail={setEmail} />
        </div>
        <Rating rating={rating} onRatingChange={handleRatingChange} />
        <div className={styles['user-comment__title']}>
          <InputLabel htmlFor='title' className={styles['user-comment__title-label']}>
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
          <InputLabel htmlFor='comment' className={styles['user-comment__comment-label']}>
            How was your overall experience?
          </InputLabel>
          <textarea
            placeholder='Leave your comment of the product'
            id="comment"
            className={styles['user-comment__comment-text']}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <Recommend
          recommend={recommend}
          setRecommend={setRecommend}
          className={styles['recommend-content']}
        />
        <div className={styles['user-comment__buttons']}>
          <input
            className={styles['user-comment__buttons-input']}
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <Button variant="gray" onClick={handleFileButtonClick}>
            Add Photos
          </Button>
          <Button variant="black" type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default UserCommentModal;
