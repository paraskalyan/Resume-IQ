import React, { useState, useRef } from 'react';
import { Upload, File, X, Check } from 'lucide-react';

export default function FileDragDrop() {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

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

        const droppedFiles = Array.from(e.dataTransfer.files);
        addFiles(droppedFiles);
    };

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        addFiles(selectedFiles);
    };

    const addFiles = (newFiles) => {
        const fileObjects = newFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            uploaded: false
        }));

        setFiles(prev => [...prev, ...fileObjects]);
    };

    const removeFile = (id) => {
        setFiles(prev => prev.filter(f => f.id !== id));
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const simulateUpload = () => {
        if (files.length === 0) return;

        setIsUploading(true);

        // Simulate upload progress for each file
        files.forEach((fileObj, index) => {
            setTimeout(() => {
                setFiles(prev => prev.map(f =>
                    f.id === fileObj.id ? { ...f, uploaded: true } : f
                ));

                if (index === files.length - 1) {
                    setIsUploading(false);
                }
            }, (index + 1) * 800);
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                    Upload Files
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Drag and drop your files here or click to browse
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
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                        accept="*/*"
                    />

                    <div className={`transition-all duration-300 ${isDragging ? 'scale-110' : ''}`}>
                        <Upload
                            className={`w-16 h-16 mx-auto mb-4 transition-colors duration-300 ${isDragging ? 'text-blue-500' : 'text-gray-400'
                                }`}
                        />
                        <p className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDragging ? 'text-blue-600' : 'text-gray-700'
                            }`}>
                            {isDragging ? 'Drop files here' : 'Choose files or drag them here'}
                        </p>
                        <p className="text-gray-500">
                            Support for all file types
                        </p>
                    </div>

                    {isDragging && (
                        <div className="absolute inset-0 bg-blue-500/10 rounded-xl animate-pulse" />
                    )}
                </div>

                {/* File List */}
                {files.length > 0 && (
                    <div className="mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Selected Files ({files.length})
                            </h3>
                            <button
                                onClick={simulateUpload}
                                disabled={isUploading || files.every(f => f.uploaded)}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                            >
                                {isUploading ? 'Uploading...' : 'Upload Files'}
                            </button>
                        </div>

                        <div className="space-y-3">
                            {files.map((fileObj) => (
                                <div
                                    key={fileObj.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg ${fileObj.uploaded ? 'bg-green-100' : 'bg-blue-100'
                                            }`}>
                                            {fileObj.uploaded ? (
                                                <Check className="w-5 h-5 text-green-600" />
                                            ) : (
                                                <File className="w-5 h-5 text-blue-600" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 truncate max-w-xs">
                                                {fileObj.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {formatFileSize(fileObj.size)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        {fileObj.uploaded && (
                                            <span className="text-sm text-green-600 font-medium">
                                                Uploaded
                                            </span>
                                        )}
                                        <button
                                            onClick={() => removeFile(fileObj.id)}
                                            className="p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                                        >
                                            <X className="w-4 h-4 text-red-500" />
                                        </button>
                                    </div>
                                </div>
                            ))}
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
                                    Uploading files...
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}