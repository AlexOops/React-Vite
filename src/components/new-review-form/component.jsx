import React, {useState} from 'react';
import {useCreateReviewMutation} from "../../redux/service/api.js";
import {Button} from "../button/component.jsx";
import s from "./style.module.scss";
import {Loading} from "../loading/component.jsx";

export const NewReviewForm = ({restaurantId}) => {

    const [createReview, {isLoading}] = useCreateReviewMutation();

    const [text, setText] = useState('');
    const [rating, setRating] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await createReview({
            restaurantId,
            newReview: {
                text,
                rating
            }
        });

        setText('');
        setRating(null);
    }

    if (isLoading) {
        return <Loading text={"Сохраняю отзыв ..."}/>
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>

            <input className={s.input}
                   type="text"
                   value={text}
                   onChange={(e) => setText(e.target.value)}
                   placeholder={'Текст...'}
            />

            <input className={s.input}
                   type="number"
                   value={rating || ''}
                   onChange={(e) => setRating(Number(e.target.value))}
                   placeholder={'Рейтинг от 0 до 5'}
            />

            <Button
                type="submit"
                children={'Оставьть отзыв'}
                viewVariant={'base'}
                size={'m'}
            />
        </form>
    );
};