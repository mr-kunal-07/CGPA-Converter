// src/MarksToCGPAConverter.jsx
import React, { useState, useRef } from 'react';
import './MarksToCGPAConverter.css';
import { FaSquareInstagram } from 'react-icons/fa6';

const MarksToCGPAConverter = () => {
  const [subjects, setSubjects] = useState([{ name: '', marks: '' }]);
  const [scale, setScale] = useState(100);
  const [cgpa, setCgpa] = useState(null);
  const containerRef = useRef(null);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = subjects.map((subject, i) => {
      if (i === index) {
        return { ...subject, [field]: value };
      }
      return subject;
    });
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', marks: '' }]);
  };

  const calculateCGPA = () => {
    const totalMarks = subjects.reduce((acc, subject) => acc + parseFloat(subject.marks || 0), 0);
    const averageMarks = totalMarks / subjects.length;
    const calculatedCgpa = averageMarks / (scale / 10); // Adjust conversion based on scale
    setCgpa(calculatedCgpa.toFixed(2));
  };

  const generateImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.fillText('Marks to CGPA Conversion', 50, 50);

    subjects.forEach((subject, index) => {
      ctx.fillText(`Subject: ${subject.name}, Marks: ${subject.marks}`, 50, 100 + index * 30);
    });

    if (cgpa) {
      ctx.fillText(`Your CGPA: ${cgpa}`, 50, 100 + subjects.length * 30 + 30);
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'marks_and_cgpa.png';
    link.click();
  };

  return (
    <div className="converter" ref={containerRef}>
      <h5 className='mb-5 text-gray-300'>This is made by student for the students of CSMU for converting their marks to CGPA</h5>

      <h1 className='mb-6 font-bold'>Marks to CGPA Converter</h1>
      <div className="scale-selector mb-3">
        <label htmlFor="scale">Marks Scale: </label>
        <select id="scale" value={scale} onChange={(e) => setScale(parseInt(e.target.value, 10))}>
          <option value={100}>Out of 100</option>
          <option value={90}>Out of 90</option>
          <option value={80}>Out of 80</option>
          <option value={70}>Out of 70</option>
          <option value={60}>Out of 60</option>
          <option value={50}>Out of 50</option>
          <option value={40}>Out of 40</option>
          <option value={30}>Out of 30</option>
          <option value={20}>Out of 20</option>
          <option value={10}>Out of 10</option>
        </select>
      </div>
      {subjects.map((subject, index) => (
        <div key={index} className="subject-input">
          <input
            type="text"
            value={subject.name}
            onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
            placeholder="Subject Name"
            className="input-field"
          />
          <input
            type="number"
            value={subject.marks}
            onChange={(e) => handleSubjectChange(index, 'marks', e.target.value)}
            placeholder={`Marks (out of ${scale})`}
            className="input-field"
          />
        </div>
      ))}
      <div className="buttons">
        <button onClick={addSubject}>Add Subject</button>
        <button onClick={calculateCGPA}>Convert to CGPA</button>
      </div>
      {cgpa && (
        <div>
          <h2 className='mt-4 font-bold font-sans'>Your CGPA: {cgpa}</h2>
          <button onClick={generateImage} className="download-button">
            Download Marks with CGPA
          </button>
        </div>
      )}
      <div className='mt-9 mb-3'>
        <button>
          <a href="https://kunaljadhav.vercel.app" target="_blank" rel="noopener noreferrer" className="website-link">Visit my Website</a>
        </button>
      </div>

      <h5>Made by Kunal Jadhav</h5>
      <a className='flex justify-center' href="https://www.instagram.com/_._kunaljadhav_._23/">
        <FaSquareInstagram className='icon' />
      </a>


    </div>
  );
};

export default MarksToCGPAConverter;
