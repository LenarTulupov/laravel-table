import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import User from './User/User';
import Rating from './Rating/Rating';
import Recommend from './Recommend/Recommend';
import CloseButton from '@/Components/ui/Buttons/CloseButton/CloseButton';
import InputLabel from '@/Components/ui/InputLabel/InputLabel';
import Button from '@/Components/ui/Buttons/Button/Button';
import InputField from '@/Components/InputField/InputField';
import Textarea from '@/Components/ui/Textarea/Textarea';
import styles from './UserCommentModal.module.scss';

interface IUserComment {
  onClick: () => void;
  productId: number;
}

const UserCommentModal: FC<IUserComment> = ({ onClick, productId }) => {
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [recommend, setRecommend] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_id', productId.toString());
    formData.append('name', name);
    formData.append('email', email);
    formData.append('title', title);
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
          <User name={name} setName={setName} email={email} setEmail={setEmail} ref={inputRef}/>
        </div>
        <Rating rating={rating} onRatingChange={handleRatingChange} />
        <InputField
          className={styles['user-comment__title']}
          htmlFor='title'
          label='Title of Review'
          id='title'
          placeholder='Give your review a title'
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <div className={styles['user-comment__comment']}>
          <InputLabel htmlFor='comment' className={styles['user-comment__comment-label']}>
            How was your overall experience?
          </InputLabel>
          <Textarea
            className={styles['user-comment__comment-textarea']}
            placeholder='Leave your comment of the product'
            id='comment'
            value={comment}
            onChange={e => setComment(e.target.value)} />
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
