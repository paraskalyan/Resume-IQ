
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ResumeEditor from './ResumeEditor';
import EditableResumeViewer from './ResumeViewer';
import FileDragDrop from './DragDrop';

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [resultText, setResultText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !jobDescription) {
            alert('Please upload a file and enter job description');
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);
        formData.append('jobDescription', jobDescription);

        try {
            setLoading(true);
            const response = await fetch('http://127.0.0.1:5000/generate-resume', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log(JSON.parse(data))

            setResultText(JSON.parse(data));
        } catch (err) {
            console.error('Error:', err);
            setResultText('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex  justify-between container mx-auto'>
            <div className='mt-20'>
                <h2 className='text-2xl font-semibold my-5'>Resume Generator</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className=' p-4 border border-dashed h-30'>
                        <label>Upload Resume (PDF/DOCX):</label><br />

                        <input
                            type="file"
                            placeholder=''

                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                        />
                        <h6 className='text-gray-400 '>Drag and Drop file</h6>
                    </div> */}
                    <FileDragDrop />

                    <div style={{ marginTop: '1rem' }}>
                        <label>Job Description:</label><br />
                        <textarea
                            rows="6"

                            className='border w-full p-2'
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" disabled={loading} style={{ marginTop: '1rem' }}>
                        {loading ? 'Processing...' : 'Generate Resume'}
                    </button>
                </form>
            </div>
            <div>

                {
                    resultText &&
                    <EditableResumeViewer initialData={resultText} />
                }
            </div>
        </div>
    );
};

export default UploadFile;
