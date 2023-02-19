import React from "react";
import { useBetween } from "use-between";
import useSharedFormState from "./useFormState";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import squareRoundedPlus from '@iconify/icons-tabler/square-rounded-plus';
import squareRoundedMinus from '@iconify/icons-tabler/square-rounded-minus';
import '../styles.css'
import { incDecActions } from '../store/incDec';

const FormPr = (props) => {


    const { isExpanded, setIsExpanded } = useSharedFormState();



    const id = props.id
    const priceee = props.item
    const qty = props.qty

    const countItemArr = useSelector(state => state.incDec.countItemArr)

    const dispatch = useDispatch()

    const incrementItem = () => {
        dispatch(incDecActions.addItem({ id }))
    }
    const decreaseItem = () => {
        dispatch(incDecActions.removeItem({ id }))
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className='allForm'>

            <form className='d-flex align-items-center formPr' onSubmit={handleSubmit(onSubmit)}>

                <input className='formInpSub' type="submit" value='به روزرسانی' />
                <input className='formInpSub2' onClick={() => setIsExpanded(false)} defaultValue='انصراف' readOnly />

                <div className='parNewDiv'>
                    <span className='prTitle' placeholder='تومان'>قیمت جدید</span>
                    <div className='formInp3div'>
                        <span>تومان</span>
                        <input className='formInp3' {...register("newPrice", { required: true })} required />
                    </div>
                    <span className='prTitle'>موجودی جدید</span>
                    <div className='formInp4div'>
                        {qty != null ?
                            < Icon height={40} className='increase_btn' icon={squareRoundedMinus} color='6a6464' onClick={decreaseItem} />
                            :
                            < Icon height={40} className='increase_btn_' icon={squareRoundedMinus} />
                        }
                        <input className='formInp4' {...register("newCountInStock")}
                            defaultValue={
                                qty != null ?
                                    qty
                                    :
                                    0
                            } readOnly />
                        <Icon height={40} className='increase_btn' icon={squareRoundedPlus} color='6a6464' onClick={incrementItem} />
                    </div>
                </div>

            </form>

            <div>
                <div className='curPrSt'>
                    <span className='prTitle'>قیمت فعلی</span>
                    <input className='formInp2' placeholder={
                        (priceee + ' ' + 'تومان')
                    } readOnly />
                    <span className='prTitle'>موجودی فعلی</span>
                    <input className='formInp2' placeholder={1} readOnly />
                </div>
            </div>
        </div>
    );
}

export default FormPr