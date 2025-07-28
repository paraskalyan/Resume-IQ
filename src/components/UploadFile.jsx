
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ResumeEditor from './ResumeEditor';
import EditableResumeViewer from './ResumeViewer';
import FileDragDrop from './DragDrop';

import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'

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
        formData.append('resume', file.file);
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
        <div className='flex flex-col items-center container mx-auto'>
            <div className='mt-20'>
                <h2 className='text-2xl font-semibold text-center'>Resume Generator</h2>
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
                    <FileDragDrop file={file} setFile={setFile} />

                    <div>
                        <Label>Job Description:</Label><br />
                        <Textarea className='bg-white' placeholder='Paste Job Description' value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                    </div>


                    <Button type="submit" disabled={loading} className='w-full mt-4 py-5 text-md'>
                        {loading ? 'Processing...' : 'Generate Resume'}
                    </Button>
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
