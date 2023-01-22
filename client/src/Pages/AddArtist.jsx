import React from 'react'
import {toast, Toaster} from 'react-hot-toast'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import './CSS/AddArtist.css'
import { useRef } from 'react'

const AddArtist = () => {
  const nameInp = useRef()
  const changeInp = useRef()
  const nftsInp = useRef()
  const volumeInp = useRef()
  

  const artistSchema = Yup.object().shape({
    name:Yup.string().min(3,"Too Short").max(30,"Too Long").required("You must fill!"),
    change:Yup.number().required("You must fill"),
    nftsSold:Yup.number().required("You must select category!"),
    volume:Yup.number().required("You must select category!")
})

  const formik = useFormik({
    initialValues: {
      name: '',
      change: '',
      nftsSold: '',
      volume: '',
    },
    validationSchema: artistSchema,
    onSubmit: values => {
      const { name, change, nftsSold,volume } = values
      let newArtist = {
        name:name,
        change:change,
        nftsSold:nftsSold,
        volume:volume
      }
      console.log(newArtist);
      axios.post("http://localhost:8080/api/artists", newArtist).then(response => {
        toast.success("Artist added!")
      })
      nameInp.current.value = ''
      changeInp.current.value = ''
      nftsInp.current.value = ''
      volumeInp.current.value = ''
    },
  });





  return (
    <div id='artist__form'>
       <div className='artist__form__content'>
        <h2>Add Artist</h2>
       <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <input 
        ref={nameInp}
        placeholder='Name'
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? (
            <span>{formik.errors.name}</span>
          ):null}
        
        <input 
        ref={changeInp}
        placeholder='Change'
          id="change"
          name="change"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.change && formik.errors.change ? (
            <span>{formik.errors.change}</span>
          ):null}

        <input 
        ref={nftsInp}
        placeholder='NFTs sold'
          id="nftsSold"
          name="nftsSold"
          type="nftsSold"
          onChange={formik.handleChange}
        />
        {formik.touched.nftsSold && formik.errors.nftsSold ? (
            <span>{formik.errors.nftsSold}</span>
          ):null}

        <input 
        ref={volumeInp}
        placeholder='Volume'
          id="volume"
          name="volume"
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.volume && formik.errors.volume ? (
            <span>{formik.errors.volume}</span>
          ):null}

        <button type="submit">Add</button>
      </form>
      <Toaster/>
       </div>
    </div>
  )
}

export default AddArtist