import React, { useState, useRef } from 'react';
import { Upload, FileText, X, Check, AlertCircle } from 'lucide-react';

export default function FileDragDrop({ file, setFile }) {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const allowedTypes = {
        'application/pdf': '.pdf',
        'application/msword': '.doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
        'text/plain': '.txt'
    };

    const isValidFileType = (file) => {
        return Object.keys(allowedTypes).includes(file.type) ||
            Object.values(allowedTypes).some(ext => file.name.toLowerCase().endsWith(ext));
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsDragging(false);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            addFile(droppedFile);
        }
    };

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            addFile(selectedFile);
        }
    };

    const addFile = (newFile) => {
        setError('');

        if (!isValidFileType(newFile)) {
            setError('Please select a valid file type (PDF, DOC, DOCX, or TXT)');
            return;
        }

        const fileObject = {
            id: Math.random().toString(36).substr(2, 9),
            file: newFile,
            name: newFile.name,
            size: newFile.size,
            type: newFile.type,
            uploaded: false
        };

        setFile(fileObject);
    };

    const removeFile = () => {
        setFile(null);
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const simulateUpload = () => {
        if (!file) return;

        setIsUploading(true);

        // Simulate upload progress
        setTimeout(() => {
            setFile(prev => ({ ...prev, uploaded: true }));
            setIsUploading(false);
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 scale-80 ">
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    Upload Resume
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Drag and drop your resume here or click to browse
                </p>

                {/* Drop Zone */}
                <div
                    className={`
            relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ease-out cursor-pointer
            ${isDragging
                            ? 'border-blue-500 bg-blue-50 scale-105 shadow-lg'
                            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                        }
          `}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileSelect}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                    />

                    <div className={`transition-all duration-300 ${isDragging ? 'scale-110' : ''}`}>
                        <Upload
                            className={`w-16 h-16 mx-auto mb-4 transition-colors duration-300 ${isDragging ? 'text-blue-500' : 'text-gray-400'
                                }`}
                        />
                        <p className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDragging ? 'text-blue-600' : 'text-gray-700'
                            }`}>
                            {isDragging ? 'Drop document here' : 'Choose document or drag it here'}
                        </p>
                        <p className="text-gray-500">
                            Supports PDF, DOC, DOCX, and TXT files
                        </p>
                    </div>

                    {isDragging && (
                        <div className="absolute inset-0 bg-blue-500/10 rounded-xl animate-pulse" />
                    )}
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <p className="text-red-700">{error}</p>
                    </div>
                )}

                {/* File Preview */}
                {file && (
                    <div className="mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Selected Document
                            </h3>
                            {/* <button
                                onClick={simulateUpload}
                                disabled={isUploading || file.uploaded}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                            >
                                {isUploading ? 'Uploading...' : file.uploaded ? 'Uploaded' : 'Upload Document'}
                            </button> */}
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`p-2 rounded-lg ${file.uploaded ? 'bg-green-100' : 'bg-blue-100'
                                        }`}>
                                        {file.uploaded ? (
                                            <Check className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <FileText className="w-5 h-5 text-blue-600" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 truncate max-w-xs">
                                            {file.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {formatFileSize(file.size)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    {file.uploaded && (
                                        <span className="text-sm text-green-600 font-medium">
                                            Uploaded
                                        </span>
                                    )}
                                    <button
                                        onClick={removeFile}
                                        className="p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                                    >
                                        <X className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Upload Progress */}
                {isUploading && (
                    <div className="mt-6">
                        <div className="bg-blue-100 rounded-lg p-4">
                            <div className="flex items-center space-x-3">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                                <span className="text-blue-700 font-medium">
                                    Uploading document...
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}