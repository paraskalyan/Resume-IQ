import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const ResumeEditor = ({ value, onChange }) => {
    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            theme="snow"
            style={{ height: '400px' }}
        />
    );
};

export default ResumeEditor;