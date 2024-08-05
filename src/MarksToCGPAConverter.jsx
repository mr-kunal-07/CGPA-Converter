import React, { useState } from 'react';
import './MarksToCGPAConverter.css';

const MarksToCGPAConverter = () => {
  const [subjects, setSubjects] = useState([{ name: '', marks: '' }]);
  const [cgpa, setCgpa] = useState(null);

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
    const calculatedCgpa = averageMarks / 10; // Simplified conversion, adjust as needed
    setCgpa(calculatedCgpa.toFixed(2));
  };

  return (
    <div className="converter">
      <h1>Marks to CGPA Converter</h1>
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
            placeholder="Marks"
            className="input-field"
          />
        </div>
      ))}
      <div className="buttons">
        <button onClick={addSubject}>Add Subject</button>
        <button onClick={calculateCGPA}>Convert to CGPA</button>
      </div>
      {cgpa && <h2>Your CGPA: {cgpa}</h2>}
      <a href="https://kunaljadhav.vercel.app" target="_blank" rel="noopener noreferrer" className="website-link">Visit my website</a>
    </div>
  );
};

export default MarksToCGPAConverter;
