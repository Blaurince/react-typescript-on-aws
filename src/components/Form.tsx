import React, { useState, FormEvent } from 'react'

import { HelloProps } from '../types/formDataTypes'

export const Form = ()  => {
    const [formData, setFormData]= useState<HelloProps>({firstName: '', lastName: '', age:0})
    const handleFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()



    }
    return (
        <>

        <form action="submit">
            <input type='text' 
            placeholder="first Name" 
            onChange={e => setFormData({ ...formData, firstName: e.target.value} )}/>
            
            <input type='text' 
            placeholder="last Name" 
            onChange={e => setFormData({ ...formData, lastName: e.target.value} )}/>
            
            
            <input type='text' 
            placeholder="age - optional" 
            onChange={e => setFormData({ ...formData, age: Number(e.target.value)} )}/>
             <button type='submit' onClick={(e) => handleFormSubmit(e)} >
                send form

             </button>
        </form>
        </>
    )
}