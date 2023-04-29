import { TextField } from '@mui/material'
import "./ExamTeacher.css"
import React,{useState} from 'react'
//Import the main component
import{viewer}from'@react-pdf-viewer/core';
//Plugins
import{defaultLayoutPlugin} from'@react-pdf-viewer/default-layout';
//Import the styles
// import '@react-pdf-viewer/core/lib/styles/ExamTeacher.css';
// import '@react-pdf-viewer/default-layout/lib/styles/ExamTeacher.css';
//Worker
import{Worker} from'@react-pdf-viewer/core';

//for inchange event
export default function ExamTeacher() {
    const [pdfFile,setPdfFile]=useState(null);
    const[pdfFileError,setPdfFileError]=useState('');
    //for submit event
    const[viewPdf,setViewPdf]=useState(null);
    //onchange event
    const fileType=['application/pdf'];
    const handlePdfFileChange=(e)=>{
let selectedFile=e.target.files[0];
if(selectedFile){
if(selectedFile&&fileType.includes(selectedFile.type)){
   let reader=new FileReader();
   reader.onloadend=(e)=>{
    setPdfFile(e.target.result);
    setPdfFileError('');
   }

}
else{
    setPdfFile(null);
    setPdfFileError('Please select valid pdf file');
}
}
else{
    console.log('select your file')
}
    }
    //form submit
    const handlePdfFileSubmit=(e)=>{
        e.preventDefault();
        if(pdfFile!==null){
            setViewPdf(pdfFile);
        }
        else{
setViewPdf(null);
        }
    }
  return (
    <div className='container'>
        <br></br>
        
    <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file" className='form-control'
        required onChange={handlePdfFileChange}
        />
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>
        <button type="submit" className='btn btn-success btn-lg'>
            UPLOAD
        </button>
    </form>
    <br></br>
    <h4>View PDF</h4>
    <div className='pdf-container'>
{/*show pdf*/}
    </div>
    </div>
  )
}
